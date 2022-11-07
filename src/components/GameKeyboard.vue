<script setup>
import { useGameStore } from "@/stores/game";
const gameStore = useGameStore();
</script>

<template>
  <div class="bg-gray-600 p-4">
    <div
      v-for="(row, i) in gameStore.keyboard"
      :key="i"
      class="flex flex-row justify-center gap-1"
      :class="{ 'mt-1': i > 0 }"
    >
      <button
        v-for="(key, index) in row"
        :key="index"
        class="p-4 rounded bg-gray-800 uppercase font-bold"
        @click="$emit('key', key.letter)"
        :class="{
          'bg-green-600': key.state === 'correct',
          'bg-yellow-600': key.state === 'present',
          'bg-gray-500': key.state === 'absent',
        }"
      >
        <span v-if="key.letter !== 'Backspace'">{{ key.letter }}</span>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path
            fill="currentColor"
            d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
