<template>
  <div class="content">
    <div class="flex gap-20 items-center h-full">
      <SectionHero />

      <div class="hidden lg:block">
        <SectionVerticalFeeds />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionHero from '@/components/views/hello/SectionHero.vue'
import SectionVerticalFeeds from '@/components/views/hello/SectionVerticalFeeds.vue'
</script>
