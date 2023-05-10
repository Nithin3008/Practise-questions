import {fakeFetch} from "./Fakefetch/fakefetch1"
import {useState} from "react"
export default function Ff2()
{
    const [users1,setUser]=useState([])
    const userData=async()=>
    {
        const url= await fakeFetch('https://example.com/api/users/status')
        let users=url.data.users
        setUser(users)
        
    }
   
    // const url=fakeFetch('https://example.com/api/users/status')
    // const arr1=url.then((data)=>console.log(data.data.users))
    userData()
    return(<div>
        <h1>Online users data</h1>
        {users1.map((val)=><p style={{color:val.status=="Online"?"green":"red"}}>{val.name}</p>)}
    </div>)

}