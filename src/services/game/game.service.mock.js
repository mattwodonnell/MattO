import mockData from "./mock-game-data.json";

const words = ["ROATE", "TINES", "MITRE", "WINCE", "WHOSE"];

export default {
  async fetchGameData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData.word);
      }, 1500);
    });
  },
  async checkWord(wordToCheck) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(words.includes(wordToCheck));
      });
    });
  },
};
