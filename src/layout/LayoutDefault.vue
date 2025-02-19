<template>
  <LNavbar />

  <RouterView v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>

  <LFooter />
</template>

<script setup lang="ts"></script>

<style scoped></style>
