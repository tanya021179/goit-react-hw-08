import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.nav}>
      <NavLink
        className={({ isActive }) => `${s.link} ${isActive ? s.active : ""}`}
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => `${s.link} ${isActive ? s.active : ""}`}
          to="/contacts"
        >
          Tasks
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
