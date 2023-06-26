import Button from "./Button";
import { v4 as uuidv4 } from "uuid";
import styles from "../css/BankList.module.css";

function BankList({ clientsList }) {
  if (clientsList === null) {
    return "Loading...";
  }
  return (
    <div className={styles["list-container"]}>
      {clientsList.map((li) => (
        <li className={styles.list} key={uuidv4()}>
          <div className={styles["first-column"]}>
            <div style={{ display: "flex", gap: "10px", width: "200px" }}>
              <div>{li.name}</div>
              <div>{li.surname}</div>
            </div>
            <div style={{ width: "100px", textAlign: "center" }}>
              {li.sum} &euro;
            </div>
            <Button text="Delete"></Button>
          </div>
          <div>
            <Button text="Add"></Button>
            <input type="number" />
            <Button text="Withdraw"></Button>
          </div>
        </li>
      ))}
    </div>
  );
}

export default BankList;
