export default function F2({ data2 }) {

    const arr2 = data2.filter(({ price }) => price > 2000)
    console.log(arr2)
    return (<div>
        {arr2.map((val) => <p>{val.id}-{val.price}-{val.totalFlowers}-{val.flowers}</p>)}

    </div >)
}