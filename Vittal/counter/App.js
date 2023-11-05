import React from 'react';
import Display from './components/display';
import BootButton from './components/button';
import { useState } from 'react';

function App() {
  const[count,setcount]=useState(0);
  const decrement =()=>{
    if(count>0){
      setcount(count-1);
    }
  };
  return (
    <div className="App">
      &nbsp;<Display content="React counter app"/>
      &nbsp;<Display content={count}/>
      &nbsp;<BootButton content="Increment" color="success" fun={()=>setcount(count+1)}/>
      &nbsp;<BootButton content="Decrement" color="danger"fun={decrement}/>
      &nbsp;<BootButton content="Reset"fun={()=>setcount(0)}/>
    </div>
  );
}

export default App;
