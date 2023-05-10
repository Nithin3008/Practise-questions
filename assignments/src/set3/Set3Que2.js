export default function ff2({ data1 }) {
    const arr1 = data1.filter((val) => val.magnitude > 5)
    return (<div>
        {arr1.map((val) => <p>{val.id} {val.name} {val.superpower} {val.magnitude}</p>)}
    </div>)
}