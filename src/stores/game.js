import { defineStore } from "pinia";
import gameService from "game-service";

export const useGameStore = defineStore("game", {
  state: () => {
    return {
      board: [],
      keyboard: [],
      maxAttempts: 6,
      attemptNumber: 1,
      wordOfTheDay: "",
      letterStates: {
        INITIAL: "initial",
        CORRECT: "correct",
        PRESENT: "present",
        ABSENT: "absent",
      },
      currentRowIndex: 0,
      wonTodaysGame: false,
    };
  },
  getters: {
    remainingAttempts: (state) => () =>
      state.maxAttempts - state.attemptNumber + 1,
    currentRow: (state) => state.board[state.currentRowIndex],
  },
  actions: {
    setGameWon() {
      this.wonTodaysGame = true;
    },
    incrementAttempts() {
      this.attemptNumber++;
      if (this.currentRowIndex < 6) {
        this.currentRowIndex++;
      }
    },
    async setWordOfTheDay() {
      const word = await gameService.fetchGameData();
      if (word) {
        if (this.wordOfTheDay !== word) {
          this.$reset();
          setTimeout(() => {
            this.wordOfTheDay = word;
            this.initializeBoard();
            this.initializeKeyboard();
          }, 1000);
        }
      }
    },
    initializeBoard() {
      // set a [6][5] array for the game board
      this.board = Array.from({ length: 6 }, () =>
        Array.from({ length: 5 }, () => ({
          letter: "",
          state: this.letterStates.INITIAL,
        }))
      );
    },
    initializeKeyboard() {
      const rows = [
        "qwertyuiop".split(""),
        "asdfghjkl".split(""),
        ["Enter", ..."zxcvbnm".split(""), "Backspace"],
      ];
      let updatedRow = [];
      rows.forEach((row) => {
        row.forEach((tile) => {
          updatedRow.push({
            letter: tile,
            state: this.letterStates.INITIAL,
          });
        });
        this.keyboard.push(updatedRow);
        updatedRow = [];
      });
    },
  },
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage }],
  },
});
