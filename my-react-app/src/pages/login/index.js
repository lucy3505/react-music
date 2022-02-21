import React, { memo, useRouter } from "react";
import { Form, Input, Button, message } from "antd";
import { LoginWrapper } from "./style";
import { useHistory } from "react-router-dom";
const Login = memo(() => {
  const history = useHistory();
  const onFinish = (values) => {
    console.log("Success:", values);
    if (values.day === "520") {
      history.push("/letter");
    } else {
      onFinishFailed("输入错误");
    }
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
    message.error(errorInfo);
  };

  return (
    // <div>1</div>
    <LoginWrapper>
      <Form
        name="basic"
        // labelCol={{ span: 4 }}
        // wrapperCol={{ span: 4 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="请输入今天的日子："
          name="day"
          rules={[{ required: true, message: "请输入今天的日子!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="submit-btn">
            提交
          </Button>
        </Form.Item>
      </Form>
    </LoginWrapper>
  );
});

export default Login;
