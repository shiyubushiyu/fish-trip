import { defineStore } from "pinia";
import { getDetailInfos } from "@/services";

export const useDetailStore = defineStore("detail", {
  state() {
    return {
      // 详情数据
      detailInfos: {},
    };
  },
  actions: {
    /* 获取详情数据 */
    async fetchDetailInfos(id) {
      const res = await getDetailInfos(id);
      this.detailInfos = res.data;
    },
  },
  getters: {},
});
