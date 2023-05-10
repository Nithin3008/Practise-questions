import {useEffect, useState} from "react"
import { fakeFetch } from "./fakeFetch/fakeFetch10"

export default function FF10()
{
    const [userData,setUser]=useState({})
    const[disable1,setDisable]=useState(false)
    useEffect(()=>{
        const url=async ()=>{
            const data1=await fakeFetch('https://example.com/api/profile')
            console.log(data1.data.profile)
            setUser(data1.data.profile)
        }
        url()
    },[])
    function increaseFollowers()
    {
        const newUser={...userData}
        newUser.followers=newUser.followers+1
        setUser(newUser)
        setDisable(true)
    }
    return(<div>
        <div>
            <h1>{userData.name}</h1>
<p>Age: {userData.age}</p>
<p>Gender: {userData.gender}</p>
<p>email:{userData.email}</p>
<p>occupation: {userData.occupation}</p>
<p>followers: {userData.followers}</p>
<p>followedBy:{userData.followedBy}</p>

        </div>
        <button disabled={disable1} onClick={()=>increaseFollowers()}>Follow</button>
    </div>)
}