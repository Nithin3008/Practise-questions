import { Car } from "./pracise/Product"
import SumCard from "./pracise/SumCard"
import ProductAc from "./pracise/ProductAc"
import Fruit from "./pracise/Fruit"
import PhoensList from "./pracise/PhoensList"
import CondJs from "./pracise/CondJs"
import EmpCond from "./EmpCond"
import Food from "./Food"
import { useState } from "react"
import './App.css';
export function Pd1({ arg1, arg2, arg3 }) {
  return (<div>
    <li>{arg2}:INR{arg3}</li>
  </div>)

}
const phones = [
  { id: 1, name: "Apple", price: 150000 },
  { id: 2, name: "RedMi", price: 30000 },
  { id: 3, name: "RealMe", price: 70000 },
  { id: 4, name: "Samsung", price: 70000 }
];
const employees = [
  { id: "E1", name: "Arpit Jain", workExperience: 6 },
  { id: "E2", name: "Monica Jaiswal", workExperience: 4 },
  { id: "E3", name: "Priya Shetty", workExperience: 9 },
  { id: "E4", name: "Aman Sen", workExperience: 1 }
];
function App() {
  let car = [{
    name: "toyata",
    model: 'LandCruiser',
    year: 2022
  },
  {
    name: "Ferrai",
    model: "sf90",
    year: 2021
  },
  {
    name: "BMW",
    model: "m5cs",
    year: 2022
  }
  ]
  let x = 95
  let y = 10

  let [state1, setState] = useState("Nithin")
  function changeState() {
    setState((state1) => state1 = "Nikhil")
    // state1 = "Nikhil"
  }

  return (
    <div className="App">
      {/* //working on props */}
      <Car arg1={x}></Car>
      <Car arg1={car[0]}></Car>
      <SumCard num1={x} num2={y}></SumCard>
      <ProductAc></ProductAc>
      <Fruit></Fruit>
      <PhoensList obj1={phones}></PhoensList>
      <CondJs obj2={phones}></CondJs>
      <EmpCond emp={employees}></EmpCond>
      <Food></Food>
      <h1 onClick={changeState}>{state1}</h1>
    </div >
  );
}

export default App;
