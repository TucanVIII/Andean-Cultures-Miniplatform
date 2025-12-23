import UsersList from "../../features/admin/UsersList.jsx";
import TableUserProgress from "../../features/admin/TableUserProgress.jsx";
import EditSection from "../../features/admin/EditSection.jsx";

const AdministratorSection = () => {
  return (
    <div className="tables-users__container">
      <UsersList />
      <TableUserProgress />
      <EditSection />
    </div>
  );
};

export default AdministratorSection;
