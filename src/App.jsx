import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { fetchContacts } from "./redux/contacts/operations";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./components/Layout";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="register" element={<RegistrationPage />} />
      <Route
        path="login"
        element={
          <RestrictedRoute compononent={<LoginPage />} redirectTo="/contacts" />
        }
      />
    </Routes>
  );
};

export default App;
