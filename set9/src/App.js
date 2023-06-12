import {Routes,Route,NavLink} from "react-router-dom"
import './App.css';
//Project Imports
//Part A imports
import Home from "./PartA/Home"
import Inbox from "./PartA/Inbox"
import SentMails from "./PartA/SentMails"
import EmailDetails from "./PartA/EmailDetails"

//Part B Imports
import { AllBooks1 } from "./PartB/AllBooks1";
import { FavBook1 } from "./PartB/FavBook";
import { ReadBook1 } from "./PartB/ReadBook";


//Part C imports
import { Menu1 } from "./PartC/Menu";
import { Cartwatcher } from "./PartC/CartPizza";


//Part D imports
import { Video1 } from "./PartD/Videos";
import { Like1 } from "./PartD/Liked";
import { Watch1 } from "./PartD/Watche";

function App() {
  return (
    <div className="App">
      {/* <NavLink to="/">Home</NavLink> */}

      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Inbox" element={<Inbox/>}></Route>
        <Route path="/SentMails" element={<SentMails/>}></Route>
        <Route path="/EmailDetails/:eid" element={<EmailDetails/>}></Route>
      </Routes> */}

      {/* PartB imports */}
      {/* <AllBooks1></AllBooks1>
      <FavBook1></FavBook1>  
      <ReadBook1></ReadBook1>     */}


      {/* PartC imports */}
      <Menu1></Menu1>
      <Cartwatcher></Cartwatcher>

      {/* PartD imports
      <Video1></Video1>
      <Like1></Like1>
      <Watch1></Watch1> */}




    </div>
  );
}

export default App;

