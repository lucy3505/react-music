import React, { useState, createContext } from "react";
import EffectHookConcelDemo from "./03_useEffect使用/03_useEffect模拟订阅和取消订阅";
import MultiEffectHookDemo from "./03_useEffect使用/04_多个useEffect一起使用";
import ContextHookDemo from "./04_useContext使用/useContext使用";
import Home from "./05_useReducer使用/home";
import Profile from "./05_useReducer使用/profile";
import UseCallbackDemo01 from "./06_useCallback/01_useCallback不能进行的性能优化";
import UseCallbackDemo02 from "./06_useCallback/02_useCallback性能优化";
import UseMemoDemo01 from "./07_useMemo使用/01_useMemo复杂计算的应用";
import UseMemoDemo02 from "./07_useMemo使用/02_useMemo传入自组件应用类型";
import UseRefDemo from "./08_useRef的使用/01_useRef引用Dom";
import UseRefDemo02 from "./08_useRef的使用/02_useRef引用其他数据";
import UseForwardRef from "./09_useImperativeHandle/01_回顾forwardRef的用法";
import UseImperativeRef from "./09_useImperativeHandle/02_useImperativeHandle用法";
import EffectCountDemo from "./10_useLayoutEffect的使用/01_useEffect的count修改";
import UseLayoutEffectCountDemo from "./10_useLayoutEffect的使用/02_useLayoutEffect的count修改";
import CustomLifeHookDemo01 from "./11_自定义hook/01_认识自定义Hook";
import CustomContextShareHook from "./11_自定义hook/02_自定义hook练习-context共享";
// import CUstomScrollPositionHook from "./11_自定义hook/03_自定义hook练习-获取滚动位置";
import CUstomDataStoreHook from "./11_自定义hook/04_自定义hook练习-localStorage存储";

export const UserContext = createContext();
export const ThemeContext = createContext();
export const TokenContext = createContext();
const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {/* 3.useEffect */}
      {/* {show && <EffectHookConcelDemo />}
       */}
      {/* <MultiEffectHookDemo />
      <button onClick={(e) => setShow(!show)}>切换</button> */}

      {/* 4.useContext */}
      {/* <UserContext.Provider value={{ name: "why", age: 18 }}>
        <ThemeContext.Provider value={{ fontSize: "14px", color: "red" }}>
          <ContextHookDemo />
        </ThemeContext.Provider>
      </UserContext.Provider> */}

      {/* 5.useReducer */}
      {/* <Home />
      <Profile /> */}

      {/* 6.useCallback */}
      {/* <UseCallbackDemo01 /> */}
      {/* <UseCallbackDemo02 />*/}

      {/* 7.useMemo */}
      {/* <UseMemoDemo01 />
      <UseMemoDemo02 /> */}

      {/* 8.useRef */}
      {/* <UseRefDemo /> */}
      {/* <UseRefDemo02 /> */}

      {/* 9.forwardRef */}
      {/* <UseForwardRef /> */}
      {/* <UseImperativeRef /> */}

      {/* 10 useEffectLayout */}
      {/* <EffectCountDemo /> */}
      {/* <UseLayoutEffectCountDemo /> */}

      {/* 11 自定义hook */}

      {/* <CustomLifeHookDemo01 /> */}
      {/* <UserContext.Provider value={{ name: "why", age: 18 }}>
        <TokenContext.Provider value={{ token: "123" }}>
          <CustomContextShareHook />
        </TokenContext.Provider>
      </UserContext.Provider>
      <button onClick={(e) => setShow(!show)}>切换</button> */}
      {/* <CUstomScrollPositionHook /> */}
      <CUstomDataStoreHook />
    </div>
  );
};

export default App;
