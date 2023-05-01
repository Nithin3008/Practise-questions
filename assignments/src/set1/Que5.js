export default function choclates({ items }) {
    return (
        <div>
            <h1>Products Name</h1>
            <ul>
                {items.map((val) => <li>{val.name}</li>)}
            </ul>
        </div>
    )
}