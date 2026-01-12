import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/authSlice.js";
import { jwtDecode } from "jwt-decode";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);

  if (!token) return { userId: null,userName: "", role: [], isAdmin: false };

  let decoded = null;
  try {
    decoded = jwtDecode(token);
  } catch (err) {
    return { userId: null,userName: "", role: [], isAdmin: false };
  }

  const userId = decoded?.UserInfo.id ?? null;
  const role = decoded?.UserInfo?.role ?? decoded?.role ?? [];
  const roles = role ? (Array.isArray(role) ? role : [role]) : [];
  const isAdmin = roles.includes("Admin");

  /* Testing user jwt */
  //console.log("User Id", userId);
  //console.log("auth token:", token);
  //console.log("decoded:", decoded);
  //console.log("roles:", roles, "isAdmin:", isAdmin);

  return { userId, roles, isAdmin };
};

export default useAuth;
