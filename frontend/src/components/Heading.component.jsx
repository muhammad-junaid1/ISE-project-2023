const Heading = ({ children }) => {
  return (
    <h2
      style={{
        background: "white",
        padding: "5px 28px",
        color: "black",
        borderRadius: "2px 12px",
        width: "max-content",
        margin: "20px 0",
      }}
    >
      {children}
    </h2>
  );
};

export default Heading;
