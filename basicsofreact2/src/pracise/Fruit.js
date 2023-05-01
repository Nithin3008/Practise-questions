export default function printF() {
    const fruits = [
        { id: 1, name: "Apple", price: 20 },
        { id: 2, name: "Orange", price: 54 },
        { id: 3, name: "Grapes", price: 30 },
        { id: 4, name: "Pineapple", price: 70 }
    ];
    return (
        <div>
            <ul>
                {fruits.map((val) => <li>{val.name}:Inr{val.price}</li>)}
            </ul>
        </div>
    )
}