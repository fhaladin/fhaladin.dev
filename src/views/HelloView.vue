<template>
  <div class="content">
    <div class="flex gap-20 items-center h-full">
      <div class="flex flex-col">
        <p class="text-body text-white mb-4">Hi all. I am</p>
        <h1 class="text-heading text-white mb-2">Farhan Hanif A.</h1>
        <h2 class="text-subheading font-semibold text-periwinkle-blue mb-25">
          &gt;
          <UiTypingText
            :text="['Frontend Web Developer', '5+ years experience', 'Vue.js enthusiast']"
          />
        </h2>

        <p class="text-steel-blue mb-3">// Try to play the dino</p>
        <p class="text-steel-blue mb-3">// You can press space to jump!</p>
        <p class="text-steel-blue">
          <span class="text-periwinkle-blue">const </span>
          <span class="text-mint-green">mySkills </span>
          <span class="text-white">= </span>
          <span class="text-sunset-orange">[Typescript, Vue.js, Tailwind, Micro Frontend]</span>
        </p>
      </div>

      <div v-if="rssFeedData" class="h-full overflow-y-scroll flex flex-col gap-6">
        <UiCard
          v-for="item in rssFeedData"
          :key="item.guid"
          :text="item.title"
          :image="item.image"
          icon="medium"
          iconBackgroundColor="bg-steel-blue"
          button-text="Read more"
          class="flex-shrink-0"
          large
          @button-click="redirectLink(item.link)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface RssFeedItem {
  title: string
  pubDate: string
  link: string
  guid: string
  author: string
  thumbnail: string
  description: string
  content: string
  enclosure: Record<string, unknown>
  categories: string[]
  image: string
}

const rssFeedData = ref<RssFeedItem[]>([])

onMounted(() => {
  loadRSSFeed()
})

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
    }
  } catch (err) {
    console.error('Failed to fetch RSS feed:', err)
  }
}

const redirectLink = (link: string) => {
  window.open(link, '_blank')
}
</script>
