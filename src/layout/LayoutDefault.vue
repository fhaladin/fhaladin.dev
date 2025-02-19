<template>
  <LNavbar />

  <main class="h-[100vh] pt-[48px] pb-[53px] flex justify-center items-center">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>

    <LFooter />
  </main>
</template>

<script setup lang="ts">
import LFooter from '@/components/layout/footer/LFooter.vue'
</script>

<style scoped></style>
