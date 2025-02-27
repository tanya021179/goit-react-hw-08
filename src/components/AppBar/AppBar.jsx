import s from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { useSelector } from "react-redux";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {/* {user.name && <h3>{user.email}</h3>} */}
    </header>
  );
};

export default AppBar;
