import { Field, Form, Formik } from "formik";
import s from "./LoginPage.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(login(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res.user.email}`);
        navigate("/contacts", { replace: true });
      })
      .catch(() => toast.error("Invalid data"));
    options.resetForm();
  };

  return (
    <div className={s.formWraper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label>
            <span>Email</span>
            <Field name="email" />
          </label>
          <label>
            <span>Password</span>
            <Field name="password" type="password" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
