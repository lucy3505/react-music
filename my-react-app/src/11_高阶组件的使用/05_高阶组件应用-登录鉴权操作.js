import React, { PureComponent } from "react";

class LoginPage extends PureComponent {
  render() {
    return <div>login</div>;
  }
}
function withAuth(WrappedComponent) {
  // return (props) => { //这样出现在devtool中就是匿名的
  //   const { isLogin } = props;
  //   if (isLogin) {
  //     return <WrappedComponent {...props} />;
  //   } else {
  //     return <LoginPage />;
  //   }
  // };
  const NewCpn = (props) => {
    //这样出现在devtool中就是匿名的
    const { isLogin } = props;
    if (isLogin) {
      return <WrappedComponent {...props} />;
    } else {
      return <LoginPage />;
    }
  };
  NewCpn.displayName = "AuthCpn";
  return NewCpn;
}

class CartPage extends PureComponent {
  render() {
    return <div>CartPage</div>;
  }
}
const AuthCartPage = withAuth(CartPage);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        {/* <CartPage isLogin={false} /> 开发中还是用的这个，因为export default就行*/}
        <AuthCartPage isLogin={true} />
      </div>
    );
  }
}
