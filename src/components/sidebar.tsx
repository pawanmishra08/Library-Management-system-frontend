import {BookAIcon, BookmarkMinus, BookOpen, LogInIcon,LogOutIcon,UserCircle, UserPlus } from "lucide-react";
import { NavLink } from "react-router";

export default function Sidebar() {
    return(
        <div className="sidebar" style={{ backgroundColor: "rgb(12, 190, 36)"}}>
            <div style={{ display: "flex", flexDirection: "column", height:80, alignItems: "center", justifyContent: "center" }}>
                <img src = "https://media.licdn.com/dms/image/D4E12AQHEOXjA5g24bw/article-cover_image-shrink_720_1280/0/1693422613600?e=2147483647&v=beta&t=24kITRf_tymcYzUlkshIgNKUYfOZ4o2YyEZO-JooicI"
                height={250} width= "100%" />
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