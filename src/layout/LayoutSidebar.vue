<template>
  <LNavbar />

  <main class="h-[100vh] pt-[48px] pb-[53px] flex">
    <LSidebar />

    <div class="content">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>

    <LFooter />
  </main>
</template>

<script setup lang="ts"></script>
