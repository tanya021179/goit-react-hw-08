import { NavLink } from "react-router-dom";
import s from "./AppBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <header>
      <nav className={s.nav}>
        <NavLink className={s.link} to="/">
          Home
        </NavLink>
        <NavLink className={s.link} to="/contacts">
          Tasks
        </NavLink>
        {user.name && <h3>{user.email}</h3>}
        {!isLoggedIn && (
          <>
            {""}
            <NavLink className={s.link} to="/register">
              Register
            </NavLink>
            <NavLink className={s.link} to="/login">
              Login
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <button onClick={() => dispatch(logout())}>Log Out</button>
        )}
      </nav>
    </header>
  );
};

export default AppBar;
