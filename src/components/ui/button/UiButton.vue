<template>
  <button :class="['btn', buttonTypeClass]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonProps } from './types/button'

const props = defineProps<ButtonProps>()
const buttonTypeClass = computed(() => `btn-${props.variant}`)
</script>
