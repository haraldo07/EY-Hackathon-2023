import './App.css';
import Display from './components/display';
import Bootbutton from './components/buttons';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Display content = "Counter App"/>
      <Display content = {count}/>
      &nbsp;<Bootbutton content = "Increment" color="success" fun={()=>setCount(count+1)}/>
      &nbsp;<Bootbutton content = "Decrement" color="danger" fun={()=>setCount(count-1)} flag = {count === 0}/>
      &nbsp;<Bootbutton content = "Reset" color="secondary" fun={()=>setCount(0)} flag = {count === 0}/>
    </div>
  );
}

export default App;
