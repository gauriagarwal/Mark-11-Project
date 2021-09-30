import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [luckyNumer, setLuckyNumber] = useState("");
  const [outut, setOutput] = useState("");

  const checkBirthday = () => {
    if (!dateOfBirth || !luckyNumer) {
      setOutput("Fill the fields");
      return;
    }
    const dateWithoutDashes = dateOfBirth.replaceAll("-", "");
    let sumOfDigits = 0;
    for (let i = 0; i < dateWithoutDashes.length; i++) {
      sumOfDigits += parseInt(dateWithoutDashes.charAt(i));
    }
    let luckyNumberInt = parseInt(luckyNumer);
    console.log(luckyNumberInt);
    if (sumOfDigits % luckyNumberInt !== 0) {
      setOutput(`Your birthday is unlucky! 😢`);
      return;
    }
    setOutput(`Your birthday is lucky! 😊`);
  };

  return (
    <div className="App">
      <h1>Is your Birthday Lucky? 🍀</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>Date of Birth</p>
      <input
        value={dateOfBirth}
        type="date"
        onChange={(e) => setDateOfBirth(e.target.value)}
      />{" "}
      <br />
      <br />
      <p>Your Lucky Number</p>
      <input
        value={luckyNumer}
        type="number"
        onChange={(e) => setLuckyNumber(parseInt(e.target.value))}
      />
      <button onClick={checkBirthday}>Check Birthday</button>
      <h3>{outut}</h3>
    </div>
  );
}
