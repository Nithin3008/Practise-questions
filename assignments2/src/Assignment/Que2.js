import { useState } from "react";

// Create a list of Grocery list items with checkboxes and as the user checks out the item those checked-out items should be listed in another section named ‘Completed list’. Add the list of items via an input field.
export default function FF2() {
  
  let [inputData,setInput]=useState([])
  let [outputData,setOutput]=useState([])
  let value
  const takingInput=(event)=>value=event.target.value
  function addingInput()
  {
      // setInput()
      let mainArr
      if(inputData.includes(value))
      {
         mainArr=[...inputData]
      }
      else
      {
         mainArr=[...inputData,value]
      }
      
      setInput(mainArr)
      console.log(mainArr,"inputData=>",inputData)
  }
  function completeHandler(name1)
  {
      const mainArr1=inputData.filter((val)=>{
        if(val==name1)
        {
          setOutput([...outputData,val])
          return false
        }
        else
        {
          return true
        }
      })
      setInput(mainArr1)
      console.log(name1)
      console.log(outputData)
  }
  return (
    <div>
      <h1>Grocery List</h1>
      Add item:<input type="text" onChange={takingInput}></input> 
      <button onClick={()=>addingInput()}>Add</button>
      {inputData.map((val)=><div><input type="checkbox" checked={false} onChange={()=>completeHandler(val)}></input><label>{val}</label></div>)}
      <h1>Completed</h1>
      {outputData.map((val1)=><p>{val1}</p>)}
    </div>
  );
}
