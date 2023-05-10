export default function F2({ data2 }) {

    const arr2 = data2.filter(({ flowers }) => flowers.includes("rose"))
    console.log(arr2)
    return (<div>
        {arr2.map(({ price }) => <h2>Price of bouquet with roses : {price}</h2>)}
    </div>)
}