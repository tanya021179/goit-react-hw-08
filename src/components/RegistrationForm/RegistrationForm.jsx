// import { Field, Form, Formik } from "formik";
// import s from "./RegistrationForm.module.css";
// import { useDispatch } from "react-redux";
// import { register } from "../../redux/auth/operations";
// import { Link, useNavigate } from "react-router-dom";
// import * as Yup from "yup";

// const RegistrationForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const initialValues = {
//     name: "",
//     email: "",
//     password: "",
//   };

//   const validationForm = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     password: Yup.string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//   });

//   const handleSubmit = (values, options) => {
//     console.log(values);
//     dispatch(register(values))
//       .then(() => {
//         navigate("/contacts");
//       })
//       .catch((error) => {
//         console.error("Registration error", error);
//       });
//     options.resetForm();
//   };

//   return (
//     <div className={s.formWraper}>
//       <Formik
//         initialValues={initialValues}
//         validationForm={validationForm}
//         onSubmit={handleSubmit}
//       >
//         <Form className={s.form}>
//           <label>
//             <span>Name</span>
//             <Field name="name" />
//           </label>
//           <label>
//             <span>Email</span>
//             <Field name="email" />
//           </label>
//           <label>
//             <span>Password</span>
//             <Field name="password" type="password" />
//           </label>
//           <button type="submit">Register</button>

//           <p className={s.text}>
//             You already have account? <Link to="/login">Get it!</Link>
//           </p>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default RegistrationForm;

import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  // Схема валидации
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, options) => {
    console.log("Submitted values:", values);
    dispatch(register(values))
      .then(() => {
        navigate("/contacts");
      })
      .catch((error) => {
        console.error("Registration error", error);
      });
    options.resetForm();
  };

  return (
    <div className={s.formWraper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={s.form}>
            <label>
              <span>Name</span>
              <Field name="name" />
              <ErrorMessage name="name" component="div" className={s.error} />
            </label>
            <label>
              <span>Email</span>
              <Field name="email" />
              <ErrorMessage name="email" component="div" className={s.error} />
            </label>
            <label>
              <span>Password</span>
              <Field name="password" type="password" />
              <ErrorMessage
                name="password"
                component="div"
                className={s.error}
              />
            </label>
            <button type="submit">Register</button>

            <p className={s.text}>
              You already have account? <Link to="/login">Get it!</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
