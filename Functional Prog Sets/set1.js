//q1
const isEligibleToVote = num => {
    if (num >= 18) {
        return "eligiible to vote"
    }
    else {
        return "not elgibile"
    }
}

console.log(isEligibleToVote(18))
console.log(isEligibleToVote(17))

//q2
const isGreater = (num1, num2) => {
    if (num1 > num2) {
        return `${num1} is greater than ${num2}`
    }
    else {
        return `${num2} is greater than ${num1}`
    }
}

console.log(isGreater(2, 5))

//q3
const checkNum = num3 => num3 < 0 ? "negative number" : "postivie number";
console.log(checkNum(-5))

//q4
const isEvenodd = num4 => num4 % 2 == 0 ? "Even num" : "odd num";
console.log(isEvenodd(9))

//q5
let checForAplhabetA = str1 => {
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] == 'a' || str1[i] == 'A') {
            return 'a is included'
        }
    }
    return 'a not included'

}
console.log(checForAplhabetA('mustang'))

//q6
let checkLength = str2 => str2.length > 5 ? "more than 5 char" : "less than 5 char"
console.log(checkLength('helloworld'))

//q7
let isBetweenOneAndTen = num5 => num5 > 1 && num5 < 10 ? "true" : "false"
console.log(isBetweenOneAndTen(15))

//q8
let isHelloPresent = str3 => str3.includes('hello') ? 'true' : 'false'
console.log(isHelloPresent('helworld'))

//q9
let isMultipleofThree = num6 => num6 % 3 == 0 ? 'true' : 'false'
console.log(isMultipleofThree(9))
console.log(isMultipleofThree(19))

//q10
let multiplyByTen = num7 => num7 * 10
console.log(multiplyByTen(8))

//q11
const product = {
    title: "iPhone",
    price: 5999,
    description: "The iPhone is a smartphone developed by Apple"
}

let { title, price, description } = product;
console.log(title)
console.log(price)
console.log(description)

//q12
const book = {
    title: 'A shoe dog',
    author: 'louis',
    pages: 153
}
function getBookDetails(book1) {
    if (book1.pages > 100) {
        return 'true'
    }
    else {
        return 'fasle'
    }
}
console.log(getBookDetails(book))

//q13
const person = {
    name: 'Nithin',
    age: 24,
    occupiation: 'student'
}
const changeOccupiation = (person1, newOccupiation) => person1.occupiation = newOccupiation
console.log(person)
changeOccupiation(person, 'software Engineer')
console.log(person)

//q14
const numbers = [1, 2, 3]
const [a, b, c] = numbers
console.log(a)
console.log(b)

//q15
const defaultParamsFunc = (a, b, c) => { if (c === undefined) { c = 4 } a * b * c }