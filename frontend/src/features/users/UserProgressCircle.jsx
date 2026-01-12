import { CircularProgressbar } from "react-circular-progressbar";

const UserProgressCircle = ({ title, progress }) => {
  return (
    <div>
      <h3 className="progress__title">{title}</h3>
      <CircularProgressbar
        value={progress.percent}
        text={`${progress.percent}%`}
      />
      <h3 className="note__title">Nota: {progress.grade ?? "-"}</h3>
    </div>
  );
};

export default UserProgressCircle;
