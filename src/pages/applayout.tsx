import { Outlet } from "react-router";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import GotoDashboardbutton from "../components/Gotodashboardbutton";


export default function AppLayout() {
  return (
    <div style={{ display: "flex", flexDirection:"row", height: "100vh"}}>
      <Sidebar />
      <div style={{ display: "flex", flexDirection: "column", width: "100%", overflow: "auto" }}>
        <Header />
        <div style={{ padding: 16 }}>
          <Outlet />
          <div style={{ display: "flex", flexDirection: "column", width: "100%", overflow: "auto" }}>
            <GotoDashboardbutton />
           </div>
        </div>
      </div>
    </div>
  );
}


