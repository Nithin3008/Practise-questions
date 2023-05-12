// import Ff1 from './filesFolder/increArray';
// import Ff2 from './filesFolder/showArray';
import Cart from './Cart/cartProducts';
import Prod from './Cart/addProdcuts';
import { Route,Routes,NavLink } from 'react-router-dom';
import './App.css';
import ProductListing from "./PartA/ProductListing"
import ProductDetail from "./PartA/ProductDetail"
import Cart1 from './PartA/Cart1';
import WhisList from './PartA/whisList';
import Home from "./PartA/Home"
// commented items are working basic example
//Part B declarations
import AllTodos from "./PartB/AllTodos"
import DoneTodo from "./PartB/DoneTodo"
import OpenTodo from "./PartB/OpenTodo"
import TodoDetails from "./PartB/TodoDetails"

//Part C Declarations
import Home1 from "./PartC/Home1"
import AnswerPage from "./PartC/AnswerPage"
import QuestionPage from "./PartC/QuestionPage"
function App() {
  return (
    <div className="App">
      <h1>E commers apps</h1>
      <NavLink to="/">Home</NavLink> ||
      <NavLink to="/ProductListing" >Products</NavLink> ||
      <NavLink to="/Cart1">Cart</NavLink> ||
      <NavLink to="/WhisList">WhisList</NavLink>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/ProductListing' element={<ProductListing />}></Route>
        <Route path='/Cart1' element={<Cart1 />}></Route>
        <Route path='/ProductDetail/:prdId' element={<ProductDetail />}></Route>
        <Route path='/WhisList' element={<WhisList />}></Route>
      </Routes>
      <h1>Todo App</h1>
      <NavLink to="/">Home</NavLink> ||
      <NavLink to="/AllTodos" >All Todo Items</NavLink> ||
      <NavLink to="/DoneTodo">DoneTodo</NavLink> ||
      <NavLink to="/OpenTodo">OpenTodo</NavLink>
    <Routes>
       <Route path='/' element={<Home></Home>}></Route>
        <Route path='/TodoDetails/:todoId' element={<TodoDetails />}></Route>
        <Route path='/AllTodos' element={<AllTodos />}></Route>
        <Route path='/DoneTodo' element={<DoneTodo/>}></Route>
        <Route path='/OpenTodo' element={<OpenTodo />}></Route>
        </Routes>

        <h1>QUestion code</h1>
        <NavLink to="/">Home</NavLink> ||
        <Routes>
        <Route path='/' element={<Home1></Home1>}></Route>
          <Route path='/QuestionPage' element={<QuestionPage />}></Route>
          <Route path='/AnswerPage/:queId' element={<AnswerPage/>}></Route>
        </Routes>


    </div>
  );
}

export default App;
