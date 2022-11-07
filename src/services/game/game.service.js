import { SERVICE_URLS } from "@/services/service-utilities";
export default {
  async fetchGameData() {
    const res = await fetch(SERVICE_URLS.GAME_DATA, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res) {
      const data = await res.json();
      if (data.word) {
        return data.word;
      }
    }
  },
  async checkWord(wordToCheck) {
    let isInList = false;
    try {
      const res = await fetch(`${SERVICE_URLS.WORD_CHECKER}/${wordToCheck}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        isInList = true;
      }
    } catch (err) {
      console.log(err);
    }
    return isInList;
  },
};
