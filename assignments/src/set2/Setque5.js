export default function r1({ data }) {
    const arr1 = data.filter((val) => val.name === "mobile")
    return (<div>
        {arr1.map((val) => <p>Name:{val.name} description: {val.description} price:{val.price}</p>)}
    </div>)
}