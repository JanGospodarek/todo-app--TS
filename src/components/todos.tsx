import LiItem from "./LiItem";
import styles from "./todos.module.css";
import { TodosContext } from "../store/todos-context";
import { useContext } from "react";
const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);
  const remove = (id: string) => {
    todosCtx.removeToDo(id);
  };
  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => (
        <LiItem
          removeTodo={remove.bind(null, item.id)}
          key={item.id}
          text={item.text}
        ></LiItem>
      ))}
    </ul>
  );
};
export default Todos;
