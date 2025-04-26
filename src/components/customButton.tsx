interface CustomButtonProps {
    label: string;
    onClick?: () => void;
    style?: object;
    type?: "button" | "submit" | "reset"
    className?: string;
  }

  const CustomButton = ({ label, onClick, style, className,
     type="button"}: CustomButtonProps) => {
    return (
      <button type={type} style={style}
       onClick={onClick} className= {className}>{label}</button>
    );
  }

  export default CustomButton;