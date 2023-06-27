import Button from "./Button";

import { useState } from "react";

function AddWithdrawMoney({
  li,
  clientsList,
  setClientsList,
  setEditData,
  setMessage,
}) {
  const [moneyInput, setMoneyInput] = useState("");

  const addMoneyHandler = () => {
    const updatedSum = clientsList.map((l) => {
      if (l.id !== li.id) return l;

      const newTotal = Number(moneyInput) + l.sum;
      l.sum = newTotal;
      setMessage("Money was added");
      setInterval(() => setMessage(null), 1000);
      return l;
    });

    setEditData({ sum: li.sum, id: li.id });

    setClientsList(updatedSum);
  };

  const withdrawMoneyHandler = () => {
    const withdraw = clientsList.map((lis) => {
      if (lis.id !== li.id) return lis;

      const newSum = lis.sum - Number(moneyInput);

      if (moneyInput > lis.sum) {
        setMessage("Sum is too big to withdraw");
        setInterval(() => setMessage(null), 2000);
        return lis;
      }

      lis.sum = newSum;
      setMessage("Money was withdrawed");
      setInterval(() => setMessage(null), 1000);
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
        min="1"
      />
      <Button text="Withdraw" action={withdrawMoneyHandler}></Button>
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "24px",
          fontWeight: "600PX",
        }}
      >
        {li.sum} &euro;
      </div>
    </div>
  );
}

export default AddWithdrawMoney;
