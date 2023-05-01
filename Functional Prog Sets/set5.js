//q1
const numbers = [1, 2, 3, 4, 5];
const val1 = numbers.map(function (val) {
    return val + 3
})
console.log(val1)

//q2
const myArray = ['apple', 'banana', 'cherry'];
const val2 = myArray.map(function (val) {
    return val.toUpperCase()
})
console.log(val2)

//q3
const people = [
    { name: 'Ankit', age: 25 },
    { name: 'Vinit', age: 24 },
    { name: 'Shashi', age: 29 }
];
const val3 = people.map(function (val) {
    return val.age
})
console.log(val3)

//q4
const products = [
    { name: 'Lip Balm', stock: 100 },
    { name: 'PERFUME', stock: 400 },
    { name: 'Socks', stock: 200 }
];
const val4 = products.map(function (val) {
    return val.name.toLowerCase()
})
console.log(val4)

//q5
const cities = [
    { name: 'New York', population: 8538000 },
    { name: 'Los Angeles', population: 3976000 },
    { name: 'Bangalore', population: 13608000 }
];

const val5 = cities.map((val) => val.name)
console.log(val5)

//q6
const fruits = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple'];
const val6 = fruits.filter((val) => {
    if (val.length > 5) {
        return val
    }
})
console.log(val6)

//q7
const numbers1 = [1, 2, 30, 4, 15];
const val7 = numbers1.filter(function (val) {
    if (val % 3 == 0 && val % 5 == 0) {
        return val
    }
})
console.log(val7)

//q8
const people1 = [
    { name: 'Rahul', age: 25 },
    { name: 'Raj', age: 35 },
    { name: 'Vijay', age: 45 }
];
const val8 = people1.filter(function (val) {
    if (val.age > 30) {
        return val

    }
})
console.log(val8)

//q9

const students = [
    { name: 'Aditya', score: 85 },
    { name: 'Bob', score: 75 },
    { name: 'Charlie', score: 90 }
];
const val9 = students.filter(function (val) {
    if (val.score > 80) {
        return val
    }
})
console.log(val9)

//q10
const people2 = [
    { name: 'Ridhima', age: 75, city: 'Indore' },
    { name: 'Akshay', age: 60, city: 'Delhi' },
    { name: 'Udit', age: 80, city: 'Indore' },
    { name: 'Venki', age: 80, city: 'Bangalore' }
];
const val10 = people2.filter(function (val) {
    if (val.city == 'Indore' && val.age > 70) {
        return val
    }
})
console.log(val10)

//q11
const books = [
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
    { title: "1984", author: "George Orwell", genre: "Science Fiction" },
    { title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance" }
];
const val11 = books.filter((val) => val.genre == 'Science Fiction')
console.log(val11)

//q12
const employees = [
    { name: "Abhay", age: 25, salary: 20000 },
    { name: "Joice", age: 30, salary: 35000 },
    { name: "Reena", age: 35, salary: 15000 },
    { name: "Jeena", age: 40, salary: 50000 }
];
const val12 = employees.filter((val) => val.salary > 22000 && val.age > 25)
console.log(val12)