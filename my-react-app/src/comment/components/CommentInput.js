import React, { PureComponent } from "react";
import { Input, Button } from "antd";
import moment from "moment";
export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }
  debugger;
  render() {
    return (
      <div>
        <Input.TextArea
          rows={4}
          cols={30}
          onChange={(e) => this.handleChange(e)}
          value={this.state.content}
        />
        <Button type="primary" onClick={(e) => this.addComment()}>
          添加评论
        </Button>
      </div>
    );
  }

  handleChange(e) {
    this.setState({
      content: e.target.value,
    });
  }

  addComment() {
    console.log(this.state.content);
    const commentInfo = {
      id: moment().valueOf(),
      avatar: "https://avatars.githubusercontent.com/u/10385976?v=4",
      datetime: moment(),
      content: this.state.content,
    };
    this.props.submitComment(commentInfo);
    this.setState({ content: "" });
  }
}
