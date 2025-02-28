import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={s.div}>
      <NavLink className={s.link} to="/register">
        Register
      </NavLink>
      <NavLink className={s.link} to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
