import React, { PureComponent } from "react";
import axios from "axios";

import request from "./service/request";
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    //1.真是开发逻辑：拿到数据
    // this.setState({
    //   products:[...this.state.products,...res]
    // })

    //2.axios发送基本的网络请求
    // axios({
    //   url: "https://httpbin.org/get",
    //   params: {
    //     name: "why",
    //     age: 18,
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // axios({
    //   url: "https://httpbin.org/post",
    //   data: {
    //     name: "xyy",
    //     age: 40,
    //   },
    //   method: "post",
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    //3.axios发送get和post请求
    // axios
    //   .get("https://httpbin.org/get", {
    //     params: {
    //       name: "why",
    //       age: 18,
    //     },
    //   })
    //   .then(console.log);

    // axios
    //   .post("https://httpbin.org/post", {
    //     name: "lucy",
    //   })
    //   .then(console.log);

    // axios.request();

    // 4.源码阅读

    //5.await async
    // try {
    //   const res = await axios.get("https://httpbin.org/get", {
    //     params: {
    //       name: "lile",
    //       age: 20,
    //     },
    //   });
    //   console.log(res);
    // } catch (err) {
    //   console.log(err);
    // }

    // 6.axos.all
    // const request1 = axios({
    //   url: "/get",
    //   params: {
    //     name: "why",
    //   },
    // });

    // const require2 = axios({
    //   url: "/post",
    //   data: { name: "xxxx" },
    //   method: "post",
    // });
    // axios
    //   .all([request1, require2])
    //   .then(([res1, res2]) => {
    //     console.log(res1);
    //     console.log(res2);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    //6.创建新的实例
    // const instance1 = axios.create({
    //   baseURL: "http://colderwhu.xyz",
    //   timeout: 5000,
    //   headers: {},
    // });

    // const instance2 = axios.create({
    //   baseURL: "http://baidu.xyz",
    //   timeout: 5000,
    //   headers: {},
    // });

    //拦截器
    axios.interceptors.request.use(
      (config) => {
        //发送请求时，在界面的中间位置显示loading组件，

        //2.某一些请求要求用户必须携带token,如果没有携带，那么直接跳转到登录页面

        //3.param/data序列化的操作
        console.log("请求被拦截");
        return config;
      },
      (err) => {}
    );

    axios.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              console.log("请求错误");
              break;
            case 401:
              console.log("未授访问");
              break;
            default:
              console.log("other");
          }
        }
        return err;
      }
    );

    //   axios
    //     .get("https://httpbin.org/get", {
    //       params: { name: 1 },
    //     })
    //     .then((res) => console.log(res))
    //     .catch(console.log);

    request({ url: "/get", params: { name: "why" } }).then(console.log);
  }

  render() {
    return <div>App</div>;
  }
}
