import React from "react";
import Button from "./button";

const TodoCard = ({ todo, index, editTodoHandler, DeleteTodoHandler }) => {
  return (
    <div>
      <div className=" display-todo" key={todo}>
        <p>{todo}</p>
        <div className="edit-and-delete">
          <Button
            iconClass="far fa-edit"
            handleClick={() => editTodoHandler(index)}
          />
          <Button
            handleClick={() => DeleteTodoHandler(index)}
            iconClass="fas fa-trash-alt"
          />
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
