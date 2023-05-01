// export default function add({ num1, num2 }) {
//     console.log(num1, num2)
//     return (
//         <div>
//             <h1>Hi maths</h1>
//             <p>FirstNumber:{num1}</p>
//             <p>SecondNUmber:{num2}</p>
//             <p>The Result is:{num1 + num2}</p>
//         </div>
//     )
// }
// the above process is if we doon use props
export default function add(props) {
    console.log(props.num1, props.num2)
    return (
        <div>
            <h1>Hi maths</h1>
            <p>FirstNumber:{props.num1}</p>
            <p>SecondNUmber:{props.num2}</p>
            <p>The Result is:{props.num1 + props.num2}</p>
        </div>
    )
}