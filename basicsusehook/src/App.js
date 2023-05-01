import { useState } from "react"
import { fakeFetch } from "./apiBasics/fakefetch";
import { fakeFetch1 } from "./apiBasics/fakefetch1";
import './App.css';

function App() {
  let [count, setCount] = useState(0)
  function increCounter() {
    setCount((count) => count = count + 1)
  }
  function decreCounter() {
    setCount((count) => count = count - 1)
  }
  function ResetCounter() {
    setCount((count) => count = 0)
  }
  let [empData, setEmpData] = useState([])
  function fetchHandler() {

    fakeFetch("https://example.com/api/employees")
      .then((data) => {
        if (data.status === 200) {
          console.log(data.data.employees)
          setEmpData(data.data.employees)

        }
      })
  }
  let [transData1, setTransData] = useState([])
  function getTrans() {
    fakeFetch1("https://example.com/api/transactions")
      .then((transDa) => {
        if (transDa.status === 200) {
          console.log(transDa.data.transactions)
          setTransData(transDa.data.transactions)

        }

      })

  }
  function highlightTrans() {

  }






  console.log("render")
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increCounter}>+</button>
      <button onClick={decreCounter}>-</button>
      <button onClick={ResetCounter}>Reset</button><br></br>
      <button onClick={fetchHandler}>Get emp details</button>
      <div>
        {empData.map((val) => <li>{val.id}</li>)}
      </div>
      <button onClick={getTrans}>Get transaction Details</button>
      <div>
        {transData1.map((val) => <li key={val.id} style={{ color: transData1.amount > 100 ? "red" : "" }}>{val.id} {val.data} {val.amount}</li>)}
      </div>
      <button onClick={highlightTrans}>HIghligh transaction details</button>
    </div >
  );
}

export default App;
