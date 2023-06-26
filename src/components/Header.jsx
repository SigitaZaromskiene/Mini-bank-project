import styles from "../css/Header.module.css";

function Header({ clientsList }) {
  if (clientsList === null) {
    return "Loading...";
  }
  const totalSum = () => {
    return clientsList.reduce((acc, li) => acc + li.sum, 0);
  };
  console.log(totalSum);
  return (
    <div className={styles["header-container"]}>
      <p className={styles["header-p"]}>
        Klientų skaičius: {clientsList.length}
      </p>
      <p className={styles["header-p"]}>
        {" "}
        Bendrai laikoma suma: {totalSum()} &euro;
      </p>
    </div>
  );
}

export default Header;
