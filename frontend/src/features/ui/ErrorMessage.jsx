import { FaCheckCircle } from "react-icons/fa";

const ErrorMessage = ({ message }) => {
  return (
    <div className="error">
      <FaCheckCircle />
      {message}
    </div>
  );
};

export default ErrorMessage;
