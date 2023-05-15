import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
//React IMports
import {BrowserRouter as Router} from "react-router-dom"

import reportWebVitals from './reportWebVitals';
//Project Imports
//Part A imports
import { EmailProvider } from './PartA/emailData';

//Part B imports
import { BookProvider } from './PartB/booksData';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <BookProvider> <EmailProvider>
    <App />
    </EmailProvider></BookProvider>
   
  </Router>
   
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
