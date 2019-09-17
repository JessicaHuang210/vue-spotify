import axios from "axios";
import APIs from "./apis";
// 封裝 axios

// 創建 axios實例, 設置通用配置
const axiosConfig = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 1000
});
const Http = {};

axiosConfig.interceptors.request.use(config => {
  config.headers = {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  };
  return config;
});

// 循環抓出不同 api 方法
for (let key in APIs) {
  const api = APIs[key];

  Http[key] = async (params, config = {}) => {
    // 針對不同請求的不同接收參數方法來設置
    // 如果是 put、post、patch
    let response = {}; // 請求的返回值
    if (
      api.method === "put" ||
      api.method === "post" ||
      api.method === "patch"
    ) {
      try {
        response = await axiosConfig[api.method](api.url, params, config);
      } catch (err) {
        response = err;
      }

      // 如果是 get、delete
    } else if (api.method === "get" || api.method === "delete") {
      config.params = params;
      try {
        response = await axiosConfig[api.method](api.url, config);
      } catch (err) {
        response = err;
      }
    }

    return response;
  };
}

export default Http;
