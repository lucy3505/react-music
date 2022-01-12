import React, { useEffect } from "react";

const Home = () => {
  useLoggingLife("home");
  return <h2>Home</h2>;
};

const Profile = () => {
  useLoggingLife("profile");
  return <h2>Profile</h2>;
};

export default function CustomLifeHookDemo01() {
  useLoggingLife();
  return (
    <div>
      <h2>CustomLifeHookDemo01</h2>
      <Home />
      <Profile />
    </div>
  );
}

// function loggingLife(name) {
//   useEffect(() => {
//     console.log(`${name}组件创建出来了`);
//     return () => {
//       console.log("组件销毁了");
//     };
//   }, []);
// }
function useLoggingLife(name) {
  useEffect(() => {
    console.log(`${name}组件创建出来了`);
    return () => {
      console.log("组件销毁了");
    };
  }, []);
}
