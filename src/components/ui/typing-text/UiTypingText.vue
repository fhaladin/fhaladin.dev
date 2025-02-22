<template>
  <div class="inline-block">
    <span class="typed-text" :style="{ width: currentTextWidth + 'ch' }">
      {{ currentText }}
    </span>
    <span class="cursor">|</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { TypingTextProps } from './types/typing-text'

const props = defineProps<TypingTextProps>()

const textsToType = props.text
const textToTypeIndex = ref(0)
const textToType = ref(textsToType[textToTypeIndex.value])
const currentText = ref('')
const currentTextIndex = ref(0)
const currentTextWidth = ref(0)

const typeSpeed = 150
const clearDelay = 1500

const typeCharacter = () => {
  if (currentTextIndex.value < textToType.value.length) {
    currentText.value += textToType.value.charAt(currentTextIndex.value)
    currentTextWidth.value = currentText.value.length
    currentTextIndex.value++
    setTimeout(typeCharacter, typeSpeed)
  } else {
    setTimeout(clearText, clearDelay)
  }
}

const clearText = () => {
  currentText.value = ''
  currentTextWidth.value = 0
  currentTextIndex.value = 0
  textToTypeIndex.value = (textToTypeIndex.value + 1) % textsToType.length
  textToType.value = textsToType[textToTypeIndex.value]
  setTimeout(typeCharacter, typeSpeed)
}

onMounted(() => {
  typeCharacter()
})
</script>
