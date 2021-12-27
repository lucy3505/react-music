// export default 生成器函数；
// export default 生成器函数；
// import { FETCH_HOME_MULTIDATA } from "./home";

import { takeEvery, put, all, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  changeBannerAction,
  changerRecommendAction,
  FETCH_HOME_MULTIDATA,
} from "./home";
function* fetchHomeMultidata(action) {
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata"); //这里的yield会判断后面跟的是不是promise，如果是的话会把我们把返回的结果直接给res,然后去执行nextt
  console.log(res);
  const banners = res.data.data.banner.list;
  const recommend = res.data.data.recommend.list;
  // yield put(changeBannerAction(banners)); //put相当于dispatch,把dispatch进行了封装
  // yield put(changerRecommendAction(recommend)); //put相当于dispatch,把dispatch进行了封装
  yield all([
    yield put(changerRecommendAction(recommend)),
    yield put(changeBannerAction(banners)),
  ]);
}

function* mySaga() {
  //takeEvery后面跟上要拦截哪个action
  // yield takeEvery(FETCH_HOME_MULTIDATA, 生成器函数);
  // yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata);

  // takeLatest takeEvery区别：
  // takeLatest:一次只能监听一个对应的action
  // takeEvery：每个都会被执行
  yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata);
  // yield all([
  //   takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata),
  //   // takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultidata),
  // ]);
}

export default mySaga;
