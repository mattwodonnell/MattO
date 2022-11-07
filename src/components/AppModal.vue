<script setup></script>

<template>
  <div>
    <div
      class="h-full w-full fixed top-0 left-0 z-20 bg-black opacity-50"
      v-on:click="$emit('close')"
    ></div>
    <div
      role="dialog"
      aria-modal="true"
      class="bg-black rounded-lg text-lg p-6 shadow-lg w-96 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
      v-on:click="$emit('close')"
    >
      <div class="flex justify-between" id="modal-header">
        <h2 class="text-xl uppercase text-center font-bold">
          <slot name="modal-title"></slot>
        </h2>
        <button v-on:click="$emit('close')">
          <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"
            />
          </svg>
        </button>
      </div>
      <div>
        <slot name="modal-body"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
