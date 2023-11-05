 import React, { useState } from 'react';

function Calculator(){
    const[principal,setprincipal]=useState('');
    const[rate,setrate]=useState('');
    const[time,settime]=useState('');
    const[simple,setsimple]=useState('');
    const[compound,setcompound]=useState('');

    const calculatesimple=()=>{
        const si=(principal*rate*time)/100;
        setsimple(si);
    };

    const calculatecompound=()=>{
        const ci=principal*(1+rate/100)**time-principal;
        setcompound(ci);
    };

    return(
        <div className='Calculator'>
            <h1>Calculator</h1>
            <label>Principal:</label>
            <input type='number' placeholder='Principal' value={principal} onChange={(e)=>setprincipal(e.target.value)}/>
            <label>Rate of Interest:</label>
            <input type='number' placeholder='RoI (%)' value={rate} onChange={(e)=>setrate(e.target.value)}/>
            <label>Time:</label>
            <input type='number' placeholder='Time (yr)' value={time} onChange={(e)=>settime(e.target.value)}/>

            <button onClick={calculatesimple}>Simple Interest</button>
            <button onClick={calculatecompound}>Compound Interest</button>

        <div className='Interest'>
            <label>Simple Interest: {simple}</label>
            <label>Compound Interest: {compound}</label>
        </div>
        </div>
    );
}

export default Calculator;