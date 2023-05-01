// const arr = [1, 2, 3, 4, 5, 6, 7, 10, 8, 9, 15];
// const arr2 = arr.map(function (val) {
//     return val * val
// })
// console.log(arr2)

// const arr3 = ['hello', 'king', 'this', 'is', 'my', 'planet']
// const arr4 = arr3.map(function (val) {
//     return val.length
// })
// console.log(arr4)

// const arr5 = arr.filter(function (val) {
//     if (val % 2 != 0) {
//         return val;
//     }
// })
// console.log(arr5)

// const arr6 = arr.filter(function (val) {
//     if (val % 5 == 0) {
//         return val
//     }
// })
// console.log(arr6)

// const arr7 = arr.filter(function (val) {
//     if (val < 10) {
//         return val
//     }
// })
// console.log(arr7)

// const val1 = arr.find((val) => val % 2 == 0)
// console.log(val1)

// const fruitArray = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple']
// const val2 = fruitArray.find((str) => str.length >= 10)
// console.log(val2)


// const inventory = [
//     { name: 'socks', quantity: 12 },
//     { name: 'shirts', quantity: 10 },
//     { name: 'clips', quantity: 5 },
// ]
// const val3 = inventory.find((val => val.name == 'clips'))
// console.log(val3)

// const stLen = (x) => x.length;
// const strLen = (name1, stringL) => stringL(name1)
// console.log(strLen('NIthin', stLen))

// function fakeFetch(msg, shouldReject) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldReject) {
//                 reject(`error from server: ${msg}`);
//             }
//             resolve(`from server: ${msg}`);
//         }, 3000);
//     });
// }
// fakeFetch('hi')

const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://example.com/api/products") {
                resolve({
                    status: 200,
                    message: "Success",
                    data: {
                        products: [
                            { name: "Pen", price: 30, quantity: 100 },
                            { name: "Pencil", price: 50, quantity: 50 },
                            { name: "Paper", price: 20, quantity: 30 }
                        ]
                    }
                });
            } else {
                reject({
                    status: 404,
                    message: "Items list not found."
                });
            }
        }, 2000);
    });

};

let fullfil = fakeFetch("https://example.com/api/products").then(({ data }) => console.log(data.products.map((val) => console.log(`Name:${val.name}--INR${val.price}--${val.quantity}`))))