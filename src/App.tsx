import "./App.css";
import {Route, Routes } from "react-router";
import AppLayout from "./pages/applayout";
import Books from "./pages/books";
import Publisher from "./pages/publisher";
import AddBooks from "./pages/books/addbooks";


 function App() {
  return (

    <Routes>
      <Route element={<AppLayout/>}>
        {/* <Route  path= "/" element ={< Books />} /> */}
        <Route  path= "/books" element ={< Books />} />
        <Route path="/books/add" element ={< AddBooks/>}/>
        <Route  path= "/publishers" element ={< Publisher />} />
        <Route path="*" element={<p>Page Not Found!!!!!</p>} />
      </Route>
    </Routes>
  );
 }
export default App;
