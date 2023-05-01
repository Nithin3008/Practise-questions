export default function emp({ emp }) {
    return (
        <div>
            <ul>
                {emp.map((val) => <li style={{ border: val.workExperience > 5 ? "4px solid orange" : "" }}>{val.name}:{val.workExperience}</li>)}
            </ul>
        </div>
    )
}