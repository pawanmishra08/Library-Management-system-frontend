import { useNavigate } from "react-router-dom";

function GoToDashboardButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/books");
  };

  return (
    <button
      onClick={handleClick}
    >
      Go to Dashboard
    </button>
  );
}

export default GoToDashboardButton;
