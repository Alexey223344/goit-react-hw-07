import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectWaitLoadingUser,
} from "../../redux/contactsSlice";

import Loader from "../Loader/Loader";

const ContactList = () => {
  const foundContacts = useSelector(selectFilteredContacts);
  const isLoader = useSelector(selectWaitLoadingUser);

  return (
    <div>
      {isLoader && <Loader />}
      <ul className={s.list}>
        {foundContacts.map((user) => (
          <li className={s.item} key={user.id}>
            <Contact user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
