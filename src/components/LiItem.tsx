import styles from "./LiItem.module.css";
const LiItem: React.FC<{
  key: string;
  text: string;
  removeTodo: () => void;
}> = (props) => {
  return (
    <li onClick={props.removeTodo} className={styles.item}>
      {props.text}
    </li>
  );
};
export default LiItem;
