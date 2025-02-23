<template>
  <div :class="cardClasses">
    <div class="card__header">
      <img class="card__image" :src="image" alt="card-thumbnail" />
      <UiIconBox class="card__icon" :class="iconBackgroundColor" :name="icon" />
    </div>

    <div class="card__content">
      <p class="card__text">{{ text }}</p>
      <UiButton class="card__button" variant="secondary" @click="$emit('buttonClick')">
        {{ buttonText }}
      </UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CardProps } from './types/card'

const props = withDefaults(defineProps<CardProps>(), {
  image: 'https://placehold.co/400x200',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  buttonText: 'view-project',
  icon: 'html5',
  iconBackgroundColor: 'bg-sunset-orange',
  size: 'small',
  blur: false,
})

defineEmits(['buttonClick'])

const cardClasses = computed(() => ['card', `card--${props.size}`, { 'card--blur': props.blur }])
</script>
