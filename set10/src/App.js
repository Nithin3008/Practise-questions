import { Home1 } from './pages/Inbox';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Trash1 } from './pages/Trash';
import { Spam1 } from './pages/Spam';
import { Detail1 } from './pages/Detail';
import LinkBar from "./pages/LinksBar"
function App() {
  return (
    <div className="App">
    {/* <Home1></Home1> */}

    <div style={{display:"flex"}}>
      <div style={{width:"15%"}}>
      <LinkBar></LinkBar>
      </div>
      <div style={{width:"85%"}}>
      <Routes>
    <Route path='/' element={<Home1 />}></Route>
      <Route path='/Trash1' element={<Trash1 />}></Route>
      <Route path='/Detail1/:mailId' element={<Detail1/>}></Route>
      <Route path="/Spam1" element={<Spam1/>}></Route>
    </Routes>
      </div>
    </div>
    
  
    </div>
  );
}

export default App;
