//q1
const cars = [
    { make: "Toyota", model: "Corolla", year: 2010 },
    { make: "Honda", model: "Civic", year: 2012 },
    { make: "Toyota", model: "Camry", year: 2015 },
    { make: "Ford", model: "Mustang", year: 2018 },
];

// Your code here
const findToyotaCar = (car1) => car1.filter((car) => car.make == 'Toyota' && car.year > 2010)

const toyotaCar = findToyotaCar(cars);
console.log(toyotaCar);

//q2
const cars1 = [
    { make: "Toyota", model: "Corolla", year: 2010 },
    { make: "Honda", model: "Civic", year: 2012 },
    { make: "Toyota", model: "Camry", year: 2015 },
    { make: "Ford", model: "Mustang", year: 2018 },
];

const getCarDetails = (car1) => car1.filter((car2) => car2.year > 2012)

const getCars = getCarDetails(cars1);
console.log(getCars);

//q3
const products = [
    { name: "Toothbrush", price: 29, category: "health" },
    { name: "Coffee Maker", price: 99, category: "home" },
    { name: "iPad", price: 799, category: "electronics" },
    { name: "Smartwatch", price: 199, category: "electronics" },
];

const findElectronicsProduct = (val) => val.find((ele) => ele.category == 'electronics')


const electronicsProduct = findElectronicsProduct(products);
console.log(electronicsProduct);

//q4
const products1 = [
    { name: "Toothbrush", price: 29, category: "health" },
    { name: "Coffee Maker", price: 99, category: "home" },
    { name: "iPad", price: 799, category: "electronics" },
    { name: "Smartwatch", price: 199, category: "electronics" },
];

const getAllElectronicProducts = (val) => val.filter((val2) => val2.category == 'electronics')



const electronicProducts = getAllElectronicProducts(products1);
console.log(electronicProducts);

//q5
const students = [
    { name: "Alice", age: 16, grade: 90 },
    { name: "Bob", age: 17, grade: 80 },
    { name: "Charlie", age: 15, grade: 95 },
    { name: "David", age: 16, grade: 85 },
];
const filterStudentsByGrade = (val, num1) => val.filter((val2) => val2.grade > num1)


const highGradeStudents = filterStudentsByGrade(students, 85);
console.log(highGradeStudents);

//q6
const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
];

const findBookWithMoreThan500Pages = (val) => val.filter((val2) => val2.pageCount > 500)


const bookWithMoreThan500Pages = findBookWithMoreThan500Pages(books);
console.log(bookWithMoreThan500Pages);

//q7
const customers = [
    { name: 'John', age: 25, gender: 'Male' },
    { name: 'Jane', age: 30, gender: 'Female' },
    { name: 'Bob', age: 40, gender: 'Male' },
    { name: 'Alice', age: 35, gender: 'Female' },
];

const getMaleCustomers = (val) => val.filter((val2) => val2.gender == 'Male')


const maleCustomers = getMaleCustomers(customers);
console.log(maleCustomers);

//q8
const games = [
    { title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG" },
    { title: "Grand Theft Auto V", developer: "Rockstar North", genre: "Action" },
    { title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle" },
    { title: "The Legend of Zelda: Breath of the Wild", developer: "Nintendo", genre: "Adventure" }
];

const filterByGenre = (val) => val.filter((val2) => val2.genre == 'RPG')


const filteredGames = filterByGenre(games, "RPG");
console.log(filteredGames);

//q9
const cars2 = [
    { make: "Toyota", model: "Corolla", year: 2010 },
    { make: "Honda", model: "Civic", year: 2012 },
    { make: "Toyota", model: "Camry", year: 2015 },
    { make: "Ford", model: "Mustang", year: 2018 },
];

const getCarModel = (val) => val.filter((val1) => val1.year > 2012).map((val2) => val2.model)


const carModels = getCarModel(cars2);
console.log(carModels);

//q10
const books1 = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
];

const getTitlesWithMoreThan700Pages = (val) => val.filter((val2) => val2.pageCount > 700).map((val3) => val3.title)
const booksWithMoreThan700Pages = getTitlesWithMoreThan700Pages(books1);
console.log(booksWithMoreThan700Pages);

//q11
const numbers = [12, 23, 4, 2, 11, 21]

const sumOfEvenNumbers = (val) => val.reduce(function (acc, val2) {
    if (val2 % 2 == 0) {
        return val2 + acc
    }
    else {
        return acc
    }
}, 0)
console.log(sumOfEvenNumbers(numbers))

//q12
const students2 = [
    { name: 'John', score: 80 },
    { name: 'Jane', score: 90 },
    { name: 'Bob', score: 75 },
    { name: 'Alice', score: 85 },
];

const getAverageScore = (val) => {
    const len = val.length
    let avg = val.reduce(function (acc, val2) {
        return acc + val2.score
    }, 0)
    return avg / len
}


console.log(getAverageScore(students2));

//q13
const products2 = [
    { name: 'Shirt', price: 20, quantity: 2 },
    { name: 'Pants', price: 30, quantity: 1 },
    { name: 'Shoes', price: 50, quantity: 1 },
    { name: 'Hat', price: 10, quantity: 3 },
];
const getTotalCost = (val) => val.reduce(function (acc, val2) {
    return acc + val2.price
}, 0)

console.log(getTotalCost(products2));

//q14
const strings = ['Hello', ' ', 'world', '!'];
const concatenateStrings = (val) => val.reduce(function (acc, val2) {
    return acc + val2
})

console.log(concatenateStrings(strings));

//q15
const numbers1 = [10, 5, 8, 3, 6];
const getMinimumNumber = (val) => val.reduce(function (acc, val2) {
    if (acc > val2) {
        // console.log(acc)
        acc = val2
        //return acc ==val2
    }
    return acc

}, val[1])


console.log(getMinimumNumber(numbers1)); 