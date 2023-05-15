import {Routes,Route,NavLink} from "react-router-dom"
import './App.css';
//Project Imports
//Part A imports
import Home from "./PartA/Home"
import Inbox from "./PartA/Inbox"
import SentMails from "./PartA/SentMails"
import EmailDetails from "./PartA/EmailDetails"


import MainBook from "./PartB/MainBook"
function App() {
  return (
    <div className="App">
      {/* <NavLink to="/">Home</NavLink> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Inbox" element={<Inbox/>}></Route>
        <Route path="/SentMails" element={<SentMails/>}></Route>
        <Route path="/EmailDetails/:eid" element={<EmailDetails/>}></Route>
      </Routes>

    <MainBook></MainBook>


    </div>
  );
}

export default App;
