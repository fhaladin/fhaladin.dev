<template>
  <div class="card" :class="`card--${size}`">
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
import type { CardProps } from './types/card'

withDefaults(defineProps<CardProps>(), {
  image: 'https://placehold.co/400x200',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  buttonText: 'view-project',
  icon: 'html5',
  iconBackgroundColor: 'bg-sunset-orange',
  size: 'small',
})

defineEmits(['buttonClick'])
</script>
