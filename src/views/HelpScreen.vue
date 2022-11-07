<script setup>
import GameBoardRow from "@/components/Board/GameBoardRow.vue";
import { useGameStore } from "../stores/game";
const gameStore = useGameStore();
const firstExample = [
  {
    letter: "W",
    state: gameStore.letterStates.CORRECT,
  },
  {
    letter: "E",
    state: gameStore.letterStates.INITIAL,
  },
  {
    letter: "A",
    state: gameStore.letterStates.INITIAL,
  },
  {
    letter: "R",
    state: gameStore.letterStates.INITIAL,
  },
  {
    letter: "Y",
    state: gameStore.letterStates.INITIAL,
  },
];
const secondExample = [
  {
    letter: "P",
    state: gameStore.letterStates.INITIAL,
  },
  {
    letter: "I",
    state: gameStore.letterStates.PRESENT,
  },
  {
    letter: "L",
    state: gameStore.letterStates.INITIAL,
  },
  {
    letter: "L",
    state: gameStore.letterStates.INITIAL,
  },
  {
    letter: "S",
    state: gameStore.letterStates.INITIAL,
  },
];
const thirdExample = [
  {
    letter: "V",
    state: gameStore.letterStates.INITIAL,
  },
  {
    letter: "A",
    state: gameStore.letterStates.INITIAL,
  },
  {
    letter: "G",
    state: gameStore.letterStates.INITIAL,
  },
  {
    letter: "U",
    state: gameStore.letterStates.ABSENT,
  },
  {
    letter: "E",
    state: gameStore.letterStates.INITIAL,
  },
];
</script>

<template>
  <div class="p-4">
    <h1 class="text-xl uppercase text-center font-bold">How to play</h1>
    <p class="text-lg mt-8 font-light">Guess the <b>MIRDL</b> in 6 tries.</p>
    <p class="mt-4">
      Each guess must be a valid 5-letter word. Hit the enter button to submit.
    </p>
    <p class="my-4">
      After each guess, the color of the tiles will change to show how close
      your guess was to the word.
    </p>
    <hr />
    <h2 class="text-lg font-bold mt-8 mb-4">Examples</h2>
    <game-board-row :board-row="firstExample" />
    <p class="mt-4">
      The letter <b>W</b>is in the word and in the correct spot.
    </p>
    <game-board-row class="mt-8" :board-row="secondExample" />
    <p class="mt-4">
      The letter <b>I</b> is in the word but in the wrong spot.
    </p>
    <game-board-row class="mt-8" :board-row="thirdExample" />
    <p class="my-4">The letter <b>U</b> is not in the word in any spot.</p>
    <hr />
    <p class="my-4 font-bold">A new MIRDL will be available each day!</p>
  </div>
</template>

<style scoped></style>
