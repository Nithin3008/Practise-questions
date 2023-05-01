const numList = [1, 3, 55, 22, 44]
const op = numList.reduce((acc, val) => {
    if (val % 2 == 0) {
        return [acc[0], acc[1] + val]
    }
    else {
        return [acc[0] + val, acc[1]]
    }


}, [0, 0])
console.log(op)

const numList1 = [
    { type: 'odd', payload: 1 },
    { type: 'odd', payload: 3 },
    { type: 'odd', payload: 55 },
    { type: 'even', payload: 22 },
    { type: 'even', payload: 44 },
]
const op1 = numList1.reduce(function (acc, val) {
    if (val.type == "even") {
        return { ...acc, even: acc.even + val.payload }
    }
    else {
        return { ...acc, odd: acc.odd + val.payload }
    }
}, { odd: 0, even: 0 })
console.log(op1)