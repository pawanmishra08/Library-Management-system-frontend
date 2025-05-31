import {BookAIcon, BookmarkMinus, BookOpen, LogInIcon,LogOutIcon,UserCircle, UserPlus } from "lucide-react";
import { NavLink } from "react-router";

export default function Sidebar() {
    return(
        <div className="sidebar" style={{ backgroundColor: "rgb(12, 190, 36)"}}>
            <div style={{ display: "flex", flexDirection: "column", height:80, alignItems: "center", justifyContent: "center" }}>
                <p style={{
                      fontSize: "60px",
                      fontWeight: "bold",
                      letterSpacing: "1px",
                      color: "#fff",
                     margin: 0
                    }}>
                   LMS
                </p>

            </div>
            <ul>
                <li>
                    <NavLink to = "/books" className={({ isActive }) => isActive ? "active-item" : ""}>
                    <BookOpen/>
                    Books
                    </NavLink>
                </li>
                <li>
                    <NavLink to = "/publishers" className={({ isActive }) => isActive ? "active-item" : ""}>
                    <BookAIcon/>
                    Publishers
                    </NavLink>
                </li>
                <li>
                    <NavLink to = "/members" className={({ isActive }) => isActive ? "active-item" : ""}>
                    <UserCircle/>
                    Members
                    </NavLink>
                </li>
                <li>
                    <NavLink to = "/users" className={({ isActive }) => isActive ? "active-item" : ""}>
                    <UserPlus/>
                    Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to = "/borrowers" className={({ isActive }) => isActive ? "active-item" : ""}>
                    <BookmarkMinus/>
                    Borrowers
                    </NavLink>
                </li>
                <li>
                    <NavLink to = "/login" className={({ isActive }) => isActive ? "active-item" : ""}>
                    <LogInIcon/>
                    Login
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to = "/logout" className={({ isActive }) => isActive ? "active-item" : ""}>
                    <LogOutIcon/>
                    Logout
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}