export default function ff1({ data2 }) {
    const total = (data2.reduce((acc, val) => (acc + val.marks), 0)) / data2.length
    console.log(total)
    return (<div>
        <h1>{total > 80 ? "Certification Approved" : "Certification Not Approved"}</h1>
    </div>)
}