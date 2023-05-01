import './App.css';
import { useReducer } from "react"
function counterHandler(state, action) {
  console.log(state)
  if (action.type === "increment") {
    return { count: state.count + 1 }//similar to return we have to return everytime and we should return only object
  }
  else if (action.type === "decrement") {
    return { count: state.count - 1 }
  }


}
function App() {

  const [state, dispatch] = useReducer(counterHandler, { count: 0 })

  return (
    <div className="App">

      <h1>Counter</h1>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default App;

