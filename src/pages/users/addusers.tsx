import { useState } from "react";
import axios from "axios";
import CustomInput from "../../components/customInput";

export default function AddUsers() {
 const [Id , setId] = useState("");
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [mobile, setMobile] = useState("");
 const [book_id, setBook_id] = useState("");
 const [member_id, setMember_id] = useState("");
 const [password, setPassword] = useState("");
 const [error , setError] = useState("");

    const handlesubmit = (e:any) => {
         e.preventDefault();
         AddUsers();
    };

 const AddUsers = async () => {
    try{
        const response = await axios.post("http://localhost:3000/users", {
            data: {
                Id: Id,
                Name: name,
                Email: email,
                Mobile: mobile,
                Book_id: book_id,
                Member_id: member_id,
                Password: password,
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
            <h1>Add Users here!</h1>
            <form style={{ gap: 16, color: "green" }} onSubmit={handlesubmit}>
                <CustomInput type="number" label="Id" setValue={setId}/>
                <CustomInput type="text" label="Name" setValue={setName}/>
                <CustomInput type="text" label="Email" setValue={setEmail}/>
                <CustomInput type="number" label="Mobile" setValue={setMobile}/>
                <CustomInput type="number" label="Book_id" setValue={setBook_id}/>
                <CustomInput type="number" label="Member_id" setValue={setMember_id}/>
                <CustomInput type="text" label="Password" setValue={setPassword}/>
                   {error && <p style={{ color: "red"}}>{error}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};
