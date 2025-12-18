import UsersList from "../../features/admin/UsersList.jsx";
import TableUserProgress from "../../features/admin/TableUserProgress.jsx";

const AdministratorSection = () => {
  return (
    <div className="tables-users__container">
      <UsersList />
      <TableUserProgress />
    </div>
  );
};

export default AdministratorSection;
