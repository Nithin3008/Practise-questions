//q1
const items = ['apple', 'banana', 'orange'];
function formatArray(items1) {
    return `The array has "${items1.length}" and the first item is "${items1[0]}", and the last item is "${items1[items1.length - 1]}"`

}
const msg = formatArray(items)
console.log(msg)

//q2
const product = {
    name: 'Socks',
    price: 249,
    inStock: true,
};
const formatProduct = (pro) => pro.inStock == true ? `${pro.name} cost INR ${pro.price} and is in stock` : `not avaialble`;
const msg1 = formatProduct(product)
console.log(msg1)

//q3
function findPerson(per1, name1) {
    for (let i = 0; i < per1.length; i++) {
        if (per1[i].name == name1)
            return per1[i]
    }
}
console.log(findPerson([{ name: 'Amay', age: 25 }, { name: 'Akhil', age: 25 }], "Akhil"))

//q4
function pickFirstAndSecond(val) {
    let [ft, lt] = val
    return { first: ft, last: lt }
}
console.log(pickFirstAndSecond(["orange", "banana", "apple"]))


console.log(pickFirstAndSecond(["orange", "banana", "apple"]))
console.log(pickFirstAndSecond(["red", "blue", "green"]))

//q5
const startsWithA = (str) => str.charAt(0) === 'A' ? 'true' : 'false'
console.log(startsWithA("Akshita"))
console.log(startsWithA("Jeena"))

//q6
let printFirstCharacter = (num) => num[0]
console.log(printFirstCharacter([1, 2, 3, 5, 8]))

//q7
function printLastFive(num1) {
    const l = num1.length - 5
    // console.log(l)
    for (let i = l; i < num1.length; i++) {
        console.log(num1[i])
    }
}
console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]))

//q8
const printSecondCharacter = num2 => num2[1] * 20
console.log(printSecondCharacter([1, 2, 3, 5, 8]))

//q9
const sayHello = ([str1, str2]) => `hello ${str2}`
console.log(sayHello(["Akshay", "Sweta", "Prerana", "Vinay"]))
console.log(sayHello(["Kanika", "Rakesh", "Prerana", "Puja"]))

//q10
function sumOfEvenIndices(num) {
    let sum = 0
    for (let i = 0; i < num.length; i = i + 2) {
        sum = sum + num[i]
    }
    return sum
}
console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])) // 6
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])) // 30

//q11
const sumFirstTwoElements = ([n1, n2]) => n1 + n2


console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])) // 14
console.log(sumFirstTwoElements([12, 14, 3, 27, 15])) // 26

//q12
function printMultipleOfFive(num3) {
    for (let i = 0; i < num3.length; i++) {
        if (num3[i] % 5 == 0) {
            return num3[i]
        }
    }
}
console.log(printMultipleOfFive([7, 4, 10, 7, 5, 3])) // 10
console.log(printMultipleOfFive([7, 5, 10, 7, 15, 3])) // 5

//q13
// function getAddress(usd) {
//     const { postalCode, city } = usd
//     return { postalCode, city }
// }
//2nd method
function getAddress({ postalCode, city }) {
    return { postalCode, city }
}
const userData = {
    name: 'Jane Doy',
    postalCode: '12134',
    city: 'Germany',
}

console.log(getAddress(userData));

//q14

const printData = (usd1) => `${usd1.name} lives in ${usd1.country}`

const userData1 = {
    name: 'Gaurav',
    postalCode: '12134',
    country: 'Japan',
}
console.log(printData(userData1));


const userData2 = {
    name: 'Pritam',
    postalCode: '560223',
    country: 'India',
}
console.log(printData(userData2));

//q15

const printProductDetails = (pr1) => `${pr1.name} which is ${pr1.specification.size},has a capacity of ${pr1.specification.size}`
const product1 = {
    name: "Apple MacBook Air 2020",
    specification: {
        capacity: "256GB",
        size: "13.3 Inch"
    },
    price: 82900
}
console.log(printProductDetails(product1));