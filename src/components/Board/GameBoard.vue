<script setup>
import GameBoardRow from "@/components/Board/GameBoardRow.vue";
import { useGameStore } from "@/stores/game";
const gameStore = useGameStore();
const props = defineProps({
  shakeRowIndex: Number,
});
</script>

<template>
  <div class="py-8 flex flex-col justify-center space-y-1">
    <GameBoardRow
      v-for="n in 6"
      :key="n"
      :board-row="gameStore.board[n - 1]"
      :class="{
        shake: n === shakeRowIndex + 1,
        jump: gameStore.wonTodaysGame && n === gameStore.currentRowIndex + 1,
      }"
    />
  </div>
</template>

<style scoped>
.shake {
  animation: shake 0.5s;
}
@keyframes shake {
  0% {
    transform: translate(1px);
  }
  10% {
    transform: translate(-2px);
  }
  20% {
    transform: translate(2px);
  }
  30% {
    transform: translate(-2px);
  }
  40% {
    transform: translate(2px);
  }
  50% {
    transform: translate(-2px);
  }
  60% {
    transform: translate(2px);
  }
  70% {
    transform: translate(-2px);
  }
  80% {
    transform: translate(2px);
  }
  90% {
    transform: translate(-2px);
  }
  100% {
    transform: translate(1px);
  }
}
.jump {
  animation: jump 0.5s;
}

@keyframes jump {
  0% {
    transform: translateY(0px);
  }
  20% {
    transform: translateY(5px);
  }
  60% {
    transform: translateY(-25px);
  }
  90% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
