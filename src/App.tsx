import "./App.css";
import {Route, Routes } from "react-router";
import AppLayout from "./pages/applayout";
import Books from "./pages/books";


 function App() {
  return (

    <Routes>
      <Route  path= "/" element ={< Books />} />
      <Route  path= "/books" element ={< Books />} />
      <Route path="*" element={<p>Page Not Found!!!!!</p>} />
      {/* <AppLayout/> */}

    </Routes>
  );
 }
export default App;
