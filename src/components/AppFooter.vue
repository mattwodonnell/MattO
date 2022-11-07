<script setup>
import { useGameStore } from "../stores/game";
const gameStore = useGameStore();
const version = COMPILE_TIME;
</script>

<template>
  <div
    class="bg-mitre-blue flex justify-between items-center text-xs font-light py-1 px-2"
  >
    <div>
      {{ gameStore.attemptNumber }} / {{ gameStore.maxAttempts }} /
      {{ gameStore.remainingAttempts() }}
    </div>
    Last Built @ {{ `${version}` }}
  </div>
</template>

<style scoped></style>
