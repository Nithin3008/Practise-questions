export default function Q5({ data1 }) {
    return (<div>
        {data1.map((data) => <p style={{ backgroundColor: data.isCompleted ? "green" : "red" }}>id:{data.id} title:{data.title} description:{data.description} isCompleted:{data.isCompleted}</p>)}
    </div>)
}