import styles from "../css/Button.module.css";

function Button({ text, action }) {
  return (
    <button className={styles.button} onClick={action}>
      {text}
    </button>
  );
}

export default Button;
