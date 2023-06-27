import Button from "./Button";

import { useState } from "react";

function AddWithdrawMoney({ li, clientsList, setClientsList, setEditData }) {
  const [moneyInput, setMoneyInput] = useState("");

  const addMoneyHandler = () => {
    const updatedSum = clientsList.map((l) => {
      if (l.id !== li.id) return l;

      const newTotal = Number(moneyInput) + l.sum;
      l.sum = newTotal;
      return l;
    });

    setEditData({ sum: li.sum, id: li.id });

    setClientsList(updatedSum);
  };

  const withdrawMoneyHandler = () => {
    const withdraw = clientsList.map((lis) => {
      if (lis.id !== li.id) return lis;

      const newSum = lis.sum - Number(moneyInput);

      lis.sum = newSum;
      return lis;
    });
    setEditData({ sum: li.sum, id: li.id });

    setClientsList(withdraw);
  };

  return (
    <div>
      <Button text="Add" action={addMoneyHandler}></Button>
      <input
        type="number"
        value={moneyInput}
        onChange={(e) => setMoneyInput(e.target.value)}
      />
      <Button text="Withdraw" action={withdrawMoneyHandler}></Button>
      <div style={{ width: "100px", textAlign: "center" }}>{li.sum} &euro;</div>
    </div>
  );
}

export default AddWithdrawMoney;
