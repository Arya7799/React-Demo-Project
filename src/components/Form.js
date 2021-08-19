import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }
  handleUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
    console.log(this.state.username);
  };
  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  submitHandler = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    // event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsername}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.hanleTopicChange}>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="Angular">Angular</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
