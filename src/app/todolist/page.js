"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "@/app/globals.css";
import { addTodos } from "../redux/todoSlice";
const page = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const todoData = useSelector((data) => data.todosData.todos);
  return (
    <div className="add-user">
      <h3>Add Todo</h3>
      <input
        className="add-user-input"
        type="text"
        value={todo}
        placeholder="Add New Task"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => dispatch(addTodos(todo))} className="add-user-btn">
        Add Todo
      </button>
      <h5>Todo List</h5>
      {todoData.length &&
        todoData.map((item) => <h6 key={item.id}>{item.name}</h6>)}
    </div>
  );
};

export default page;
