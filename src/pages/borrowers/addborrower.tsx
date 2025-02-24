import axios from "axios";
import { useState } from "react";
import CustomInput from "../../components/customInput";

export default function AddBorrower() {
    const [ id, setId] = useState("");
    const [ book_name, setBook_name] = useState("");
    const [ book_id, setBook_id] = useState("");
    const [ issue_date, setIssue_date] = useState("");
    const [ due_date, setDue_date] = useState("");
    const [ return_date, setReturn_date] = useState("");
    const [ member_id, setMember_id] = useState("");
    const [error ,setError] = useState("");

    const handlesubmit = (e: any) => {
        e.preventDefault();
        Addborrowers();
    }

    const Addborrowers = async () => {
        try {
            const response = await axios.post("http://localhost:3000/borrowers", {
                data: {
                    id: id,
                    book_name: book_name,
                    book_id: book_id,
                    issue_date: issue_date,
                    due_date: due_date,
                    return_date: return_date,
                    member_id: member_id
                },
            });
            console.log({ response});
            if (response.status === 201) {
                console.log("publishers added successfully");
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="form-container">
            <h1>Add Borrowers here!</h1>
            <form style={{ gap: 16, color: "green"}} onSubmit={handlesubmit}>
                <CustomInput type="number" label="Id" setValue={setId}/>
                <CustomInput type="text" label="name" setValue={setBook_name}/>
                <CustomInput type="number" label="book_id" setValue={setBook_id}/>
                <CustomInput type="date" label="Issue_date" setValue={setIssue_date}/>
                <CustomInput type="date" label="Return_date" setValue={setReturn_date}/>
                <CustomInput type="date" label="Due_date" setValue={setDue_date}/>
                <CustomInput type="number" label="Member_id" setValue={setMember_id}/>
                {error && <p style={{ color: "red"}}>{error}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};