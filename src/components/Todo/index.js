import React, { Component } from "react";
import TodoCard from "./TodoCard";
import Button from "./button";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todoInput: "",
      todoArray: [],
    };
  }

  onChange = (event) => {
    this.setState({
      todoInput: event.target.value,
    });
  };

  onClick = () => {
    if (this.state.todoInput === "") {
      alert("yor input field is empty");
    } else {
      const newTodoArray = [...this.state.todoArray];
      newTodoArray.push(this.state.todoInput);
      console.log(this.state.todoInput);
      this.setState({
        todoInput: "",
        todoArray: newTodoArray,
      });
    }
  };

  editTodoHandler = (i) => {
    console.log(i);
    const editValue = prompt("edit todo");
    const cloneTodoArray = [...this.state.todoArray];
    cloneTodoArray[i] = editValue;
    this.setState({
      todoArray: cloneTodoArray,
    });
  };

  DeleteTodoHandler = (i) => {
    const cloneTodoToDelete = [...this.state.todoArray];
    cloneTodoToDelete.splice(i, 1);

    this.setState({
      todoArray: cloneTodoToDelete,
    });
  };

  render() {
    return (
      <div className="main-container">
        <div className="container">
          <div className="section">
            <input
              type="text"
              value={this.state.todoInput}
              onChange={this.onChange}
            />
            <Button
              btnText="Add Todo"
              btnClass="btn"
              handleClick={this.onClick}
            />

            <div>
              <p className="text">
                {this.state.todoArray.map((todo, index) => {
                  return (
                    <TodoCard
                      todo={todo}
                      index={index}
                      editTodoHandler={this.editTodoHandler}
                      DeleteTodoHandler={this.DeleteTodoHandler}
                    />
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
