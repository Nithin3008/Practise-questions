import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//React IMports
import { BrowserRouter as Router } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
//Project Imports
//Part A imports
import { EmailProvider } from "./PartA/emailData";

//Part B imports
import { DataProvider } from "./PartB/Context/DataContext";
import { FavProvider } from "./PartB/Context/FavContext";
import { ReadProvider } from "./PartB/Context/ReadContext";

//Part C Imports
import { PizzaProvider } from "./PartC/context/DataContext";
import { Cart1 } from "./PartC/context/PizzaCart";
import { HandlerProvider } from "./PartC/context/functionHandlers";

//Part D imports
import { VideoProvider } from "./PartD/Context/VideoData";
import { LikeProvider } from "./PartD/Context/LikeContext";
import { WatchProvider } from "./PartD/Context/WatchLater";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <PizzaProvider>
      <HandlerProvider>
      <WatchProvider>
      <LikeProvider >
      <VideoProvider>
        <Cart1>
          
            <ReadProvider>
              <FavProvider>
                <DataProvider>
                  <EmailProvider>
                    <App />
                  </EmailProvider>
                </DataProvider>
              </FavProvider>
            </ReadProvider>
         
        </Cart1>
      </VideoProvider>
      </LikeProvider>
      </WatchProvider>
      </HandlerProvider>
      </PizzaProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
