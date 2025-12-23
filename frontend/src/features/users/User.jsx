import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaUserGraduate, FaEyeSlash } from "react-icons/fa";
import { selectUserById } from "../../features/users/usersApiSlice.js";
import { setSelectedUserId, clearSelectedUserId } from "../ui/uiSlice.js";

import "../../styles/tablesStyle.css";

const User = ({ userId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => selectUserById(state, userId));
  const selectedUserId = useSelector((state) => state.ui.selectedUserId);
  const isSelected = selectedUserId === userId;

  if (user) {
    return (
      <tr className="table__row user">
        <td className={"table__cell"}>
          <button
            className="style__button"
            onClick={() =>
              dispatch(
                isSelected ? clearSelectedUserId() : setSelectedUserId(userId)
              )
            }
          >
            {isSelected ? (
              <FaEyeSlash className="faIcon__style" />
            ) : (
              <FaUserGraduate className="faIcon__style" />
            )}
          </button>
        </td>
        <td className={"table__cell"}>{user.firstName}</td>
        <td className={"table__cell"}>{user.lastName}</td>
        <td className={"table__cell"}>{user.email}</td>
        <td className={"table__cell"}>{user.role}</td>
      </tr>
    );
  } else return null;
};

const memoizedUser = memo(User);

export default memoizedUser;
