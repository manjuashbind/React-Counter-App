import React, { useState } from 'react'

function Counter() {
    //state creation
    const[counter,setCounter]=useState(0)
    //function creation
    function increment(){
        setCounter(counter+1)
    }
    function decrement(){
        if(counter>0){
        setCounter(counter-1)
        }

    }
    function reset(){
        setCounter(0)
    }
  return (
    <div style={{background:'lightblue',textAlign:'center',padding:'5px'}}>
        <h1 style={{backgroundColor:'white',width:'100px',padding:'15px',margin:'auto',marginTop:'20px',marginBottom:'20px',border:'1px',borderRadius:'5px',fontSize:'40px'}}>{counter}</h1>
        <button style={{width:'100px',margin:'15px',border:'2px solid black',borderRadius:'8px',padding:'8px',fontSize:'15px', fontWeight:'bold'}} onClick={increment}>Increment</button>
        <button style={{width:'100px',margin:'15px',border:'2px solid black',borderRadius:'8px',padding:'8px',fontSize:'15px', fontWeight:'bold'}} onClick={decrement}>Decrement</button>
        <button style={{width:'100px',margin:'15px',border:'2px solid black',borderRadius:'8px',padding:'8px',fontSize:'15px', fontWeight:'bold'}} onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter