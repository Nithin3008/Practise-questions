import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { EmailProvider } from "./Context/EmailContext";
import { TrashProvider } from "./Context/TrashContext";
import { SpamProvider } from "./Context/SpamContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ReduceProvider } from "./Reducers/Reducer";
import { ReducerSpmTraProv } from "./Reducers/Reducertwo";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
   
        <ReduceProvider>
          <SpamProvider>
            <TrashProvider>
              <EmailProvider>
                <App />
              </EmailProvider>
            </TrashProvider>
          </SpamProvider>
        </ReduceProvider>

    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
