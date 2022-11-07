<script setup>
import AppModal from "@/components/AppModal.vue";
import { useStatisticsStore } from "@/stores/statistics";
import { ref } from "vue";

const headerColor = ref("#1f2937");
const randomColor = () => {
  const colors = [
    "#475569",
    "#334155",
    "#1e293b",
    "#0f172a",
    "#4b5563",
    "#1f2937",
    "#111827",
    "#52525b",
    "#3f3f46",
    "#27272a",
    "#18181b",
    "#525252",
    "#404040",
    "#262626",
    "#171717",
    "#57534e",
    "#44403c",
    "#292524",
    "#1c1917",
    "#dc2626",
    "#b91c1c",
    "#991b1b",
    "#7f1d1d",
    "#ea580c",
    "#c2410c",
    "#9a3412",
    "#7c2d12",
    "#d97706",
    "#b45309",
    "#92400e",
    "#78350f",
    "#ca8a04",
    "#a16207",
    "#854d0e",
    "#713f12",
    "#65a30d",
    "#4d7c0f",
    "#3f6212",
    "#365314",
    "#16a34a",
    "#15803d",
    "#166534",
    "#14532d",
    "#059669",
    "#047857",
    "#065f46",
    "#064e3b",
    "#0d9488",
    "#0f766e",
    "#115e59",
    "#134e4a",
    "#0891b2",
    "#0e7490",
    "#155e75",
    "#164e63",
    "#0284c7",
    "#0369a1",
    "#075985",
    "#0c4a6e",
    "#2563eb",
    "#1d4ed8",
    "#1e40af",
    "#1e3a8a",
    "#4f46e5",
    "#4338ca",
    "#3730a3",
    "#312e81",
    "#7c3aed",
    "#6d28d9",
    "#5b21b6",
    "#4c1d95",
    "#9333ea",
    "#7e22ce",
    "#6b21a8",
    "#581c87",
    "#c026d3",
    "#a21caf",
    "#86198f",
    "#701a75",
    "#db2777",
    "#be185d",
    "#9d174d",
    "#831843",
    "#e11d48",
    "#be123c",
    "#9f1239",
    "#881337",
  ];
  headerColor.value = colors[Math.floor(Math.random() * colors.length)];
};

const statisticsStore = useStatisticsStore();
</script>

<template>
  <div>
    <div
      class="h-12 bg-gray-800 flex items-center justify-between px-4 header-color"
    >
      <router-link class="text-2xl font-semibold hover:text-mitre-blue" to="/"
        >MIRDL App</router-link
      >
      <div class="flex items-center">
        <!-- ranbow button to pick random color for header -->
        <button @click="randomColor">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="w-7 h-7"
            viewBox="0 0 100 100"
            version="1.1"
          >
            <g id="surface2798">
              <path
                style="
                  stroke: none;
                  fill-rule: nonzero;
                  fill: rgb(96.078431%, 32.54902%, 46.27451%);
                  fill-opacity: 1;
                "
                d="M 10.417969 89.582031 L 26.042969 89.582031 C 26.042969 54.488281 54.488281 26.042969 89.582031 26.042969 L 89.582031 10.417969 C 45.929688 10.417969 10.417969 45.929688 10.417969 89.582031 Z M 10.417969 89.582031 "
              />
              <path
                style="
                  stroke: none;
                  fill-rule: nonzero;
                  fill: rgb(96.078431%, 73.72549%, 0%);
                  fill-opacity: 1;
                "
                d="M 20.832031 89.582031 L 36.457031 89.582031 C 36.457031 60.242188 60.242188 36.457031 89.582031 36.457031 L 89.582031 20.832031 C 51.675781 20.832031 20.832031 51.675781 20.832031 89.582031 Z M 20.832031 89.582031 "
              />
              <path
                style="
                  stroke: none;
                  fill-rule: nonzero;
                  fill: rgb(0%, 70.980392%, 41.176471%);
                  fill-opacity: 1;
                "
                d="M 31.25 89.582031 L 46.875 89.582031 C 46.875 65.996094 65.996094 46.875 89.582031 46.875 L 89.582031 31.25 C 57.417969 31.25 31.25 57.417969 31.25 89.582031 Z M 31.25 89.582031 "
              />
              <path
                style="
                  stroke: none;
                  fill-rule: nonzero;
                  fill: rgb(23.921569%, 85.098039%, 92.156863%);
                  fill-opacity: 1;
                "
                d="M 41.667969 89.582031 L 57.292969 89.582031 C 57.292969 71.75 71.75 57.292969 89.582031 57.292969 L 89.582031 41.667969 C 63.160156 41.667969 41.667969 63.164062 41.667969 89.582031 Z M 41.667969 89.582031 "
              />
              <path
                style="
                  stroke: none;
                  fill-rule: nonzero;
                  fill: rgb(42.352941%, 9.803922%, 100%);
                  fill-opacity: 1;
                "
                d="M 62.5 89.582031 L 52.082031 89.582031 C 52.082031 68.90625 68.90625 52.082031 89.582031 52.082031 L 89.582031 62.5 C 74.648438 62.5 62.5 74.648438 62.5 89.582031 Z M 62.5 89.582031 "
              />
            </g>
          </svg>
        </button>
        <button @click="statisticsStore.openStatistics()">
          <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M3,22V8H7V22H3M10,22V2H14V22H10M17,22V14H21V22H17Z"
            />
          </svg>
        </button>
        <router-link to="/settings" class="hover:text-mitre-light-blue">
          <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z"
            />
          </svg>
        </router-link>
        <router-link to="/help" class="hover:text-mitre-light-blue">
          <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"
            />
          </svg>
        </router-link>
      </div>
    </div>
    <Transition name="fade">
      <AppModal
        v-if="statisticsStore.showStatistics"
        @close="statisticsStore.closeStatistics()"
      >
        <template v-slot:modal-title>Statistics</template>
        <template v-slot:modal-body>
          <p class="mt-4">Games Played: {{ statisticsStore.gamesPlayed }}</p>
          <p class="mt-2">Games Won: {{ statisticsStore.gamesWon }}</p>
          <p class="mt-2">
            Win Percentage: {{ statisticsStore.winPercentage }}%
          </p>
        </template>
      </AppModal>
    </Transition>
  </div>
</template>

<style scoped>
.header-color {
  background-color: v-bind(headerColor);
}
</style>
