import styles from "../css/BankForm.module.css";
import { useState } from "react";
import Button from "./Button";

function BankForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const formDataHandler = () => {};

  return (
    <form className={styles.form} onSubmit={formDataHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" value={name} type="text"></input>
      </div>
      <div>
        <label htmlFor="surname">Surname</label>
        <input id="surname" value={surname} type="text"></input>
      </div>
      <div style={{ marginTop: "20px", justifyContent: "center" }}>
        <Button type="submit" text="Submit"></Button>
      </div>
    </form>
  );
}

export default BankForm;
