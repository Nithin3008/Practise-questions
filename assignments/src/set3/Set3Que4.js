export default function ff2({ data1, field }) {
    const arr1 = data1.filter((val) => val.superpower == field)
    return (<div>
        {arr1.map((val) => <p>{val.name}-{val.superpower}-{val.magnitude}</p>)}
    </div>)
}