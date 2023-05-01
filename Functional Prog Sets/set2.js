//q1
const person = {
    name: 'tanjirou',
    age: 30
}
person.age = 35
console.log(person.age)

//q2
const car1 = { make: 'Porsche', model: '911', horsepower: 450 };
const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 };
const isSportsCar = car => car.horsepower > 300 ? 'true' : 'false'
console.log(isSportsCar(car1))
console.log(isSportsCar(car2))

//q3
const person1 = { name: 'Ajay', age: 20 };
const isEligible = (person2, num) => person2.age + num > 21 ? 'true' : 'false'
console.log(isEligible(person1, 2))
console.log(isEligible(person1, 1))

//q4
const blog1 = { title: 'How to Learn JavaScript', author: 'John Doe', views: 1430 };
const blog2 = { title: '10 Reasons to Start a Blog', author: 'Jane Smith', views: 500 };
const getViews = blog => blog.views > 1000 ? 'true' : 'false'
console.log(getViews(blog1))
console.log(getViews(blog2))

//q5
let a = 1, b = 2;
[a, b] = [b, a]
console.log(a, b)

//q6
const add = (a = 30, b = 0) => a + b;
console.log(add(2, 3))

//q7
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj = { ...obj1, ...obj2 }
const obj11 = { obj1, obj2 }
console.log(obj)
console.log(obj11)

//q8
const person3 = {
    name1: 'John Doe',
    address: {
        city: 'New York',
        state: 'NY',
    },
};
const getData = ({ name1, address: { city } }) => {
    console.log(name1)
    console.log(city)

}
getData(person3)

//q9
const strtoUppercase = str => str.toUpperCase();
console.log(strtoUppercase('hello'))

//q10
const concatenateStrings = (str1, str2) => `${str1} ${str2}`
console.log(concatenateStrings('hello', 'world'))

//q11
function lastElement(num1) {
    return num1[num1.length - 1]
}

console.log(lastElement([1, 2, 3, 4, 5]))
//here we are passsing the eleemnts in array so that's why we cannot use rest operator

//q12
let firstElement = (num2) => num2[0]
console.log(firstElement([1, 2, 3, 4, 5]))

//q13
const sumFirstElement = (num3, x) => num3[0] + x
console.log(sumFirstElement([1, 2, 3], 5));

//q14
const sumFirstAndLast = num4 => num4[num4.length - 1] + num4[0]
console.log(sumFirstAndLast([1, 2, 3, 4, 8]));

//q15
const person4 = { name: 'John', age: 25, occupation: 'Software Engineer' }
const person5 = { name: 'Jane', age: 45, occupation: 'Data Analyst' }
let personInfo = (per) => `${per.name} is ${per.age} years old`
console.log(personInfo(person4))
console.log(personInfo(person5))