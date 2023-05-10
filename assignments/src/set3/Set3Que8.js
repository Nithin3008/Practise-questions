export default function F3({ data2 }) {
    const collected = data2.reduce((acc, val) => (acc + val.Donation), 0)
    console.log(collected)
    return (<div>
        <h1>Total Donation Collected: {collected}</h1>
    </div>)
}