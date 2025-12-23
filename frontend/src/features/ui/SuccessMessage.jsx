import { FaTimesCircle } from "react-icons/fa";

const SuccessMessage = ({ message }) => {
  return (
    <div className="success">
      <FaTimesCircle />
      {message}
    </div>
  );
};

export default SuccessMessage;
