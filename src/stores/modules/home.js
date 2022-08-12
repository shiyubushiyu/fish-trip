import { defineStore } from "pinia";
import {
  getHotSuggests,
  getHomeCategories,
  getHomeHouseList,
} from "@/services";

export const useHomeStore = defineStore("home", {
  state() {
    return {
      /* 当前热门推荐列表 */
      hotSuggests: [],
      /* 分类列表 */
      categories: [],
      /* 房屋列表数据 */
      currentPage: 1,
      houseList: [],
    };
  },
  actions: {
    /* 获取热门推荐 */
    async fetchHotSuggestData() {
      const res = await getHotSuggests();
      this.hotSuggests = res.data;
    },
    /* 获取分类列表 */
    async fetchCategoriesData() {
      const res = await getHomeCategories();
      this.categories = res.data;
    },
    /* 获取首页列表数据 */
    async fetchHouseListData() {
      const res = await getHomeHouseList(this.currentPage);
      this.houseList.push(...res.data);
      console.log(this.houseList);
      this.currentPage++;
    },
  },
});
