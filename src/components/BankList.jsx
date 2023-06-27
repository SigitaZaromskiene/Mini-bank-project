import Button from "./Button";
import { v4 as uuidv4 } from "uuid";
import styles from "../css/BankList.module.css";

import AddWithdrawMoney from "./AddWithdrawMoney";

function BankList({ clientsList, setDeleteList, setClientsList, setEditData }) {
  if (clientsList === null) {
    return "Loading...";
  }

  const sortedBySurname = clientsList.sort((a, b) =>
    a.surname.localeCompare(b.surname)
  );

  return (
    <div className={styles["list-container"]}>
      {sortedBySurname.map((li) => (
        <li className={styles.list} key={uuidv4()}>
          <div className={styles["first-column"]}>
            <div style={{ display: "flex", gap: "10px", width: "200px" }}>
              <div>{li.name}</div>
              <div>{li.surname}</div>
            </div>

            <Button text="Delete" action={() => setDeleteList(li)}></Button>
          </div>
          <AddWithdrawMoney
            clientsList={clientsList}
            li={li}
            setClientsList={setClientsList}
            setEditData={setEditData}
          />
        </li>
      ))}
    </div>
  );
}

export default BankList;
