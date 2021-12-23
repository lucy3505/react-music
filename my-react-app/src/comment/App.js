import React, { PureComponent } from "react";
import CommentInput from "./components/CommentInput";
import CommentItem from "./components/CommentItem";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
    };
  }
  render() {
    return (
      <div style={{ width: "500px", padding: "20px" }}>
        {this.state.commentList.map((item, index) => (
          <CommentItem
            comment={item}
            key={item.id}
            removeItem={(e) => this.removeComment(index)}
          />
        ))}

        {/* <CommentInput submitComment={(info) => this.submitComment(info)} /> */}
        <CommentInput submitComment={this.submitComment.bind(this)} />
      </div>
    );
  }

  removeComment(index) {
    const newComments = [...this.state.commentList];
    newComments.splice(index, 1);
    this.setState({ commentList: newComments });
  }

  submitComment(info) {
    console.log(info);
    this.setState({
      commentList: [...this.state.commentList, info],
    });
  }
}
