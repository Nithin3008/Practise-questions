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
import Set3Que1 from "./set3/Set3Que1"
import Set3Que2 from "./set3/Set3Que2"
import Set3Que3 from "./set3/Set3Que3"
import Set3Que4 from "./set3/Set3Que4"
import Set3Que5 from "./set3/Set3Que5"
import Set3Que6 from "./set3/Set3Que6"
import Set3Que7 from "./set3/Set3Que7"
import Set3Que8 from "./set3/Set3Que8"
import Set3Que9 from "./set3/Set3Que9"
import Set3Que10 from "./set3/Set3Que10"
import Set4Que1 from "./set4/Set4Que1"
import Set4Que2 from "./set4/Set4Que2"
import Set4Que3 from "./set4/Set4Que3"
import Set4Que4 from "./set4/Set4Que4"
import Set4Que5 from "./set4/Set4Que5"
import Set4Que6 from "./set4/Set4Que6"
import Set4Que7 from "./set4/Set4Que7"



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
const cartoons = [
  {
    id: 1,
    name: 'Mickey Mouse',
    superpower: 'Invisibility',
    magnitude: 1
  },
  {
    id: 2,
    name: 'Spongebob Squarepants',
    superpower: 'Super Strength',
    magnitude: 3
  },
  {
    id: 3,
    name: 'Bugs Bunny',
    superpower: 'Teleportation',
    magnitude: 9
  },
  {
    id: 4,
    name: 'Tom and Jerry',
    superpower: 'Intelligence',
    magnitude: 8
  },
  {
    id: 5,
    name: 'The Powerpuff Girls',
    superpower: 'Flight',
    magnitude: 10
  }
]
const vegetables = [
  {
    id: 1,
    name: 'Carrots',
    pickDate: '2023-03-25',
  },
  {
    id: 2,
    name: 'Broccoli',
    pickDate: '2023-03-30',
  },
  {
    id: 3,
    name: 'Peppers',
    pickDate: '2023-03-25',
  },
  {
    id: 4,
    name: 'Tomatoes',
    pickDate: '2023-03-27',
  },
  {
    id: 5,
    name: 'Ladies Finger',
    pickDate: '2023-03-30',
  },
]
const bouquet = [
  {
    id: 1,
    flowers: ['rose', 'lily', 'marigold'],
    totalFlowers: 9,
    price: 1400,
  },
  {
    id: 2,
    flowers: ['snapdragon', 'sunflower'],
    totalFlowers: 10,
    price: 3400,
  },
]

const DonationData = [
  {
    id: 1,
    name: 'Nitin',
    Donation: 7800,
  },
  {
    id: 2,
    name: 'Mehak',
    Donation: 9500,
  },
  {
    id: 3,
    name: 'Mehul',
    Donation: 65000,
  },
  {
    id: 4,
    name: 'Nina',
    Donation: 560,
  },
]

const cars = [
  {
    id: 1,
    name: 'supra',
    price: 500000,
    category: 'sports',
  },
  {
    id: 2,
    name: 'A5',
    price: 700000,
    category: 'luxury',
  },
  {
    id: 3,
    name: 'huyara',
    price: 1500000,
    category: 'sports',
  },
  {
    id: 4,
    name: 'agera R',
    price: 3500000,
    category: 'sports',
  },
]
const studentData = [
  {
    id: 1,
    name: 'Nitin',
    marks: 78,
  },
  {
    id: 2,
    name: 'Mehak',
    marks: 95,
  },
  {
    id: 3,
    name: 'Mehul',
    marks: 65,
  },
  {
    id: 4,
    name: 'Nina',
    marks: 56,
  },
]

const characters = {
  heroes: [
    {
      name: "IRON MAN",
      powers: "Genius,Rich,IRON Suit",
      costume: "IRON MAN suit",
    },
    {
      name: "ANT MAN",
      powers: "Ant man suit",
      costume: "Ant man suit",
    },
    {
      name: "Spider-man",
      powers: "Reflexes,Speed,Spider-Sense",
      costume: "Spider Suit",
    },
    {
      name: "Bat man",
      powers: "Rich,Bat suit",
      costume: "Bat Suit",
    },
    {
      name: "Super-man",
      powers: "Superhuman strength,Reflexes,Speed",
      costume: "Superman  Suit",
    },
  ],
  villains: [
    {
      name: "Thanos",
      powers: "Superhuman strength,Reflexes,Speed,",
      costume: "Metal armor",
    },
    {
      name: "Venom",
      powers: "shapeshifting and camouflage Symbiotes autonomous defense",
      costume: "black suit",
    },
    {
      name: "Kang the conqueror",
      powers: "time travel, can access all tech",
      costume: "kang armor",
    },
    {
      name: "Joker",
      powers: "clownlike appearance and sick humour",
      costume: "Joker costume",
    },
  ],
};

const itemList = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Carrot", category: "Vegetable" },
  { id: 3, name: "Banana", category: "Fruit" },
  { id: 4, name: "Broccoli", category: "Vegetable" },
];
const todoItems1 = [
  { id: 1, task: "Writing 1-page poem", isDone: true },
  { id: 2, task: "Gym", isDone: false },
  { id: 3, task: "Shopping", isDone: false },
  { id: 4, task: "Standup call", isDone: true },
]
const todoItems2 = [
  { id: 1, task: "Writing 1-page poem", isDone: false },
  { id: 2, task: "Gym", isDone: false },
  { id: 3, task: "Shopping", isDone: false },
  { id: 4, task: "Standup call", isDone: false },
]

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
  { id: 3, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Classic" },
  { id: 4, title: "1984", author: "George Orwell", genre: "Dystopian" },
  { id: 5, title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian" },
  { id: 6, title: "The Hunger Games", author: "Suzanne Collins", genre: "Young Adult" },
  { id: 7, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", genre: "Young Adult" },
];
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
      <Set3Que1 link="https://picsum.photos/200" width="500px" height="200px"></Set3Que1>
      <Set3Que2 data1={cartoons}></Set3Que2>
      <Set3Que3 data1={cartoons}></Set3Que3>
      <Set3Que4 data1={cartoons} field="Intelligence"></Set3Que4>
      <Set3Que5 data1={vegetables}></Set3Que5>
      <Set3Que6 data2={bouquet}></Set3Que6>
      <Set3Que7 data2={bouquet}></Set3Que7>
      <Set3Que8 data2={DonationData}></Set3Que8>
      <Set3Que9 data2={cars}></Set3Que9>
      <Set3Que10 data2={studentData}></Set3Que10>
      <Set4Que1 data2={characters}></Set4Que1>
      <Set4Que2></Set4Que2>
      <Set4Que3 data2={itemList}></Set4Que3>
      <Set4Que4 data2={todoItems1}></Set4Que4>
      <Set4Que5 data2={todoItems2}></Set4Que5>
      <Set4Que6 data2={books}></Set4Que6>
      <Set4Que7></Set4Que7>
    </div>

  );
}

export default App;
