import { useState } from "react";
import axios from "axios";
import CustomInput from "../../components/customInput";

export default function AddBooks() {
 const [Id , setId] = useState("");
 const [title , setTitle] = useState("");
 const [author , setAuthor] = useState("");
 const [price , setPrice] = useState("");
 const [available , setAvailable] = useState("");
 const [publisher_id , setPublisher_id] = useState("");
 const [error , setError] = useState("");

    const handlesubmit = (e:any) => {
         e.preventDefault();
         AddBooks();
    };

 const AddBooks = async () => {
    try{
        const response = await axios.post("http://localhost:3001/books", {
            data: {
                Id: Id,
                title: title,
                author: author,
                price: price,
                available: available,
                publisher_id: publisher_id
            },
        });
        console.log({ response });
        if (response.status === 201){
            console.log("Books Added Successfully");
        }
       } catch (error) {
        console.error(error);
       }
    };
    return (
        <div className="form-container">
            <h1>Add Books</h1>
            <form style={{ gap: 16, color: "blue" }} onSubmit={handlesubmit}>
                <CustomInput type="number" label="Id" setValue={setId}/>
                <CustomInput type="text" label="title" setValue={setTitle}/>
                <CustomInput type="text" label="author" setValue={setAuthor}/>
                <CustomInput  type="number" label="price" setValue={setPrice}/>
                <CustomInput type="number" label="available" setValue={setAvailable}/>
                <CustomInput type="number" label="publisher_id" setValue={setPublisher_id}/>
                {error && <p style={{ color: "red"}}>{error}</p>}
                <button type="submit">Add Books</button>
            </form>
        </div>
    )
};
