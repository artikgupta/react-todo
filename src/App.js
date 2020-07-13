import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoInput: "",
      todoArray: ["cleaning", "studying"],
    };
  }

  onChange = (event) => {
    this.setState({
      todoInput: event.target.value,
    });
  };

  onClick = () => {
    const newTodoArray = [...this.state.todoArray];
    newTodoArray.push(this.state.todoInput);
    console.log(this.state.todoInput);
    this.setState({
      todoInput: "",
      todoArray: newTodoArray,
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.todoInput}
          onChange={this.onChange}
        />
        <button onClick={this.onClick}> click me</button>
        <div>
          <h1>
            {this.state.todoArray.map((todo) => {
              return <div key={todo}>{todo}</div>;
            })}
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
