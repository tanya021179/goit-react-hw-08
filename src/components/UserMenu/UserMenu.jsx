import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();

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
      <button className={s.btnOut} onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
