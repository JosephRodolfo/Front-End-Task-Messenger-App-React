import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { useAuth } from "./AuthProvider";

export const Navigation = () => {
  const { onLogout, token } = useAuth();

  const logout = async () => {
    startLogout(token, onLogout);
  };

  return (
    <nav className="navigation">
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      {token && (
        <button type="button" onClick={logout}>
          Sign Out
        </button>
      )}
    </nav>
  );
};
