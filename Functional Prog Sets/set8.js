//q1
const strings = ["apple", "banana", "cherry", "date", "blueberry"];
const totalLength = (val) => val.reduce(function (acc, val) {
    return acc + val.length
}, 0)
console.log(totalLength(strings));

//q2
const numbers = [1, 2, 3, 4, 5];
const sumSquares = (val) => val.reduce(function (acc, val) {
    return acc + val * val
}, 0)

console.log(sumSquares(numbers));

//q3
const items = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 20 },
    { name: "Item 3", price: 30 }
];
const totalValue = (val) => val.reduce(function (acc, val) {
    return acc + val.price
}, 0)

console.log(totalValue(items));

//q4
const concatStrings = (val) => val.reduce(function (acc, val) {
    return acc + val
})
console.log(concatStrings(['this', 'is', 'fun']));

//q5
const numbers1 = [1, 2, 3, 4, 5];
const product = (val) => val.reduce(function (acc, val) {
    return acc * val
}, 1)

console.log(product(numbers1));

//q6
const strings1 = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];

const longestString = (val) => val.reduce(function (acc, val1) {
    if (acc.length < val1.length) {
        acc = val1
    }
    return acc

}, val[0])

console.log(longestString(strings1));

//q7
const people = [
    { name: 'Jeena', age: 25 },
    { name: 'Priya', age: 30 },
    { name: 'Naina', age: 45 },
    { name: 'Jeena1', age: 50 },
    { name: 'Priya1', age: 48 },
]

const oldestPersonName = (val) => val.reduce(function (acc, val1, i, ca) {
    if (acc.age < val1.age) {
        acc = val1
    }
    if (i === (ca.length - 1)) {
        return acc.name
    }
    return acc

}, val[0])

const oldestPersonName1 = (val) => val.reduce(function (acc, val1) {
    if (acc.age < val1.age) {
        acc = val1
    }
    return acc
}, val[0]).name//.map(({ name }) => { name })

console.log(oldestPersonName1(people))

//q8
const people1 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 }
];

function getAverageAge(p1) {
    const x = p1.reduce(function (acc, val) {
        return acc + val.age
    }, 0)
    return x / p1.length
}


console.log(getAverageAge(people1));

//q9

const products = [
    { name: "Bread", price: 10, quantity: 2 },
    { name: "Clips", price: 20, quantity: 5 },
    { name: "Knife", price: 30, quantity: 1 },
    { name: "Slipper", price: 40, quantity: 3 }
];
const findMostExpensiveProduct = (val1) => val1.reduce(function (acc, val2) {
    if (val2.price > acc.price) {
        return acc = val2
    }
    return acc
}, val1[0])

console.log(findMostExpensiveProduct(products));

//q10

const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];
//const k = {};
const countStrings = (val) => val.reduce(

    function (acc, val1, { }) {
        console.log(acc)
        acc[val1] = (acc[val1] ?? 0) + 1;
        return acc

    }, {})

console.log(countStrings(fruits));

