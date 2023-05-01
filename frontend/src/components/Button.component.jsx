import "../styles/button.css";

const Button = ({children, type}) => {
    return (
        <button className={`btn-${type}`}>{children}</button>
    );
}

export default Button;