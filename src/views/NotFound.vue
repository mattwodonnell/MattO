<script setup></script>

<template>
  <div class="flex flex-col items-center justify-center px-6 space-y-6">
    <div class="text-3xl font-bold">Whoops!</div>
    <div class="text-center">
      Whoops! We can't find the page you're looking for. Please head on back
      <router-link
        :to="{ name: 'home-screen' }"
        class="underline font-semibold text-purple-400"
        >home</router-link
      >
    </div>
  </div>
</template>

<style scoped></style>
