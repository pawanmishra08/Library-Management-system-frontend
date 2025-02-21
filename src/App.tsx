import "./App.css";
import {Navigate, Route, Routes } from "react-router";
import AppLayout from "./pages/applayout";
import Books from "./pages/books";
import Publisher from "./pages/publisher";
import AddBooks from "./pages/books/addbooks";
import AddPublishers from "./pages/publisher/addpublisher";
import Members from "./pages/member";
import { useAuth } from "./context/authContext";
import Login from "./pages/auth/login";

 // redirects to login page if the user is not authenticated
 const ProtectedRoutes = () => {
  const token = useAuth();
  return !!token ? <AppLayout /> : <Navigate to={"/login"} />;
 }
 function App() {
  return (

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoutes />} >
       <Route index path="/" element={<Books />} />
        <Route  index path= "/books" element ={< Books />} />
        <Route  path="/books/add" element ={< AddBooks/>}/>
        <Route  path= "/publishers" element ={< Publisher />} />
        <Route  path="/publishers/add" element ={<AddPublishers/>}/>
        <Route  path= "/members" element ={< Members/>} />
        </Route>
    </Routes>
  );
 }
export default App;
