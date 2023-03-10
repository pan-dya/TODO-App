import React, { useState } from "react";
import TodoForm from "./TodoForm";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null, //setting id and value to 0 when there is no input yet
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />; //updating the text on updated todo
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todoRow complete" : "todoRow"}
      key={index}
    >
      {todo.text}
      <div className="buttonContainer">
        <button
          onClick={() => completeTodo(todo.id)}
          className="buttons"
          id="completeButton"
        >
          {" "}
          complete
        </button>
        <button
          onClick={() => removeTodo(todo.id)}
          className="buttons"
          id="removeButton"
        >
          {" "}
          delete
        </button>
        <button
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="buttons"
          id="editButton"
        >
          {" "}
          edit
        </button>
      </div>
    </div>
  ));
};

export default Todo;
