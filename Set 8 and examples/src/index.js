import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { CartContext,CartProvider} from './Cart/contextProvider1';
import { DataProvider } from './PartA/DataContext';
import { CartProvider } from './PartA/CartContext';
import { TodoProvider } from './PartB/DataTodo';
import {QuestProvider} from "./PartC/QueData";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

// export const myContext=React.createContext()
// let arr1=[1,2,3,4]
// function arrayIncre(values)
// {
//   arr1=[...arr1,values]
//   console.log(arr1)
// }
root.render(
  <React.StrictMode>
    {/* <myContext.Provider value={{arr1,arrayIncre}}> */}
   
    {/* <CartProvider> */}
    <Router>
      <QuestProvider>
      <TodoProvider>
      <CartProvider><DataProvider>
    <App />
    </DataProvider></CartProvider>
      </TodoProvider>
      </QuestProvider>
    
    </Router>
    
      
    {/* </CartProvider> */}
  
   
    
    {/* </myContext.Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
