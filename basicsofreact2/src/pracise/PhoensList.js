import { Pd1 } from "../App"
export default function ph1({ obj1 }) {
    console.log()
    return (
        <ul>
            {obj1.map((val) => <Pd1 arg1={val.id} arg2={val.name} arg3={val.price}></Pd1>)}
        </ul>
    )

}