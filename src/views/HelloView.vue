<template>
  <div class="content">
    <div class="flex gap-20 items-center">
      <div class="flex flex-col">
        <p class="text-body text-white mb-4">Hi all. I am</p>
        <h1 class="text-heading text-white mb-2">Farhan Hanif A.</h1>
        <h2 class="text-subheading font-semibold text-periwinkle-blue mb-25">
          &gt; Frontend Web Developer
        </h2>

        <p class="text-steel-blue mb-3">// Try to play the dino</p>
        <p class="text-steel-blue mb-3">// You can press space to jump!</p>
        <p class="text-steel-blue">
          <span class="text-periwinkle-blue">const </span>
          <span class="text-mint-green">mySkills </span>
          <span class="text-white">= </span>
          <span class="text-sunset-orange">[Typescript, Vue.js, Tailwind, Micro Frontend]</span>
        </p>
      </div>

      <DinoRun />
    </div>
  </div>
</template>

<script setup lang="ts">
import DinoRun from '@/components/games/DinoRun.vue' // Import the new component
</script>
