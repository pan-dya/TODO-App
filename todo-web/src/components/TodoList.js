import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      //to prevent blank spaces in the input
      return;
    }

    const newTodos = [todo, ...todos]; //storing the todo in newTodos
    setTodos(newTodos);
    console.log(todo, ...todos); //check console to see all todos values
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) { //checking the id
        todo.isComplete = !todo.isComplete; //toggle between true and false
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) { //same as addTodo
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item)) //check whether the newValue has a changed value or not
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id); //filter the todo from the array

    setTodos(removedArr);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
