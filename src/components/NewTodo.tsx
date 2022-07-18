import React, { useRef, useContext } from "react";
import styles from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";
const NewTodo: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);
  const todoRef = useRef<HTMLInputElement>(null);

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    const enteredText = todoRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    todosCtx.addToDo(enteredText);
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoRef}></input>
      <button>Add todo</button>
    </form>
  );
};
export default NewTodo;
