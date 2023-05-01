export default function stationary({ heading, item }) {
    return (
        <div>
            <h1>{heading}</h1>
            <ul>
                {item.map((val) => <li>{val}</li>)}
            </ul>
        </div>
    )
}