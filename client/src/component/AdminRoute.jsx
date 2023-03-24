import { UserContext } from "../context/userContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoute() {
  const { state } = useContext(UserContext);
  return state.isLogin === true && state.user.is_admin === true ? <Outlet /> : <Navigate to="/" />;
}
