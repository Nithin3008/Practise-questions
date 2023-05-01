//q1
let array = [4, 78, 8, 3, 6, 0, 12, 34]
const getMaxElement = (arr1) => {
    let max = arr1[0]
    for (let i = 1; i < arr1.length; i++) {
        if (max < arr1[i]) {
            max = arr1[i]
        }
    }
    return max
}
console.log(getMaxElement(array))

//q2
const calculateAverage = arr2 => {
    let sum = 0;
    for (let i = 0; i < arr2.length; i++) {
        sum = sum + arr2[i]
    }
    let avg = sum / arr2.length
    return avg
}
console.log(calculateAverage([1, 2, 3, 4, 5]));

//q3
var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const convertEvenToOdd = arr3 => {
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] % 2 == 0) {
            arr3[i] = arr3[i] + 1
        }
    }
    return arr3
}
console.log(convertEvenToOdd(numArr));

//q4

var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
const filterWords = arr4 => {
    let res1 = []
    for (let i = 0; i < arr4.length; i++) {
        if (arr4[i].length > 5) {
            res1.push(arr4[i])
        }
    }
    return res1
}
console.log(filterWords(words))

//q5
const capitalizeWords = arr5 => {
    for (let i = 0; i < arr5.length; i++) {
        arr5[i] = arr5[i].toUpperCase();
    }
    return arr5
}
console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]))

//q6
const getValues = (arr6, name1) => {
    console.log(arr6[0][name1])
}
console.log(
    getValues(
        [
            { name: "John", age: 21 },
            { name: "Mary", age: 22 },
            { name: "Peter", age: 23 },
        ],
        "name"
    )
);

//q7
const userData = { firstName: "John", lastName: "Dee" }
const podAndTeamAllocation = obj1 => ({ ...obj1, teamid: 667543 })
console.log(podAndTeamAllocation(userData))

//q8
const checkForTeam = obj2 => {
    if (obj2.team >= 'A' && obj2.team <= 'Z') {
        return obj2;
    }
    else {
        obj2.team = 'A'
    }
    return obj2
}

console.log(checkForTeam({ firstName: 'Penn', lastName: 'Ma' }))
console.log(checkForTeam({ firstName: 'John', lastName: 'Dee', team: 'B' }))
console.log(checkForTeam({ firstName: 'Priya', lastName: 'Raj' }))

//q9
const book = {
    title: 'JavaScript: The Definitive Guide',
    authors: [{ name: 'David Flanagan', age: 49 }, { name: 'Yukihiro Matsumoto', age: 57 }],
    publisher: { name: 'O\'Reilly Media', location: 'CA' }
};
const { title, authors: author1, authors: author2, publisher: publishname } = book
console.log(title, author1[0].name, author2[0].name, publishname.name)
// const title = book.title
// const author1 = book.authors[0].name
// const author2 = book.authors[1].name
// const publisherName = book.publisher.name
// console.log(title)
// console.log(author1)
// console.log(author2)
// console.log(publisherName)

//q10
var array2 = [
    {
        name: "Jay",
        age: 60
    },
    {
        name: "Gloria",
        age: 36
    },
    {
        name: "Manny",
        age: 16
    },
    {
        name: "Joe",
        age: 9
    }
];

const sumOfAges = arr8 => {
    let sum = 0
    console.log(arr8[0])
    for (let i = 0; i < arr8.length; i++) {
        sum = sum + arr8[i].age
    }
    return sum
}
console.log(sumOfAges(array2))