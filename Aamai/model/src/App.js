import logo from './logo.svg';
import './App.css';
import Display from './components/display.js';
import Cbut from './components/button.js';
import {useState} from 'react';

function App() {
const [count,setCount]=useState(0)
  return (
    <>
    <Display content="Counter Application"/>
     <Display content={count}/>
     &nbsp;<Cbut content="Increment" color="success" fun={()=>setCount(count+1)} />
     &nbsp;<Cbut content="Decrement" color="danger" fun={()=>setCount(count-1)} con={count==0}/>
     &nbsp;<Cbut content="Reset" color="secondary" fun={()=>setCount(0)}/>
    </>
  );
}

export default App;
