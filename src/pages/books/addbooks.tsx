import { useState } from "react";
import axios from "axios";
import CustomInput from "../../components/customInput";

enum Available {
    True = "Yes",
    False = "No",
}
export default function AddBooks() {
 const [Id , setId] = useState("");
 const [title , setTitle] = useState("");
 const [author , setAuthor] = useState("");
 const [price , setPrice] = useState("");
 const [available , setAvailable] = useState<Available>(Available.False) // Ensures it can be empty string initially!
 const [publisher_id , setPublisher_id] = useState("");
 const [error , setError] = useState("");

    const handlesubmit = (e:any) => {
         e.preventDefault();
         AddBooks();
    };

 const AddBooks = async () => {
    try{
        const response = await axios.post("http://localhost:3000/books", {
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
            console.log("Books added Successfully");
        }
       } catch (error) {
        console.error(error);
       }
    };
    return (
        <div className="form-container">
            <h1>Add Books here!</h1>
            <form style={{ gap: 16, color: "green" }} onSubmit={handlesubmit}>
                <CustomInput type="number" label="Id" setValue={setId}/>
                <CustomInput type="text" label="title" setValue={setTitle}/>
                <CustomInput type="text" label="author" setValue={setAuthor}/>
                <CustomInput  type="number" label="price" setValue={setPrice}/>
                <CustomInput type="number" label="publisher_id" setValue={setPublisher_id}/>
                <div>
                   <p>Is It Available?</p>
                       <div style={{ display: "flex", gap: "16px" }}>
                         <div className="radio-input">
                            <CustomInput
                             type="radio"
                            label="False"
                            setValue={() => setAvailable(Available.False)}
                            checked={Available.False === available}
                            />
                           <CustomInput
                           type="radio"
                           label="True"
                           setValue={() => setAvailable(Available.True)}
                          checked={Available.True === available}
                          />
                        </div>
                    </div>
                </div>
                   {error && <p style={{ color: "red"}}>{error}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};
