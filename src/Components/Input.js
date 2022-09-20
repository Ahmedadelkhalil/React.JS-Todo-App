import React from "react";
import "../Styles/Input.css";
import { BsPlusCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import ListItems from "./List";

const Input = () => {
  const [Todo, setTodo] = useState("");
  const [AllTodos, setAllTodos] = useState(
    window.localStorage.getItem("Todo")
      ? JSON.parse(window.localStorage.getItem("Todo"))
      : []
  );

  const addTodo = (e) => {
    e.preventDefault();
    let newTodo = {
      id: 1 + Math.random(),
      value: Todo,
      isChecked: false,
    };

    if (Todo !== "") {
      setAllTodos([...AllTodos].concat(newTodo).reverse());
      setTodo("");
    }
  };

  useEffect(() => {
    window.localStorage.setItem("Todo", JSON.stringify(AllTodos));
  }, [AllTodos]);

  const togglechecking = (id) => {
    const todoupdate = [...AllTodos].map((todo) => {
      if (todo.id === id) {
        todo.isChecked = !todo.isChecked;
      }
      return todo;
    });
    setAllTodos(todoupdate);
  };

  const Deleting = (id) => {
    let updatedelete = [...AllTodos].filter((todo) => todo.id !== id);
    setAllTodos(updatedelete);
  };

  const delAll = () => {
    setAllTodos([]);
  };
  return (
    <>
      <div className="input-holder">
        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Write Your New Thought Here ..."
            value={Todo}
            onChange={(e) => setTodo(e.target.value)}
            autoFocus
          />
          <button onClick={addTodo}>
            <BsPlusCircleFill size={19} />
          </button>
        </form>
      </div>
      <div className="box-of-todos-lists">
        {AllTodos.map((todo) => (
          <ListItems
            key={todo.id}
            text={todo.value}
            isckecked={todo.isChecked}
            togglechecking={() => togglechecking(todo.id)}
            deleting={() => Deleting(todo.id)}
          />
        ))}

        {AllTodos.length === 0 && (
          <p className="empty-todo">There Are No Items To Show ...</p>
        )}
      </div>
      <div className="btn-holder">
        <button className="btn btn-outline-danger" onClick={delAll}>
          Delete All Todos
        </button>
      </div>
    </>
  );
};

export default Input;
