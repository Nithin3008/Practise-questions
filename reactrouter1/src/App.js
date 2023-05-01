import cart from "./pages1/cart"
import home from "./pages1/home"
import whislist from "./pages1/whislist"
import category from "./pages1/category"
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to='/category'>Category</Link>
        <Link to="/whislist">Whislist</Link>
        <Link to="/cart">Cart</Link>

      </nav>
      <Routes>
        <Route path='/home' element={<home />}></Route>
        <Route path='/cart' element={<cart />}></Route>
        <Route path='/category' element={<category />}></Route>
        <Route path='/whislist' element={<whislist />}></Route>
      </Routes>
    </div>
  );
}

export default App;
