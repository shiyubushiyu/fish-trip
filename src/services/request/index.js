// npm install axios
import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
import { useMainStore } from "@/stores";

class VAxios {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        const mainStore = useMainStore();
        // 发送网络请求开启loading效果
        mainStore.showLoading = true;
        return config;
      },
      (err) => {
        return err;
      }
    );
    // 响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        const mainStore = useMainStore();
        // 响应后，关闭loading
        mainStore.showLoading = false;
        return res;
      },
      (err) => {
        const mainStore = useMainStore();
        // 响应后，关闭loading
        mainStore.showLoading = false;
        return err;
      }
    );
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(
        (res) => {
          resolve(res.data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

export default new VAxios(BASE_URL, TIMEOUT);
