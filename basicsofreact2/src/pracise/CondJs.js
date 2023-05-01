export default function ph1({ obj2 }) {
    console.log(obj2)
    return (<div>
        {obj2.map((val) => <div style={{ color: val.price > 80000 ? "red" : "black" }}>{val.name}:INR {val.price}</div>)}
    </div>)

}