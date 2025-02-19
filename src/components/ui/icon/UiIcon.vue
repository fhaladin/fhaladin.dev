<template>
  <i class="icon" :class="iconClass"></i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { IconProps } from './types/icon'

const props = withDefaults(defineProps<IconProps>(), {
  variant: 'fill',
  small: false,
  color: 'text-steel-blue',
})

const iconClass = computed(() => [
  `ri-${props.name}-${props.variant}`,
  props.small ? 'icon-sm' : '',
  props.color,
])
</script>
