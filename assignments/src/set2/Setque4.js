export default function p1({ data }) {
    return (<div>
        {data.map((val) => <p style={{ border: val.price > 50000 ? "2px solid red" : "" }}>id:{val.id} name:{val.name} description:{val.description} price:{val.price}</p>)}
    </div>)
}