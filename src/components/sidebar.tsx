import { BookAIcon, BookOpen } from "lucide-react";
import { NavLink } from "react-router";

export default function Sidebar() {
    return(
        <div className="sidebar" style={{ backgroundColor: "blue"}}>
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
                    publishers
                    </NavLink>
                </li>
            </ul>

        </div>
    )
}