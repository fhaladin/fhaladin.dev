<template>
  <div class="flex flex-col relative">
    <p class="text-body text-white mb-4">Hi all. I am</p>
    <h1 class="text-heading text-white mb-2">Farhan Hanif A.</h1>
    <h2 class="text-subheading font-semibold text-mint-green md:text-periwinkle-blue mb-25">
      <UiTypingText :text="titles" />
    </h2>

    <p class="text-steel-blue mb-1 leading-normal">// Welcom to fhaladin.dev</p>
    <p class="text-steel-blue mb-1 leading-normal">// Hire me for your next project</p>
    <p class="text-steel-blue leading-normal">
      <span class="text-periwinkle-blue">const </span>
      <span class="text-mint-green">mySkills </span>
      <span class="text-white">= </span>
      <span class="text-sunset-orange">[Typescript, Vue.js, Tailwind, Micro Frontend]</span>
    </p>

    <img
      src="/ornament/ornament-blur-green.svg"
      alt="ornament"
      class="absolute max-w-[600px] shrink-0 top-0 -left-[140px] -z-10 opacity-50 lg:hidden"
    />
    <img
      src="/ornament/ornament-blur-blue.svg"
      alt="ornament"
      class="absolute max-w-[600px] shrink-0 bottom-0 -right-[140px] -z-10 opacity-50 lg:hidden"
    />
  </div>
</template>

<script setup lang="ts">
const titles = ['> Frontend Web Developer', '> 5+ years of experience', '> Vue.js enthusiast']
</script>

<style scoped></style>
