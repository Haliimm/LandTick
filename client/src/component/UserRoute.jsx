import { UserContext } from "../context/userContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function UserRoute() {
  const { state } = useContext(UserContext);
  return state.isLogin === true && state.user.is_admin === false ? <Outlet /> : <Navigate to="/" />;
}
