import axios, { Method } from "axios";
import { IOneTalk } from "../IType";

axios.defaults.withCredentials = true
axios.defaults.timeout = 10000

/** 
 * 请求拦截器
*/
axios.interceptors.request.use(
    (config) => {
        config.headers = {
            "Content-Type": "application/json",
          };
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

/** 
 * 响应拦截器
*/
axios.interceptors.response.use(
    (response) => {
      if (response.data.errCode === 10001) {
        console.log("登录失效");
      }
      return response;
    },
    (error) => {
      console.log("请求出错：", error);
    }
  );

  //定义类型 T
  async function request <T>(url:string,method:Method,params:object) {
    return  await new Promise<T>((resolve,reject)=>{
        axios.request({
            url:url,
            method:method,
            data:params
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err)
        })
    })
}

export default request