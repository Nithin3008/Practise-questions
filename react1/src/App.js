
import './App.css';
import CardOne from "./CardOne"
function App() {
  let amount = 45
  return (
    <div className="App">
      {/* <h1>hi hello world</h1> */}
      <CardOne></CardOne>
      <p>Amount to be paid:{amount}</p>
    </div>
  );
}

export default App;
