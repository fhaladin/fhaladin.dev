<template>
  <button :class="['btn', buttonTypeClass]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  variant: 'primary' | 'secondary' | 'outline'
  customClass?: string
}>()

const buttonTypeClass = `btn-${props.variant}`
</script>
