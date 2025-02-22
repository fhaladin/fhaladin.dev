<template>
  <transition mode="out-in" name="fade">
    <TransitionGroup
      v-if="rssFeedData.length"
      name="list-vertical-feeds"
      tag="div"
      class="h-full flex flex-col min-w-[500px] items-center justify-center gap-6 overflow-hidden relative"
      move-class="list-vertical-feeds-move"
    >
      <UiCard
        v-for="(item, index) in displayedFeeds"
        :key="item.guid"
        :text="item.title"
        :image="item.image"
        :size="cardSize(index, displayedFeeds.length)"
        icon="medium"
        iconBackgroundColor="bg-steel-blue"
        button-text="Read more"
        class="flex-shrink-0 absolute"
        @button-click="redirectLink(item.link)"
      />
    </TransitionGroup>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { RssFeedItem } from './types/vertical-feeds'
import { nextTick } from 'vue'

const rssFeedData = ref<RssFeedItem[]>([])
const displayedFeeds = ref<RssFeedItem[]>([])
const interval = ref<number | null>(null)

onMounted(async () => {
  await loadRSSFeed()
  interval.value = setInterval(cycleFeeds, 5000)
})

onUnmounted(() => {
  if (interval.value) {
    clearInterval(interval.value)
  }
})

const cycleFeeds = () => {
  if (displayedFeeds.value.length) {
    displayedFeeds.value.shift()

    setTimeout(() => {
      nextTick(() => {
        const availableFeeds = rssFeedData.value.filter(
          (feed) => !displayedFeeds.value.some((displayed) => displayed.guid === feed.guid),
        )
        if (availableFeeds.length > 0) {
          const nextFeed = availableFeeds[Math.floor(Math.random() * availableFeeds.length)]
          displayedFeeds.value.push(nextFeed)
        }
      })
    }, 300)
  }
}

const loadRSSFeed = async () => {
  try {
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@fhaladin-dev',
    )
    if (response.ok) {
      const data = await response.json()

      rssFeedData.value = (data.items || []).map((item: RssFeedItem) => {
        const parser = new DOMParser()
        const doc = parser.parseFromString(item.content, 'text/html')
        const img = doc.querySelector('img')
        const imageSrc = img ? img.src : ''

        return {
          ...item,
          image: imageSrc,
        }
      })

      const shuffledFeeds = rssFeedData.value.sort(() => 0.5 - Math.random())
      displayedFeeds.value = shuffledFeeds.slice(0, 3)
    }
  } catch (err) {
    console.error('Failed to fetch RSS feed:', err)
  }
}

const redirectLink = (link: string) => {
  window.open(link, '_blank')
}

const cardSize = (index: number, len: number) => {
  if (len === 2) {
    return index === 0 ? 'large' : 'medium'
  } else {
    return index === 1 ? 'large' : 'medium'
  }
}
</script>
