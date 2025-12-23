import User from "../users/User.jsx";
import Loader from "../ui/Loader.jsx";
import { useGetAllUsersQuery } from "../../features/users/usersApiSlice.js";
import "../../styles/tablesStyle.css";

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllUsersQuery(undefined, {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountArgChange: true,
  });

  let content;
  if (isLoading) {
    content = <Loader />;
  }

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (error) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = users;
    const tableContent = ids?.length
      ? ids.map((userId) => <User key={userId} userId={userId} />)
      : null;

    content = (
      <div className="table--users__container">
        <h2>Lista de usuarios registrados</h2>
        <table className="table table--users">
          <thead className="table__thead">
            <tr>
              <th scope="col" className="table__th user__username">
                Progreso
              </th>
              <th scope="col" className="table__th user__roles">
                Nombre
              </th>
              <th scope="col" className="table__th user__edit">
                Apellidos
              </th>
              <th scope="col" className="table__th user__roles">
                Email
              </th>
              <th scope="col" className="table__th user__edit">
                Rol
              </th>
            </tr>
          </thead>
          <tbody className="table__tbody">{tableContent}</tbody>
        </table>
      </div>
    );
  }
  return content;
};

export default UsersList;
