import { useContext, useState } from 'react';
import './App.css';

import { ReducerContext } from './ReducerMain';
function App() {
  // const {data}=useContext(BakerContext)
  const {dispatcher,state}=useContext(ReducerContext)
  const [inputSearch,setInput]=useState("")
  let dataMap=[...state.data1]
  dataMap=dataMap.filter((val)=>val.inStock===true)
  console.log(dataMap)
  if(state.outOfStock===true)
    {
      
      dataMap=[...state.data1].filter((val)=>val.inStock===false)
    }
    if(state.fastDelivery===true)
    {
      
      dataMap=dataMap.filter((val)=>val.fastDelivery===true)
    }
  const checkLeng=(event)=>
    {
      setInput(event.target.value)
      if(event.target.value.length===0)
      {
        console.log("zero")
        dispatcher({type:"FillData"})
      }
    }
    
  function searchData()
  {
    dispatcher({type:"searchData",payload:inputSearch})
  }
  function sortDataHL()
  {
    console.log("hi")
    dispatcher({type:"hl"})
  }
  function sortDataLH()
  {
    dispatcher({type:"lh"})
  }
  function outOfStock(event)
  {
    const str=event.target.checked
    console.log(str)
    dispatcher({type:"outOfStock",payload:str})
  }
  function FastDelivery()
  {
    
    dispatcher({type:"fastDelivery"})
  }
  return (
    <div>
      Search: <input onChange={(e)=>checkLeng(e)} placeholder='Search By name'></input><button onClick={()=>searchData()}>Search Data</button>

      <div>
        <p>Sort By</p>
        <input onClick={()=>sortDataHL()} type='radio'></input>Price-High to Low <input onClick={()=>sortDataLH()} type='radio'></input>Price-Low to High

      </div>
      <div>
        <p>Filters</p>
        <input onClick={(e)=>outOfStock(e)} type='checkbox'></input>Include out of Stock  <input onClick={()=>FastDelivery()} type='checkbox'></input>Fast Delivery only
      </div>
















<div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
       {dataMap.map(
          ({
            id,
            name,
            image,
            price,
            productName,
            inStock,
            level,
            fastDelivery
          }) => (
            <div
              key={id}
              style={{
                border: "1px solid #4B5563",
                borderRadius: "0 0 0.5rem 0.5rem",
                margin: "1rem",
                maxWidth: "40%",
                padding: "0 0 1rem"
              }}
            >
              <img src={image} width="100%" height="auto" alt={productName} />
              <h3> {name} </h3>
              <div>Rs. {price}</div>
              {inStock && <div> In Stock </div>}
              {!inStock && <div> Out of Stock </div>}
              <div>{level}</div>
              {fastDelivery ? (
                <div> Fast Delivery </div>
              ) : (
                <div> 3 days minimum </div>
              )}
            </div>
          )
        )}
      </div>

    </div>
  );
}

export default App;
