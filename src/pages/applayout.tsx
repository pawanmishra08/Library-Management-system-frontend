import { Outlet } from "react-router";
import Header from "../components/header";


export default function AppLayout() {
  return (
      <div style={{ display: "flex", flexDirection: "column", width: "100%", overflow: "auto" }}>
        <Header />
        <div style={{ padding: 16 }}>
          <Outlet />
        </div>
      </div>
  );
}


