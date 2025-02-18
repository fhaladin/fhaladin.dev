<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

      <br />

      <p class="text-black">Black</p>
      <p class="text-midnight-navy">Midnight Navy</p>
      <p class="text-midnight-teal">Midnight Teal</p>
      <p class="text-charcoal-blue">Charcoal Blue</p>

      <p class="text-steel-blue">Steel Blue</p>
      <p class="text-periwinkle-blue">Periwinkle Blue</p>

      <p class="text-tropical-teal">Tropical Teal</p>
      <p class="text-mint-green">Mint Green</p>

      <p class="text-sunset-orange">Sunset Orange</p>
      <p class="text-coral-pink">Coral Pink</p>
      <p class="text-lavender-purple">Lavender Purple</p>

      <br />
      <p class="text-sunset-orange text-heading">Typography Heading</p>
      <p class="text-sunset-orange text-subheading">Typography Subheading</p>
      <p class="text-sunset-orange text-body">Typography Body</p>
      <p class="text-sunset-orange text-label">Typography Label</p>
      <p class="text-sunset-orange text-code-snippets">Typography Code Snippets</p>
      <br />

      <UiButton variant="primary">start-game</UiButton>
      <UiButton variant="secondary">start-game</UiButton>
      <UiButton variant="outline">start-game</UiButton>

      <UiIcon name="admin" variant="line" />
      <UiIcon name="html5" />
      <UiIcon name="arrow-right" variant="line" small />
      <UiIcon name="store" />

      <br />
      <br />

      <UiIconBox name="reactjs" color="black" bg-color="mint-green" />
      <UiIconBox name="html5" color="black" bg-color="sunset-orange" />
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
