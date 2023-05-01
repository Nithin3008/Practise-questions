import './App.css';
import { useState } from "react"
import color1 from "./solutions/color1"
const fruits = [
  { id: 1, category: "Apple", name: "Apple Shimla" },
  { id: 2, category: "Apple", name: "Kashmiri Apple" },
  { id: 3, category: "Apple", name: "Ambri Apple" },
  { id: 4, category: "Banana", name: "Banana Robusta" },
  { id: 5, category: "Banana", name: "Raw Banana Green" },
  { id: 6, category: "Orange", name: "Orange Indian" },
  { id: 7, category: "Orange", name: "Orange USA" },
  { id: 8, category: "Grapes", name: "Grapes Black" },
  { id: 9, category: "Grapes", name: "Grapes Seedless" },
  { id: 10, category: "Mango", name: "Badami" },
  { id: 11, category: "Mango", name: "Alphonso" },
  { id: 12, category: "Mango", name: "Ratnagiri" }
];
function App() {
  // const fruits = [
  //   { name: "Apple", color: "Red", quantity: 10 },
  //   { name: "Banana", color: "Yellow", quantity: 5 },
  //   { name: "Orange", color: "Orange", quantity: 3 },
  //   { name: "Grape", color: "Purple", quantity: 7 },

  // ];
  // let userInput;
  // let [orgiFruit, setFruit] = useState()
  // let [k, setK] = useState()
  // function fruitHandler(event) {
  //   userInput = event.target.value
  //   console.log("hi", event.target.value)
  // }

  // function fruitSetter() {
  //   let x = fruits.find((val) => val.name === userInput)
  //   k = x === undefined ? "NO fruit" : "hi"
  //   console.log(k)
  //   setFruit(x)
  //   setK(k)
  //   // console.log(orgiFruit.map(({ quantity }) => quantity))
  // }
  ////////////////////////////////////////////////////////////////////
  // let [finalFruit, setFruit] = useState(fruits);
  // let userInp;
  // let endArr;
  // function fruitHandler(event) {
  //   userInp = event.target.value;
  //   fruitSetter()
  // }
  // function fruitSetter() {
  //   endArr = userInp === "All" ? setFruit(fruits) : setFruit(fruits.filter((val) => val.category == userInp))
  // }
  //////////////////////////////////////////////////////////////////////////////

  const [tasks, setTasks] = useState([
    { id: 1, text: "Clean the house", completed: false },
    { id: 2, text: "Do laundry", completed: false },
    { id: 3, text: "Buy groceries", completed: false }
  ]);

  const handleTaskCompletion = (id) => {
    const toggleCompletion = tasks.map((task) =>

      task.id === id ? { ...task, completed: !task.completed } : task,

    );

    console.log(toggleCompletion)
    setTasks(toggleCompletion);
  };
  return (

    < div className="App" >

      {/* <p>Select your fruit</p>
      <input onChange={fruitHandler}></input>
      <button onClick={fruitSetter}>Check</button>
      <div>{orgiFruit === undefined ? "hi hello " : orgiFruit.color}{k}</div>
      <color1></color1> */}
      {/* ////////////////////////////////////// */}

      {/* <select onChange={fruitHandler}>
        <option value="All">All</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Orange">Orange</option>
        <option value="Grapes">Grapes</option>
        <option value="Mango">Mango</option>
      </select>
      <div>
        <ul>
          {finalFruit.map(({ name }) => (
            <li>{name}</li>
          ))}
        </ul>
      </div> */}
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleTaskCompletion(task.id)}
          />
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
          </span>
        </div>
      ))}
    </div >

  );
}

export default App;
