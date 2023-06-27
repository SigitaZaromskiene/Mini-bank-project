import Button from "./Button";

import { useState } from "react";

function AddWithdrawMoney({ li, clientsList, setClientsList }) {
  const [moneyInput, setMoneyInput] = useState("");

  const addMoneyHandler = () => {
    const updatedSum = clientsList.filter((l) => {
      if (l.id === li.id) {
        const newTotal = Number(moneyInput) + l.sum;
        l.sum = newTotal >= 0 ? newTotal : l.sum;
      }
      return l;
    });
    setClientsList(updatedSum);
  };

  return (
    <div>
      <Button text="Add" action={addMoneyHandler}></Button>
      <input
        type="number"
        value={moneyInput}
        onChange={(e) => setMoneyInput(e.target.value)}
      />
      <Button text="Withdraw"></Button>
    </div>
  );
}

export default AddWithdrawMoney;
