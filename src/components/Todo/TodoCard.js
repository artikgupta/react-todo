import React from "react";
import Button from "./button";

const TodoCard = ({
  todo,
  index,
  editTodoHandler,
  DeleteTodoHandler,
  handleIsCompleted,
}) => {
  console.log(todo);
  return (
    <div>
      <input
        type="checkbox"
        value={todo.isCompleted}
        onChange={() => handleIsCompleted(index)}
      />
      <div className=" display-todo" key={todo.todoValue}>
        <p>{todo.todoValue}</p>
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
