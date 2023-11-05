import React, { useState } from 'react';

function Counter(){
    const [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    };

    const decrement=()=>{
        if (count>0){
            setCount(count-1);
        }
    };

    return(
        <div>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button style={{backgroundColor:'green'}} onClick={increment}>Increment</button>
            <button style={{backgroundColor:'red'}} onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;