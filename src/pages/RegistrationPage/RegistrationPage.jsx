import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import s from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div className={s.formWraper}>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
