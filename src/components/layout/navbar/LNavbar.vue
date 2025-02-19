<template>
  <header>
    <nav class="navbar mb-4">
      <div class="navbar__left">
        <div class="navbar__logo">
          <RouterLink to="/"> fhaladin-dev </RouterLink>
        </div>

        <LNavbarMenu
          v-for="(menu, index) in DNavbarMenu"
          :key="menu.text"
          :to="menu.to"
          :class="{ last: index === DNavbarMenu.length - 1 }"
        >
          {{ menu.text }}
        </LNavbarMenu>
      </div>

      <div class="navbar__contact-me">
        <LNavbarMenu to="/contact-me">_contact-me</LNavbarMenu>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { DNavbarMenu } from '@/static/navbar'
</script>
