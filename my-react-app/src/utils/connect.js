import React, { PureComponent } from "react";
// import this.context from "@/this.context";
import { StoreContext } from "./context";

export function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceHoc(WrappedComponent) {
    class EnhanceComponent extends PureComponent {
      constructor(props, context) {
        super(props, context);
        // this.state = {};
        this.state = { storeState: mapStateToProps(context.getState()) };
      }
      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          // this.setState(this.context.getState());
          this.setState({
            storeState: mapStateToProps(this.context.getState()),
          });
        });
      }
      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(this.context.getState())}
            {...mapDispatchToProps(this.context.dispatch)}
          />
        );
      }
    }
    EnhanceComponent.contextType = StoreContext;

    return EnhanceComponent;
  };
}
