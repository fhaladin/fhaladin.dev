<template>
  <div class="flex items-center justify-center">
    <div
      @click="startGame"
      class="w-[400px] h-[400px] border border-black rounded-4xl bg-white flex items-center justify-center pr-30 relative"
    >
      <img :src="sprites[animation][currentFrame]" alt="" width="200px" />
      <div
        v-if="showOverlay"
        class="absolute inset-0 rounded-4xl bg-white bg-opacity-75 flex items-center justify-center opacity-60 pl-30 font-bold"
      >
        Click to play!
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive, onUnmounted } from 'vue'
import _dinoIdle from '@/assets/sprite/dino/idle'
import _dinoJump from '@/assets/sprite/dino/jump'
import _dinoRun from '@/assets/sprite/dino/run'

const sprites = reactive({
  dinoIdle: _dinoIdle,
  dinoJump: _dinoJump,
  dinoRun: _dinoRun,
})

const animation = ref<keyof typeof sprites>('dinoIdle')
const currentFrame = ref<number>(0)
const animationInterval = ref<number | undefined>(undefined)
const speed = ref<number>(20)
const returnToRunAfterJump = ref(false)
const showOverlay = ref(true)

onMounted(() => {
  startIdle()
  window.addEventListener('keydown', handleSpacebar)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleSpacebar)
})

function startAnimation(type: keyof typeof sprites) {
  clearInterval(animationInterval.value)

  currentFrame.value = 0
  animation.value = type

  animationInterval.value = window.setInterval(() => {
    currentFrame.value = (currentFrame.value + 1) % sprites[type].length
    if (currentFrame.value === 0) {
      if (type === 'dinoJump' && returnToRunAfterJump.value) {
        returnToRunAfterJump.value = false
        startRunning()
      } else if (type !== 'dinoRun') {
        startIdle()
      }
    }
  }, 1000 / speed.value)
}

function startIdle() {
  startAnimation('dinoIdle')
}

function startRunning() {
  startAnimation('dinoRun')
}

function handleSpacebar(event: KeyboardEvent) {
  if (!showOverlay.value && event.code === 'Space' && animation.value !== 'dinoJump') {
    if (animation.value === 'dinoRun') {
      returnToRunAfterJump.value = true
    }
    startAnimation('dinoJump')
  }
}

function startGame() {
  if (showOverlay.value) {
    showOverlay.value = false
    startRunning()
  } else {
    showOverlay.value = true
    startIdle()
  }
}
</script>
