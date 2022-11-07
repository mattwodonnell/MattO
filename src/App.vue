<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <div
    class="relative bg-gray-700 w-full md:max-w-lg h-full overflow-hidden flex flex-col"
  >
    <AppHeader />
    <div class="flex-grow">
      <RouterView class="w-full h-full" />
    </div>
    <AppFooter />
  </div>
</template>

<style></style>
