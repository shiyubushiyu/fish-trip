import Axios from "@/services";

/* 获取所有城市信息 */
export const getCityAll = () => {
  return Axios.get({
    url: "/api/city/all",
  });
};
