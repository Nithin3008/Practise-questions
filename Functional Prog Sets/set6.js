//q1
const people = [
    { name: 'Raj', age: 28 },
    { name: 'Swapnil', age: 42 },
    { name: 'Anushka', age: 35 }
];

const nameArray = people.map(val => val.name)
console.log(nameArray)

//q2
const numbers = [1, 2, 3, 4];
const multipleofFive = numbers.map(val => val * 5)
console.log(multipleofFive)

//q3
const employeeData = [
    { name: "ram", dept: "marketer" },
    { name: "Radha", dept: "SDE" },
    { name: "shyam", dept: "finance professional" },
]
function greetEmployeeMessages(empData) {
    const greet = empData.map(val => `hi ${val.name} we are flad to have you as ${val.dept}`)
    return greet
}
console.log(greetEmployeeMessages(employeeData))

//q4
const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' },
];
function getBookTitles(bk1) {
    const bk2 = bk1.map((val) => val.title)
    return bk2
}
const title = getBookTitles(books)
console.log(title)


//q5
const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]
function letterWithA(sn) {
    const x = sn.filter((val) => {
        if (val.charAt(0) == 'A')
            return val;
    })
    return x
}
console.log(letterWithA(studentName))

//q6
const productData = [
    { prodName: "Dairy Milk", price: 10 },
    { prodName: "Dairy Milk Silk", price: 70 },
    { prodName: "Five Star", price: 20 },
    { prodName: "Mars", price: 50 }
]

function getProducts(pd, num) {
    const data = pd.filter(val => val.price > num)
    return data
}
console.log(getProducts(productData, 40))


//q7
const number = [1, 2, 3, 21, 14, 7];
function isDivisibleBy7(num2) {
    const num3 = num2.find(val => val % 7 == 0)
    return num3
}
console.log(isDivisibleBy7(number))

//q8
const names = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan", "shayam"]
function isNameGreaterTHan8(n1) {
    let x = n1.find((val) => val.length > 8)
    return x;
}
console.log(isNameGreaterTHan8(names))

//q9
const students = [
    { name: "John", grade: "B" },
    { name: "Mary", grade: "A" },
    { name: "Sam", grade: "C" },
    { name: "Sarah", grade: "A" },
];
function findStudentWithGradeA(stu) {
    const stu1 = stu.find(val => val.grade == 'A')
    return stu1
}

const studentWithGradeA = findStudentWithGradeA(students);
console.log(studentWithGradeA);

//q10
const students1 = [
    { name: "John", grade: "B", scholarship: false },
    { name: "Mary", grade: "B", scholarship: true },
    { name: "Sam", grade: "A", scholarship: false },
    { name: "Sarah", grade: "A", scholarship: true },
];
function findStudent(stu2) {
    const stu3 = stu2.find(val => val.scholarship == true || val.grade == 'A')
    return stu3
}

const student = findStudent(students1);
console.log(student);

//q11
const students2 = [
    { name: "John", grade: "B", scholarship: false },
    { name: "Mary", grade: "A", scholarship: true },
    { name: "Sam", grade: "A", scholarship: false },
    { name: "Sarah", grade: "B", scholarship: true },
];

function findStudent1(stu3) {
    const stu4 = stu3.find(val => val.grade == 'B' && val.scholarship == true)
    return stu4
}
const student4 = findStudent1(students2);
console.log(student4);

//q12
const bollywoodMovies = [
    { title: 'Sholay', director: 'Ramesh Sippy', year: 1975, rating: 8.2 },
    { title: 'Amar Akbar Anthony', director: 'Manmohan Desai', year: 1977, rating: 7.6 },
    { title: 'Namak Halaal', director: 'Prakash Mehra', year: 1982, rating: 7.4 },
    { title: 'Mr. India', director: 'Shekhar Kapur', year: 1987, rating: 7.8 },
    { title: 'Qayamat Se Qayamat Tak', director: 'Mansoor Khan', year: 1988, rating: 7.6 },
    { title: 'Parinda', director: 'Vidhu Vinod Chopra', year: 1989, rating: 8.1 },
    { title: 'Dil', director: 'Indra Kumar', year: 1990, rating: 7.8 }
];

function getBestOldBollywoodMovies(movie) {
    const result = movie.filter(val => {
        if (val.year < 1990 && val.rating > 8) {
            console.log(val.title)
            return val.title
        }
    })
    const result1 = result.map(val => val.title)
    return result1
}

const bestOldMovies = getBestOldBollywoodMovies(bollywoodMovies);
console.log(bestOldMovies); 