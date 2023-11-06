import './App.css';
import Display from './components/display';
import Bootbutton from './components/butonsss';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const[weight,setWeight]=useState(0);
  const[height,setHeight]=useState(0);
  const[bmi_value,setBMI]=useState(0);

  const calcbmi=()=>{
    const bmiValue=(weight/(height**2))*10000;
    setBMI(bmiValue);
  }

  const resetBmi=()=>{
    setHeight(0);
    setWeight(0);
    setBMI(0);
  }

  return (
   <div>
    <div className='Calc'>
      <Display content ="BMI Calculator"/>
      <div class='Input'>
        <label>Weight</label>
        <input type="number" value={weight} onChange={(e) =>setWeight(parseInt(e.target.value))} placeholder='in kgs'></input>
        </div>
      <div class='Input'>
        <label>Height</label>
        <input type="number" value={height} onChange={(e)=>setHeight(parseInt(e.target.value))} placeholder="in cms"></input>
      </div>
      &nbsp;<Bootbutton content="Calculate" fun={()=>calcbmi()}/>
      <div class='Output'>
        <Display content = {bmi_value}/>
      </div>
      &nbsp;<Bootbutton content="Reset" fun={()=>resetBmi()}/>
      </div>
   </div> 
  );
}

export default App;
