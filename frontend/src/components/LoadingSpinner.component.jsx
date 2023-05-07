import "../styles/loading-spinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner">
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
