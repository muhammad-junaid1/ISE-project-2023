import "../styles/button.css";

const Button = ({children, type, style, onClick, fullWidth}) => {
    return (
        <button onClick={onClick} style={style} className={`btn btn-${type}${fullWidth ? " full-width" : ""}`}>{children}</button>
    );
}

export default Button;