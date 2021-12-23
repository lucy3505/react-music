import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import { Card, Avatar } from "antd";
import "./CSSTransition.less";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { Meta } = Card;
export default class CSSTransitionDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }
  render() {
    const { isShow } = this.state;
    return (
      <div>
        <CSSTransition
          in={isShow}
          classNames="card"
          timeout={5000} //控制类添加的时间的，也是控制unmountOnExit的时间，最好和class保持时间一样
          unmountOnExit={true} //动画退出的时候移除dom
          appear //用户第一次进入能看到动画
          onEnter={(e) => {
            console.log("开始进入");
          }}
          onEntering={(e) => {
            console.log("正在进入");
          }}
          onEntered={(e) => {
            console.log("进入完成");
          }}
          onExit={(e) => {
            console.log("开始退出");
          }}
          onExiting={(e) => {
            console.log("退出状态");
          }}
          onExited={(e) => {
            console.log("退出完成");
          }}
        >
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>

        <button
          onClick={(e) => {
            this.setState({ isShow: !isShow });
          }}
        >
          显示/隐藏
        </button>
      </div>
    );
  }
}
