import Axios from "@/services";

/* 获取收藏 */
export const getFavorList = () => {
  return Axios.get({
    url: "/api/favor/list",
  });
};
