<template>
  <div class="icon-box" :class="iconBoxClass">
    <UiIcon :name="name" :color="color" small />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { IconBoxProps } from './types/icon-box'

const props = withDefaults(defineProps<IconBoxProps>(), {
  name: 'admin',
  color: 'black',
  bgColor: 'periwinkle-blue',
})

const iconBoxClass = computed(() => [`text-${props.color}!`, `bg-${props.bgColor}`])
</script>

<style></style>
