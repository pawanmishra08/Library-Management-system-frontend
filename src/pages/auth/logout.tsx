import React, { useContext,useState} from "react";
import { useNavigate } from "react-router";
import "../../components/logout.css";
import { api } from "../../api";
import CustomButton from "../../components/customButton";
import { AuthContext } from "../../context/authContext";

export default function Logout() {
  const [error, setError] = useState("");
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging out...");
    try {
        const response = await api.post("/auth/logout");
        console.log(response.data.token);
        logout();
        navigate("/login");
    } catch (error: any) {
        console.error(error);
        setError(error.response.data.message);
    }
}

return (
    <div className="form-container">
      <h1 className="header">Logout</h1>
      <form className="logout-form" onSubmit={handlesubmit}>
        {error && <p className="error">{error}</p>}
        <p className="warning-text">Are you sure to logout?</p>
        <div className="button-group">
          <CustomButton
          type="submit"
          label="Yes!✔"
          className = "yes-button"
          onClick={() => navigate("/login")}
          />
          <CustomButton
            type="button"
            label="No!✖"
            className="no-button"
            onClick={() => navigate("/")}
          />
        </div>
      </form>
    </div>
  );
}
