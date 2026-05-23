import React from "react";
import "./Counter.css";
import { useState } from "react";

function Counter(){
    const[count,setCount] =useState(0);
    

    function  increment() {
        const newcount=count+1;
        setCount (newcount);
    }

    function  decrement() {
        const newcount=count-1;
        setCount (newcount);
    }

    return(
        <div className="counter-container">
        <h1 className="font-bold text-black-500">Counter</h1>
         
        <div className="counter-box text-black-600 flex justify-center items-center pl-30 ">{count}</div>
        
           <div className="btns-wrapper">
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>

            {count > 10 && <button>reset</button>}
            
        </div>
        
        </div>
    

    );
}
export default Counter;