export default function Ff4({ data2 }) {
    const arr2 = data2.reduce(function (acc, val) {
        if (val.category == "luxury") {
            return [acc[0] + 1, acc[1]]
        }
        else {
            return [acc[0], acc[1] + 1]
        }
    }, [0, 0])
    console.log(arr2)
    return (<div>
        <h2>luxury:{arr2[0]}</h2>
        <h2>sprots:{arr2[1]}</h2>
    </div>)
}