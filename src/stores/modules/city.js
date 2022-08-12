import { defineStore } from "pinia";
import { getCityAll } from "@/services";

/* 创建store */
// defineStore方法接收两个参数，一个是store的名称，一个是数据对象
export const useCityStore = defineStore("city", {
  // 数据
  state: () => ({
    allCitys: {}, // 所有城市
    currentCity: {}, // 当前选择的城市
  }),
  // 方法
  actions: {
    /* 获取所有城市信息 */
    async fetchAllCitiesData() {
      const res = await getCityAll();
      this.allCitys = res.data;
    },
  },
});
