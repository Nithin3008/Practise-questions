import { useEffect, useState } from "react"
import { fakeFetch } from "./fakeFetch/fakeFetch8"

export default function FF8()
{
    const [userDetails,setUser]=useState({})
    useEffect(()=>
    {
        const url=async ()=>{
            const data1=await fakeFetch('https://example.com/api/profile')
            console.log(data1.data.profiles)
            setUser(data1.data.profiles)
        }
        url()
    },[])
    function changeName()
    {
        const newUser1={...userDetails}
        newUser1.name="emily"
        console.log(newUser1,userDetails)
        setUser(newUser1)
    }
    console.log("adsd")
    return(<div>
        <h1>User Details</h1>
        <div>
           <p> Name:{userDetails.name}               </p>
           <p> Age:{userDetails.age}</p>
           <p> Gender:{userDetails.gender}</p>
           <p> Email:{userDetails.email}</p>
           <p> Occupation:{userDetails.occupiation}</p>
        </div>
        <button onClick={()=>changeName()}>Update Name</button>
    </div>)
}