import { useState } from "react";
import axios from "axios";
import CustomInput from "../../components/customInput";

export default function AddMember() {
const [id, setId] = useState("");
const [name, setName] = useState("");
const [address, setAddress] = useState("");
const [member_expiry_date, setMember_expiry_date] = useState("");
const [ error, setError] = useState("");

const handlesubmit = (e: any) => {
    e.preventDefault();
    AddMember();
};

const AddMember = async () => {
    try {
        const response = await axios.post("http://localhost:3000/members",{
            data: {
                id: id,
                name: name,
                address: address,
                member_expiry_date: member_expiry_date,
            },
        });
        console.log({ response});
        if(response.status ===201){
            console.log("member added successfully!");
        }
    } catch (error) {
        console.error(error);
    }
};
  return (
    <div className=" form-container">
        <h1>Add members here!</h1>
        <form style={{ gap: 16, color: "green" }} onSubmit={handlesubmit}>
            <CustomInput type="number" label ="id" setValue={setId}/>
            <CustomInput type="text" label="name" setValue={setName}/>
            <CustomInput type="text" label ="address" setValue={setAddress}/>
            <CustomInput type="date" label="member_expiry_date" setValue={setMember_expiry_date}/>
            {error && <p style={{ color:"red" }}>{error}</p>}
            <button type="submit">Submit</button>
        </form>
    </div>
  )
};