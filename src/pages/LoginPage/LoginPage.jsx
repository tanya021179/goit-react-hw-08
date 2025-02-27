import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={s.formWraper}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
