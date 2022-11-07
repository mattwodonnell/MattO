<script setup>
import GameCanvas from "@/components/GameCanvas.vue";
import { onBeforeMount } from "vue";
import { useGameStore } from "@/stores/game";

const gameStore = useGameStore();

onBeforeMount(async () => {
  await gameStore.setWordOfTheDay();
});
</script>

<template>
  <GameCanvas />
</template>

<style scoped></style>
