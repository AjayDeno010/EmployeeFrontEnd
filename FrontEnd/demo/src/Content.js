import React from 'react'
import { useState } from 'react';

const Content = () => {
    let name= "john";
    function hello(){
      const petnames=["Ajay","Deno"];
      const i=Math.floor(Math.random()*2);
      return petnames[i];
    }
    let [count,setCount]= useState(99);
    function incrementFun(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
    // function additem(firstName){
    //     console.log(firstName);
    // }
  return (
    <main>
      <p>login by {hello()}</p>
      {/* <button onClick={()=>additem("john")}>additem</button> */}
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={incrementFun}>+</button>
    </main>
  )
}

export default Content