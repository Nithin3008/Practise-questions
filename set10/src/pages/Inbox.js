import { useContext} from "react";
import { Link } from "react-router-dom";
import { ReducerContext } from "../Reducers/Reducer";


import "./Home.css";

export function Home1() {
  const { dispatcher, state } = useContext(ReducerContext);
  const {inbox,showUnread,showStared}=state
  let displayObj=[...inbox]
  if(showUnread)
  {
    displayObj=inbox.filter((val)=>val.unread===true)
  }
  if(showStared)
  {
    displayObj=inbox.filter((val)=>val.isStarred===true)
  }
  function unreadMail(event)
  {
    const x=event.target.checked
    dispatcher({type:"unread-mails",payload:x})
  }
  function unstarredMail(event)
  {
    const x=event.target.checked
    dispatcher({type:"stared-mails",payload:x})
  }
  function markRead(id)
  {
    dispatcher({type:"markasRead",payload:id})
  }
  function markStar(id)
  {
    dispatcher({type:"markStarred",payload:id})
  }
  function moveToSpam(id)
  {
    dispatcher({type:"sentToSpam",payload:id})
  }
  function moveToTrash(id)
  {
    dispatcher({type:"sentToTrash",payload:id})
  }




  const unreadNum = displayObj.reduce((acc, val) => {
    if (val.unread == true) {
      acc = acc + 1;
      return acc;
    }
    return acc;
  }, 0);
  return (
    <div>
      <h1>Mail-Box</h1>
      <div className="MainBox" style={{ display: "flex" }}>
        <div className="RightBox">
          <div>
            <div className="headerBox">
              <p className="fil">Filters</p>
              <input
                onClick={unreadMail}
                className="inputTag"
                type="checkbox"
              ></input>
              Show unread emails
              <input
                onClick={unstarredMail}
                className="inputTag"
                type="checkbox"
              ></input>
              Show starred emails
            </div>
            <p>Unread: {unreadNum}</p>
            <div className="mailBox">
              {displayObj.map((val) => (
                <div className="mails" style={{backgroundColor:val.unread?"  #cccccc":"#f2f2f2"}}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h2>{val.subject}</h2>

                    <p onClick={()=>markStar(val.mId)}>
                      {val.isStarred ? "🌟" : "☆"}
                    </p>
                  </div>

                  <p>{val.content}</p>

                  <div className="btnBoxes">
                    <div className="detailsBox">
                      <Link className="links" to={`/Detail1/${val.mId}`}>
                        View Details
                      </Link>
                    </div>
                    <div className="otherBox">
                      <button
                      onClick={()=>moveToTrash(val.mId)}
                        style={{
                          backgroundColor: "#f2f2f2",
                          border: 0,
                          color: "red",
                          fontSize:"16px",
                          fontWeight:"600",
                          padding:"5px 5px",
                          borderRadius:"2px"
                    
                        }}
                      >
                        Delete
                      </button>
                      <button
                        onClick={()=>markRead(val.mId)}
                        style={{
                          backgroundColor: "#185464",
                          border: 0,
                          color: "#f0f0f2",
                          fontSize:"16px",
                          fontWeight:"600",
                          padding:"5px 5px",
                          borderRadius:"2px"  
                        }}
                      >
                        Mark as Read
                      </button>
                      <button
                      onClick={()=>moveToSpam(val.mId)}
                        style={{
                          backgroundColor: "white",
                          border: 0,
                          color: "green",
                          fontSize:"16px",
                          fontWeight:"600",
                          padding:"5px 5px",
                          borderRadius:"2px"  
                        }}
                      >
                        Report Spam
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
