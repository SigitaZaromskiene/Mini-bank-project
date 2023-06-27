import Button from "./Button";
import { v4 as uuidv4 } from "uuid";
import styles from "../css/BankList.module.css";
import AddWithdrawMoney from "./AddWithdrawMoney";

function BankList({
  clientsList,
  setDeleteList,
  setClientsList,
  setEditData,
  setMessage,
  filtered,
}) {
  if (clientsList === null) {
    return "Loading...";
  }

  let filteredList = clientsList;

  if (filtered === "1") {
    filteredList = clientsList.filter((li) => li);
  }
  if (filtered === "2") {
    filteredList = clientsList.filter((li) => li.sum > 0);
  }
  if (filtered === "3") {
    filteredList = clientsList.filter((li) => li.sum <= 0);
  }

  return (
    <div className={styles["list-container"]}>
      {filteredList.map((li) => (
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
            setMessage={setMessage}
          />
        </li>
      ))}
    </div>
  );
}

export default BankList;
