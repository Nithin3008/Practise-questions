// import { useState } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "./Context/DataContext";
import { useContext } from "react";
import { FavContext } from "./Context/FavContext";
import { ReadContext } from "./Context/ReadContext";
export function AllBooks1()
{
    const {bookData}=useContext(BookContext)
    const {AddToFav}=useContext(FavContext)
    const {AddToRead}=useContext(ReadContext)
    // console.log(bookData)
    return(
        <div>
        <nav>
            
                <Link to="/FavBook1">Favourite Books</Link>
                <Link to="/ReadBook1">Read Books</Link>
                <Link to="/Profile1">Profile</Link>
    
        </nav>
        <div style={{display:"flex",justifyContent:"space-around",flexWrap: "wrap"}}>
            {bookData.map((val)=><div >
                <div >
                <img style={{height:"300px"}} src={val.image}></img>
                </div>
                <div>
                    <p>Title: {val.title}</p>
                    <p>Author: {val.author}</p>
                    <p>Publisher: {val.publisher}</p>
                    <button onClick={(e)=>AddToFav(val,e)}>Add to Favourite's</button>
                    <button onClick={(e)=>AddToRead(val,e)}>Mark As Read</button>
                </div>

            </div>)}
        </div>
        </div>
    )
}