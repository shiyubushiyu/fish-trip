import Axios from "@/services";

/* 获取热门推荐 */
export function getHotSuggests() {
  return Axios.get({
    url: "/api/home/hotSuggests",
  });
}

/* 分类列表 */
export function getHomeCategories() {
  return Axios.get({
    url: "/api/home/categories",
  });
}

/* 房屋列表 */
export function getHomeHouseList(page) {
  return Axios.get({
    url: `/api/home/houselist?page=${page}`,
  });
}
