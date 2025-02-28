import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        className={({ isActive }) => `${s.link} ${isActive ? s.active : ""}`}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => `${s.link} ${isActive ? s.active : ""}`}
        to="/contacts"
      >
        Tasks
      </NavLink>
    </nav>
  );
};

export default Navigation;
