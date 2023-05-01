import SetQue1 from "./set2/SetQue1"
import SetQue2 from "./set2/setQue2"
import SetQue3 from "./set2/SetQue3"
import Setque4 from "./set2/Setque4"
import Setque5 from "./set2/Setque5"
import Setque6 from "./set2/Setque6"
import Setque7 from "./set2/Setque7"
import Setque8 from "./set2/Setque8"
import Setque9 from "./set2/Setque9"
import Setque10 from "./set2/Setque10"
import Que1 from "./set1/Que1"
import Que2 from "./set1/Que2"
import Que3 from "./set1/Que3"
import Que4 from "./set1/Que4"
import Que5 from "./set1/Que5"
import Que6 from "./set1/Que6"
import Que7 from "./set1/Que7"
import Que8 from "./set1/Que8"
import Que9 from "./set1/Que9"
import Que10 from "./set1/Que10"
import Que11 from "./set1/Que11"
const emp1 = {
  name: "Nithin",
  designation: "CEO",
  experince: "1"
}
const backgroundColor = 'lightgreen'
const color = 'darkgreen'
const borderRadius = '5px'
const padding = '10px'
const items = ['pen', 'pencil', 'ruler', 'eraser']
const heading = "Stationery Items"

const imageLink =
  'https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg'
const caption = 'Spring Flowers'

const products = [
  { name: 'Perk', quantity: 10, sales: 7 },
  { name: 'Pepsi', quantity: 10, sales: 20 },
  { name: 'Coke', quantity: 18, sales: 50 },
  { name: 'Maggi', quantity: 41, sales: 22 },
  { name: '5Star', quantity: 7, sales: 9 },
]

const student = {
  name: 'John Doe',
  english: 90,
  maths: 80,
  computers: 70,
}
const userData = {
  name: 'John',
  age: 25,
  email: 'john@example.com',
}
const products1 = [
  {
    id: 1,
    name: 'keyboard',
    description: 'Logitech Mechanical Keyboard',
    price: 2000,
  },
  { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
  {
    id: 3,
    name: 'monitor',
    description: 'Lenovo 32-inch display Monitor',
    price: 10000,
  },
  { id: 4, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
  {
    id: 5,
    name: 'speakers',
    description: 'Creative Desktop Speakers',
    price: 5000,
  },
  {
    id: 6,
    name: 'headphones',
    description: 'Sony over-the-ear wired Headphones with mic',
    price: 1500,
  },
  { id: 7, name: 'mobile', description: 'iPhone 12', price: 90000 },
]
const products2 = [
  {
    id: 1,
    name: 'keyboard',
    description: 'Logitech Mechanical Keyboard',
    price: 2000,
  },
  { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
  { id: 3, name: 'mobile', description: 'iPhone 13', price: 61000 },
  {
    id: 4,
    name: 'monitor',
    description: 'Lenovo 32-inch display Monitor',
    price: 10000,
  },
  { id: 5, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
  {
    id: 6,
    name: 'speakers',
    description: 'Creative Desktop Speakers',
    price: 5000,
  },
  {
    id: 7,
    name: 'headphones',
    description: 'Sony over-the-ear wired Headphones with mic',
    price: 1500,
  },
  { id: 8, name: 'mobile', description: 'iPhone 12', price: 90000 },
]
const products3 = [
  {
    id: 1,
    name: 'keyboard',
    description: 'Logitech Mechanical Keyboard',
    price: 2000,
  },
  { id: 2, name: 'mouse', description: 'Dell Wireless Mouse', price: 1200 },
  {
    id: 3,
    name: 'speakers',
    description: 'Bose L1 Pro32 Portable',
    price: 256000,
  },
  { id: 4, name: 'mobile', description: 'iPhone 13', price: 61000 },
  {
    id: 5,
    name: 'monitor',
    description: 'Lenovo 32-inch display Monitor',
    price: 10000,
  },
  { id: 6, name: 'mobile', description: 'iPhone 13 Pro Max', price: 140000 },
  {
    id: 7,
    name: 'speakers',
    description: 'Creative Desktop Speakers',
    price: 5000,
  },
  {
    id: 8,
    name: 'headphones',
    description: 'Sony over-the-ear wired Headphones with mic',
    price: 1500,
  },
  { id: 9, name: 'mobile', description: 'iPhone 12', price: 90000 },
]
const todoItems = [
  {
    id: 1,
    title: 'Complete practice set',
    description: 'Practice set 1 of React',
    isCompleted: true,
  },
  {
    id: 2,
    title: 'Attend revision session',
    description: 'Revision session of React',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Watch recording',
    description: 'Live session recording of React',
    isCompleted: true,
  },
  {
    id: 4,
    title: 'Attend DSH',
    description: 'Doubt Solving Hours of React',
    isCompleted: false,
  },
  {
    id: 5,
    title: 'Complete practice set',
    description: 'Practice set 2 of React',
    isCompleted: false,
  },
]
const title = 'React is awesome'
const content = 'React is a JavaScript library for building user interfaces.'

const heading1 = 'About Me'
const name = 'Preeti' // you can put your name
const learning = 'I am learning React JS currently at neoG Camp.'
function App() {
  return (
    <div className="App">
      <Que1 n={emp1.name} d={emp1.designation} e={emp1.experince}></Que1>
      <Que2 bg={backgroundColor} col={color} bdr={borderRadius} pd={padding}></Que2>
      <Que3 heading={heading} item={items}></Que3>
      <Que4 lin={imageLink} cap={caption}></Que4>
      <Que5 items={products}></Que5>
      <Que6 items1={products}></Que6>
      <Que7 record={student}></Que7>
      <Que8></Que8>
      <Que9></Que9>
      <Que10></Que10>
      <Que11></Que11>
      <SetQue1 name1={"Nithin"}></SetQue1>
      <SetQue2 name1={"Mustang"} price={50000}></SetQue2>
      <SetQue3 data={userData}></SetQue3>
      <Setque4 data={products1}></Setque4>
      <Setque5 data={products2}></Setque5>
      <Setque6 ti={title} con={content}></Setque6>
      <Setque7 ti={heading1} name={name} con={learning}></Setque7>
      <Setque8 data={products3}></Setque8>
      <Setque9></Setque9>
      <Setque10 data1={todoItems}></Setque10>
    </div>
  );
}

export default App;
