<template>
  <RouterLink class="navbar__item" :class="{ active: isActiveRoute(to) }" :to="to">
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { NavbarMenuProps } from './types/navbar-menu'

withDefaults(defineProps<NavbarMenuProps>(), {
  to: '/',
})

const route = useRoute()
const isActiveRoute = (path: string) => {
  return route.path === path
}
</script>
