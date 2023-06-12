import { useContext } from "react";
import { ReducerContext } from "../Reducers/Reducer";
export function Spam1()
{const {dispatcher,  state } = useContext(ReducerContext);
    console.log(state.spam)
    function moveToInbox(id)
    {
        dispatcher({type:"spamToInbox",payload:id})
    }
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Spam</h1>
            <div>
                <p style={{visibility:state.spam.length===0?"visible":"hidden"}}>No Data..</p>
            </div>
            <div style={{maxWidth:"1000px",margin:" auto",}}>
                {state.spam.map((val)=>
                <div style={{backgroundColor:"#ff6600",borderRadius:"5px",padding:"10px 5px",marginBottom:"20px"}}>
                    <h1 style={{color:"white"}}>{val.subject}</h1>
                    <p>{val.content}</p>
                    <button style={{fontSize:"16px",color:"white", borderRadius:"2px", marginBottom:"10px",border:"0px",backgroundColor:"#9A33FF",padding:"10px 10px"}} onClick={()=>moveToInbox(val.mId)}>Move to Inbox</button>
                    </div>)}
            </div>




        </div>
    )
}