import { useContext } from "react";
import { BookContext } from "./booksData";
import { Link } from "react-router-dom";
export default function F2()
{
    const {bookData,addtoFav}=useContext(BookContext)

    return(<div>
        <Link style={{textAlign:"left"}} to="/Fav">Fav</Link> || 
        <Link style={{textAlign:"left"}} to="/Read">Read</Link>  ||
        <Link style={{textAlign:"left"}} to="/Profile">Profile</Link> 
        <div className="Main-Box" style={{display:"flex"}}>
            {bookData.map((val)=>
            <div className="child-box">
                <img src={val.image} style={{height:"250px",width:"250px"}}></img>
                <p>Title: {val.title}</p>
                <p>Author: {val.author}</p>
                <button onClick={()=>addtoFav(val.id)}>Add to Fav</button><br></br>
                <button >Mark as Read</button>
            </div>)}
        </div>
    </div>)
}