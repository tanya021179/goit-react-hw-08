import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { deleteContact } from "../../redux/contacts/operations";
import {
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!contacts.length) {
    return <div>No contacts available.</div>;
  }

  return (
    <div>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <Contact
            name={name}
            number={number}
            nameIcon={<FaUser />}
            numberIcon={<FaPhoneAlt />}
          />
          <button
            className={s.button}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default ContactList;
