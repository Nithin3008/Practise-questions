// 5. Write an ES6 function that takes in an array of numbers and returns the sum of all the even numbers. Use the nullish coalescing operator to handle undefined or null values.
const sumOfEvenNumbers = (arr) => {
    // Your ES6+ code here
    const arr2 = arr.reduce((attr, val) => {
        let val1 = val ?? 0
        if (val1 % 2 == 0) {
            return attr + val1
        }
        return attr
    }, 0);

    return arr2;
};

console.log(sumOfEvenNumbers([undefined])); // 12
console.log(sumOfEvenNumbers([1, 3, 5])); // 0
