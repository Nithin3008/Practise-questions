const mycart = [
    {
        id: 1,
        name: "aloo parantha",
        price: 80
    },
    {
        id: 2,
        name: "Onion Capsicum Pizza",
        price: 180
    },
    {
        id: 3,
        name: "Pav bhaji",
        price: 40
    },
    {
        id: 4,
        name: "French Toast",
        price: 100
    }
];

export default function food() {
    return (
        <div>
            <h1>My Cart</h1>
            <ul>{mycart.map((val) => <li>{val.id}.{val.name}: Rs{val.price}</li>)}</ul>

            <p>Total Price:{mycart.reduce((att, val) => (att + val.price), 0)}</p>

        </div>
    )
}