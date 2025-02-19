<template>
  <footer class="footer">
    <div class="footer__left">
      <div class="footer__item border-r">find me in:</div>
      <div
        class="footer__item border-r px-4!"
        @click="redirectUrl('https://www.instagram.com/__fhaladin/')"
      >
        <UiIcon name="instagram" small />
      </div>
      <div
        class="footer__item border-r px-4!"
        @click="redirectUrl('https://www.linkedin.com/in/farhan-hanif-alaudin-11412a139/')"
      >
        <UiIcon name="linkedin-box" small />
      </div>
    </div>

    <div class="footer__right">
      <div class="footer__item border-l" @click="redirectUrl('https://fhaladin-dev.medium.com')">
        <span class="mr-2">fhaladin-dev</span>
        <UiIcon name="medium" small />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const redirectUrl = (url: string) => {
  window.open(url, '_blank')
}
</script>
