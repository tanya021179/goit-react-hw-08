import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();

  const userName = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        toast.success(`Successfully logged out!`);
      })
      .catch(() => toast.error("Invalid data"));
  };

  return (
    <div>
      {userName ? (
        <p className={s.text}>Hello {userName.email}</p>
      ) : (
        <p>Guest</p>
      )}
      <button className={s.btnOut} onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
