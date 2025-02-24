<template>
  <aside class="sidebar">
    <LSidebarGroup
      v-for="group in groups"
      :key="group.id"
      :group="group"
      :open-accordion="openAccordion"
      :open-item="openItem"
      @toggle-accordion="toggleAccordion"
      @toggle-item="toggleItem"
    />
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LSidebarGroup from './LSidebarGroup.vue'

type SidebarItem = {
  name: string
  children?: string[]
}

type SidebarGroup = {
  id: string
  name: string
  items: SidebarItem[]
}

const openAccordion = ref<string | null>('personal-info')
const openItem = ref<string | null>(null)

const groups = ref<SidebarGroup[]>([
  {
    id: 'personal-info',
    name: 'personal-info',
    items: [
      { name: 'bio', children: ['child bio 1', 'child bio 2'] },
      { name: 'education', children: ['child interest 1', 'child interest 2'] },
    ],
  },
  {
    id: 'contacts',
    name: 'contacts',
    items: [{ name: 'fhaladin.dev@gmail.com' }, { name: '+6289652...' }, { name: '@__fhaladin' }],
  },
])

function toggleAccordion(accordionId: string) {
  openAccordion.value = openAccordion.value === accordionId ? null : accordionId
  openItem.value = null
}

function toggleItem(itemName: string) {
  openItem.value = openItem.value === itemName ? null : itemName
}
</script>
