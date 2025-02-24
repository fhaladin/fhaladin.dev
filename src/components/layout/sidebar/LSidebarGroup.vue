<template>
  <div :id="group.id" class="sidebar-group">
    <div
      class="sidebar-group__head"
      @click="toggleAccordion(group.id)"
      :class="{ active: openAccordion === group.id }"
    >
      <UiIcon
        :name="openAccordion === group.id ? 'arrow-down-s' : 'arrow-right-s'"
        class="sidebar-group__head-icon"
      />
      {{ group.name }}
    </div>

    <ul v-if="openAccordion === group.id" class="sidebar-group__body">
      <li v-for="item in group.items" :key="item.name" class="sidebar-group__item">
        <div
          class="flex items-center"
          @click.stop="toggleItem(item.name)"
          :class="{ 'text-white': openItem === item.name && item.children }"
        >
          <UiIcon
            v-if="item.children"
            :name="openItem === item.name ? 'arrow-down-s' : 'arrow-right-s'"
            variant="line"
            class="sidebar-group__item-icon"
            :class="{ 'text-white': openItem === item.name }"
          />
          <span>{{ item.name }}</span>
        </div>
        <ul v-if="openItem === item.name && item.children" class="sidebar-group__item-children">
          <li v-for="child in item.children" :key="child" class="sidebar-group__item-child">
            <span>{{ child }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
type SidebarItem = {
  name: string
  children?: string[]
}

type SidebarGroup = {
  id: string
  name: string
  items: SidebarItem[]
}

defineProps<{
  group: SidebarGroup
  openAccordion: string | null
  openItem: string | null
}>()

const emit = defineEmits<{
  (e: 'toggle-accordion', id: string): void
  (e: 'toggle-item', name: string): void
}>()

const toggleAccordion = (accordionId: string) => {
  emit('toggle-accordion', accordionId)
}

const toggleItem = (itemName: string) => {
  emit('toggle-item', itemName)
}
</script>
