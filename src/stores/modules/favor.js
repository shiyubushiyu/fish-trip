import { defineStore } from "pinia";
import { getFavorList } from "@/services";

export const useFavorStore = defineStore("favor", {
  state() {
    return {};
  },
  actions: {
    async fetchFavorList() {
      const res = await getFavorList();
      console.log(res);
    },
  },
});
