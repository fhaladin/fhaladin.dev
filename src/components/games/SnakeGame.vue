<template>
  <canvas
    ref="canvas"
    id="snake-game"
    width="400"
    height="400"
    style="border: 1px solid #000"
  ></canvas>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  const ctx = canvas.value?.getContext('2d')
  if (!ctx) return

  const boxSize = 20
  const snake = [{ x: boxSize * 5, y: boxSize * 5 }]
  let direction = 'RIGHT'
  let food = {
    x: Math.floor(Math.random() * 20) * boxSize,
    y: Math.floor(Math.random() * 20) * boxSize,
  }

  const draw = () => {
    if (ctx && canvas.value) {
      ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

      for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? 'green' : 'white'
        ctx.fillRect(snake[i].x, snake[i].y, boxSize, boxSize)
        ctx.strokeStyle = 'red'
        ctx.strokeRect(snake[i].x, snake[i].y, boxSize, boxSize)
      }

      ctx.fillStyle = 'red'
      ctx.fillRect(food.x, food.y, boxSize, boxSize)

      let snakeX = snake[0].x
      let snakeY = snake[0].y

      if (direction === 'LEFT') snakeX -= boxSize
      if (direction === 'UP') snakeY -= boxSize
      if (direction === 'RIGHT') snakeX += boxSize
      if (direction === 'DOWN') snakeY += boxSize

      if (snakeX === food.x && snakeY === food.y) {
        food = {
          x: Math.floor(Math.random() * 20) * boxSize,
          y: Math.floor(Math.random() * 20) * boxSize,
        }
      } else {
        snake.pop()
      }

      const newHead = { x: snakeX, y: snakeY }

      if (
        snakeX < 0 ||
        snakeY < 0 ||
        snakeX >= canvas.value.width ||
        snakeY >= canvas.value.height ||
        collision(newHead, snake)
      ) {
        return
      }

      snake.unshift(newHead)
    }
  }

  const collision = (head: { x: number; y: number }, snakeArray: { x: number; y: number }[]) => {
    for (let i = 0; i < snakeArray.length; i++) {
      if (head.x === snakeArray[i].x && head.y === snakeArray[i].y) {
        return true
      }
    }
    return false
  }

  const control = ({ key }: KeyboardEvent) => {
    if (key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT'
    else if (key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP'
    else if (key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT'
    else if (key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN'
  }

  document.addEventListener('keydown', control)
  setInterval(draw, 100)
})
</script>

<style scoped></style>
