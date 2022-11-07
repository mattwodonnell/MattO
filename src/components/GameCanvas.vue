<script>
// options API
import GameBoard from "@/components/Board/GameBoard.vue";
import GameKeyboard from "@/components/GameKeyboard.vue";
import { useGameStore } from "@/stores/game";
import { useStatisticsStore } from "@/stores/statistics";
import { mapActions, mapState } from "pinia";
import GameService from "game-service";

export default {
  data() {
    return {
      successMessages: [
        "Genius",
        "Magnificent",
        "Impressive",
        "Splendid",
        "Great",
        "Phew",
      ],
      message: "",
      shakeRowIndex: -1,
    };
  },
  components: {
    GameBoard,
    GameKeyboard,
  },
  computed: {
    ...mapState(useGameStore, [
      "wordOfTheDay",
      "letterStates",
      "currentRow",
      "currentRowIndex",
      "keyboard",
      "attemptNumber",
    ]),
  },
  methods: {
    ...mapActions(useGameStore, [
      "incrementAttempts",
      "initializeBoard",
      "initializeKeyboard",
      "setGameWon",
    ]),
    ...mapActions(useStatisticsStore, [
      "incrementGamesPlayed",
      "incrementGamesWon",
    ]),
    shake() {
      this.shakeRowIndex = this.currentRowIndex;
      setTimeout(() => {
        this.shakeRowIndex = -1;
      }, 1000);
    },
    showMessage(msg) {
      const time = 1000;
      this.message = msg;
      if (time > 0) {
        setTimeout(() => {
          this.message = "";
        }, time);
      }
    },
    updateKeyboardLetters(letter, state) {
      this.keyboard.forEach((row) => {
        row.forEach((tile) => {
          if (tile.letter.toUpperCase() === letter) {
            if (tile.state !== "correct") {
              tile.state = state;
            }
          }
        });
      });
    },
    onKeyUp(event) {
      // all the possible key options we will accept
      const accessibleKeys = "qwertyuiopasdfghjklzxcvbnm".split("");
      accessibleKeys.push("Enter", "Backspace");
      if (accessibleKeys.includes(event.key)) {
        this.onKeyPressed(event.key);
      }
    },
    onKeyPressed(key) {
      // do special cases first
      if (key === "Enter") {
        // process enter
        let isRowComplete = !this.currentRow.find((tile) => {
          return tile.letter === "";
        });
        if (isRowComplete) {
          this.completeRow();
        } else {
          this.showMessage("Not enough letters");
          this.shake();
        }
      } else if (key === "Backspace") {
        // process backspace
        this.clearTile();
      } else {
        // process other keys
        this.addTile(key);
      }
    },
    clearTile() {
      for (const tile of [...this.currentRow].reverse()) {
        if (tile.letter) {
          tile.letter = "";
          break;
        }
      }
    },
    addTile(letter) {
      for (const tile of this.currentRow) {
        if (!tile.letter) {
          tile.letter = letter.toUpperCase();
          break;
        }
      }
    },
    async completeRow() {
      const guess = this.currentRow.map((tile) => tile.letter).join("");
      // check if the user has won
      if (guess === this.wordOfTheDay) {
        this.currentRow.forEach((tile) => {
          tile.state = this.letterStates.CORRECT;
          this.updateKeyboardLetters(tile.letter, tile.state);
        });
        setTimeout(() => {
          this.showMessage(this.successMessages[this.currentRowIndex]);
        }, 1000);
        this.setGameWon();
        this.incrementGamesPlayed();
        this.incrementGamesWon();
      } else {
        const validWord = await GameService.checkWord(guess);
        if (!validWord) {
          this.showMessage("Word not in list");
          this.shake();
        } else {
          const answerLetters = this.wordOfTheDay.split("");
          this.currentRow.forEach((tile, i) => {
            if (answerLetters[i] === tile.letter) {
              tile.state = this.letterStates.CORRECT;
            } else if (answerLetters.includes(tile.letter)) {
              tile.state = this.letterStates.PRESENT;
            } else {
              tile.state = this.letterStates.ABSENT;
            }
            this.updateKeyboardLetters(tile.letter, tile.state);
          });
          if (this.attemptNumber === 6) {
            this.showMessage("You lost!");
            this.shake();
            this.incrementGamesPlayed();
          } else {
            this.incrementAttempts();
          }
        }
      }
    },
  },
  mounted() {
    window.addEventListener("keyup", this.onKeyUp);
  },
  beforeUnmount() {
    window.removeEventListener("keyup", this.onKeyUp);
  },
};
</script>

<template>
  <div class="flex flex-col">
    <Transition>
      <div
        class="bg-gray-100 px-4 py-2 font-bold text-black left-[50%] translate-x-[-50%] fixed rounded mx-auto"
        v-if="message"
      >
        {{ message }}
      </div>
    </Transition>

    <GameBoard :shakeRowIndex="shakeRowIndex" class="flex-grow" />
    <GameKeyboard @key="onKeyPressed" />
  </div>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
