import { fakeFetch } from "./fakeFetch";
import {createContext, useEffect, useState } from "react";
export const TodoContext=createContext()
export function TodoProvider({children})
{
    let [todoList,setTodo]=useState([])
    useEffect(()=>
    {
        let url=async()=>
        {
            const recData=await fakeFetch('https://example.com/api/todos')
            console.log(recData.data.todos)
            setTodo(recData.data.todos)
        }
        url()
    },[])
    function markDoneTodo(values)
    {
        const x=todoList.filter((val)=>
        {
            if(val.id===values)
            {
                val.isCompleted=true
                return val
            }
            return val
        })
        todoList=[...x]
        setTodo(todoList)
    }
    return(
        <TodoContext.Provider value={{todoList,markDoneTodo}}>
            {children}
        </TodoContext.Provider>
    )
}