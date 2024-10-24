// importing packages
import React, { useState } from "react";

// creating counter component
const CompInt = () => {
  // initializing variables
  const [principal, setPrincipal] = useState(0);
  const [rate, setRate] = useState(0);
  const [time, setTime] = useState(0);
  const [period, setPeriod] = useState(0);
  const [interest, setInterest] = useState(0);

  // function to calculate simple interest and return as float value
  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);
    const n = parseFloat(period);

    // checking if the values entered are null
    if (!(p<=0) && !(n<=0) && !(r<=0) && !(t<=0)) {
      const calculatedInterest = p* Math.pow(1+ (r/(n*100)), n*t) -p;
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
      <h1>&nbsp;Compound Interest Calculator</h1>
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
        <label>&nbsp;Frequency in a year:&nbsp;</label>
        <input type="number" placeholder="frequency" onChange={(e) => setPeriod(e.target.value)} />
      </div>
      <div>
      &nbsp;
      <button onClick={calculate}>&nbsp;Calculate Interest</button>
      </div>
      <div>      
        <label>&nbsp;Compound Interest:</label>
        <span>&nbsp;{interest.toFixed(2)}</span>
      </div>
    </div>
    </>
  );
}

// exporting CompInt component
export default CompInt;