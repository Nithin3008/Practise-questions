import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch/fakeFetch4";
export default function Ff4()
{
    const [outData1,setOutput]=useState([])
    const [companyFil,setCompany]=useState("All")
    useEffect(()=>{
        const url=async ()=>
        {
            const recData=await fakeFetch('https://example.com/api/users')
            console.log(recData.data)
            setOutput(recData.data)

        }
        url()
    },[])
    function companyHandler(event)
    {
        console.log(event.target.value)
        setCompany(event.target.value)
    }
    const outputData=companyFil==="All"?outData1:outData1.filter((val)=>val.company==companyFil)
    return(<div>
        <h1>Users</h1>
        company Filter:<select onChange={companyHandler}>
            <option value="All">All</option>
            <option value="ABC Inc">ABC INC</option>
            <option value="XYZ Corp">XYZ CORP</option>
            <option value="ACME Corp">ACME CORP</option>
           
        </select>
        {outputData.map((val)=><div>{val.name} {val.email}  {val.website}  {val.company}</div>)}
    </div>)
}