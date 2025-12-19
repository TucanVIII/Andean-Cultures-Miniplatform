import UsersList from "../../features/admin/UsersList.jsx";
import TableUserProgress from "../../features/admin/TableUserProgress.jsx";
import QuestionsList from "../../features/admin/QuestionsList.jsx";

const AdministratorSection = () => {
  return (
    <div className="tables-users__container">
      <UsersList />
      <TableUserProgress />
      <QuestionsList />
    </div>
  );
};

export default AdministratorSection;
