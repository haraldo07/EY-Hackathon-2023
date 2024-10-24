// importing packages
import React, { useState } from "react";

// creating counter component
const SimpInt = () => {
  // initializing variables
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [interest, setInterest] = useState(0);

  // function to calculate simple interest and return as float value
  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const n = parseFloat(time);

    // checking if the values entered are null
    if (!(p<=0) && !(n<=0) && !(r<=0)) {
      const calculatedInterest = (p * n * r) / 100;
      setInterest(calculatedInterest);
    } 
    else {
      alert("Please enter valid numeric values .");
    }
  }

  //creating jsx
  return (
    <>
    <div>
      <h1>&nbsp;Simple Interest Calculator</h1>
      <div>
        <label>&nbsp;Principal Amount:&nbsp;</label>
        <input type="number" placeholder="principal amount"  onChange={(e) => setPrincipal(e.target.value)} />
      </div>  
      <div>
        <label>&nbsp;Rate of Interest (%):&nbsp;</label>
        <input type="number" placeholder="rate" onChange={(e) => setRate(e.target.value)} />
      </div>
      <div>
        <label>&nbsp;Time (years):&nbsp;</label>
        <input type="number" placeholder="time" onChange={(e) => setTime(e.target.value)} />
      </div>
      <div>
      &nbsp;
      <button onClick={calculate}>&nbsp;Calculate Interest</button>
      </div>
      <div>      
        <label>&nbsp;Simple Interest:</label>
        <span>&nbsp;{interest.toFixed(2)}</span>
      </div>
    </div>
    </>
  );
}

// exporting SimpInt component
export default SimpInt;