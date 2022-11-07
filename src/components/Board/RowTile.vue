<script setup>
const props = defineProps({
  letter: Object,
});
</script>

<template>
  <div
    class="border-2 flex items-center justify-center text-3xl uppercase h-16 w-16 font-bold"
    :class="{
      'bg-green-600': letter.state === 'correct',
      'bg-yellow-600': letter.state === 'present',
      'bg-gray-500': letter.state === 'absent',
    }"
  >
    {{ letter.letter }}
  </div>
</template>

<style scoped></style>
