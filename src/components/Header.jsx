import styles from "../css/Header.module.css";

function Header() {
  return (
    <div className={styles["header-container"]}>
      <p className={styles["header-p"]}>Klientų skaičius: </p>
      <p className={styles["header-p"]}> Bendrai laikoma suma:</p>
    </div>
  );
}

export default Header;
