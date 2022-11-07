import { defineStore } from "pinia";

export const useStatisticsStore = defineStore("statistics", {
  state: () => {
    return {
      gamesPlayed: 0,
      gamesWon: 0,
      showStatistics: false,
    };
  },
  getters: {
    winPercentage: (state) => {
      if (state.gamesPlayed === 0) {
        return 0;
      }
      return ((state.gamesWon / state.gamesPlayed) * 100).toFixed(2);
    },
  },
  actions: {
    openStatistics() {
      this.showStatistics = true;
    },
    closeStatistics() {
      this.showStatistics = false;
    },
    incrementGamesPlayed() {
      this.gamesPlayed++;
    },
    incrementGamesWon() {
      this.gamesWon++;
    },
  },
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage }],
  },
});
