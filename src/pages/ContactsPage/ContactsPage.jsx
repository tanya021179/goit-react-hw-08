import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);
  return (
    <div>
      <h1>Phonebook</h1>
      {isLoggedIn && <ContactForm />}
      {isLoggedIn && <SearchBox />}
      {isLoggedIn && <ContactList />}
      {!isLoggedIn && <p>Please log in to see your contacts.</p>}
    </div>
  );
};

export default ContactsPage;
