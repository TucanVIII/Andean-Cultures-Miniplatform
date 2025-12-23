import { useSelector } from "react-redux";
import { selectUserById } from "../../features/users/usersApiSlice.js";
import { FaCheck,FaTimes } from "react-icons/fa";

import Loader from "../ui/Loader.jsx";

import "../../styles/tablesStyle.css";

const TableUserProgress = () => {

  const selectedUserId = useSelector(
    (state) => state.ui.selectedUserId
  );

  const user = useSelector((state) =>
    selectedUserId ? selectUserById(state, selectedUserId) : null
  );

  if (!selectedUserId) {
    return <p className="student-progress__title">Para ver detalles sobre el progreso individual selecciona un usuario</p>;
  }

  if (!user) {
    return <Loader />;
  }

  return  (
    <div className="table--sections__container">

      <div className="student-progress__container">
        <h3>Progreso de {user.firstName}</h3>
      </div>

      <table className="table-sections">
        <thead className="table__thead">
          <tr>
            <th scope="col" className="table__th">
              Sección
            </th>
            <th scope="col" className="table__th">
              Teoría
            </th>
            <th scope="col" className="table__th">
              Video
            </th>
            <th scope="col" className="table__th">
              Quiz
            </th>
          </tr>
        </thead>
        <tbody className="table__tbody">
          {
            user.sections.map(section =>  
            <tr key={section.sectionId.$oid}>
              <td>{section.sectionName}</td>
              <td>{section.theoryCompleted ? <FaCheck className="faIcon__style-check"/> : <FaTimes className="faIcon__style-cross"/>}</td>
              <td>{section.videoCompleted ? <FaCheck className="faIcon__style-check"/> : <FaTimes className="faIcon__style-cross"/>}</td>
              <td>{section.quiz.status}</td>
            </tr>
          )}
        </tbody>
      </table>
      
    </div>
  );
};

export default TableUserProgress;
