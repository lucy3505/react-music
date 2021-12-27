import React, { PureComponent } from "react";
import store from "@/store";
// import { StoreContext } from "./context";

export function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceHoc(WrappedComponent) {
    return class extends PureComponent {
      constructor(props) {
        super(props);
        // this.state = {};
        this.state = { storeState: mapStateToProps(store.getState()) };
      }
      componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          // this.setState(store.getState());
          this.setState({ storeState: mapStateToProps(store.getState()) });
        });
      }
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(store.getState())}
            {...mapDispatchToProps(store.dispatch)}
          />
        );
      }
    };
  };
}
