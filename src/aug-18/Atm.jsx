import React, { useState } from "react";
import "./ATM.css";

function Atm() {
  const [balance, setBalance] = useState(10000);
  const [amount, setAmount] = useState("");

  const depositMoney = () => {
    const enteredAmount = Number(amount);

    if (enteredAmount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    setBalance(balance + enteredAmount);
    setAmount("");
  };

  const withdrawMoney = () => {
    const enteredAmount = Number(amount);

    if (enteredAmount <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    if (enteredAmount > balance) {
      alert("Insufficient Balance");
      return;
    }

    setBalance(balance - enteredAmount);
    setAmount("");
  };

  return (
    <div className="atm">
      <h1>🏧 ATM MACHINE</h1>

      <h2>Available Balance</h2>

      <h1>₹{balance}</h1>

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />

      <div>
        <button onClick={depositMoney}>Deposit</button>

        <button onClick={withdrawMoney}>Withdraw</button>
      </div>
    </div>
  );
}

export default Atm;
