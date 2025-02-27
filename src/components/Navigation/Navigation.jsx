import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink className={s.link} to="/">
        Home
      </NavLink>
      <NavLink className={s.link} to="/contacts">
        Tasks
      </NavLink>
    </nav>
  );
};

export default Navigation;
