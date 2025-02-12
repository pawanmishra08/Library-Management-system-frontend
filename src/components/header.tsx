import { Bell, Search, UserCircle } from "lucide-react";
import { useState } from "react";
import "./header.css";

const Header = () => {
  const [isclicked , setIsClicked] = useState(false);

    const handleBellClicked = () =>{
      setIsClicked(!isclicked);
    };

    return (
    <div className="header-container">
      <div className="search-container">
        <Search width={16} height={16} className="icon search" />
        <input placeholder="type here..." />
      </div>
      {/* <div className="user-section">
        </div> */}
      <div>

      <Bell
       className= {'icon bell  ${"isclicked" : ""}'}
       onClick={  handleBellClicked }  style={{ marginRight: "10px" }}
      />

     <UserCircle className="icon"/>
       <span className="user-text"  style={{ color: "blue" }}>Pawan Mishra</span>

      </div>
    </div>
  );
};

export default Header;