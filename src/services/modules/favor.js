import Axios from "@/services";

/* θ·εζΆθ */
export const getFavorList = () => {
  return Axios.get({
    url: "/api/favor/list",
  });
};
