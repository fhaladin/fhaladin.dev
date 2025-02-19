<template>
  <div class="icon-box">
    <UiIcon :name="name" :color="iconColor" small />
  </div>
</template>

<script setup lang="ts">
import type { IconBoxProps } from './types/icon-box'

withDefaults(defineProps<IconBoxProps>(), {
  name: 'admin',
  iconColor: 'text-black',
})
</script>

<style></style>
