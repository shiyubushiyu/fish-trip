import Axios from "@/services";

/* 获取所有城市信息 */
export const getDetailInfos = (houseId) => {
  return Axios.get({
    url: "/api/detail/infos",
    params: {
      houseId,
    },
  });
};
