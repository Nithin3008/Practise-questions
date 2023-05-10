export default function ff2({ data1 }) {
    const arr1 = data1.filter((val) => val.magnitude % 2 == 0)
    return (<div>
        {arr1.map((val) => <p>{val.id} <h1>{val.name}</h1> {val.superpower} {val.magnitude}</p>)}
    </div>)
}