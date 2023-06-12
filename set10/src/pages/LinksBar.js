import { NavLink } from "react-router-dom";
export default function Nav() {
    return (
        <div>
            <div className="LeftBox">
                <ul>
                    <li>
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? "orangered" : "black",
                                backgroundColor: isActive ? "white" : "white",
                                padding:"10px 10px",
                                marginTop:"40px",
                                textDecoration:"none",
                                fontSize:"25px"
                                
                            })}
                            to={"/"}
                        >
                            Inbox
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? "orangered" : "black",
                                backgroundColor: isActive ? "white" : "white",
                                padding:"10px 10px",
                                marginTop:"40px",
                                textDecoration:"none",
                                fontSize:"25px"
                            })}
                            to={"/Spam1"}
                        >
                            Spam
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            style={({ isActive }) => ({
                                color: isActive ? "orangered" : "black",
                                backgroundColor: isActive ? "white" : "white",
                                padding:"10px 10px",
                                marginTop:"40px",
                                textDecoration:"none",
                                fontSize:"25px"
                            })}
                            to={"/Trash1"}
                        >
                            Trash
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
