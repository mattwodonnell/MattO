<script setup>
import RowTiles from "@/components/Board/RowTile.vue";
const props = defineProps({
  boardRow: Array,
});
</script>

<template>
  <div class="flex justify-center gap-x-1">
    <RowTiles
      v-for="(boardTile, index) in boardRow"
      :key="index"
      :letter="boardTile"
    ></RowTiles>
  </div>
</template>

<style scoped></style>
