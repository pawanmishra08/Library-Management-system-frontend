import axios from "axios";
import { useState } from "react";
import CustomInput from "../../components/customInput";


export default function AddPublisher() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [ address, setAdress] = useState("");
    const [error ,setError] = useState("");

    const handlesubmit = (e: any) => {
        e.preventDefault();
        Addpublishers();
    }

    const Addpublishers = async () => {
        try {
            const response = await axios.post("http://localhost:3000/publishers", {
                data: {
                    id: id,
                    name: name,
                    address: address,
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
            <h1>Add Publishers here!</h1>
            <form style={{ gap: 16, color: "green"}} onSubmit={handlesubmit}>
                <CustomInput type="number" label="id" setValue={setId}/>
                <CustomInput type="text" label="name" setValue={setName}/>
                <CustomInput type="text" label="address" setValue={setAdress}/>
                {error && <p style={{ color: "red"}}>{error}</p>}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};