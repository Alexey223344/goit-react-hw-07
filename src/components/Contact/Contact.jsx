import { useDispatch } from 'react-redux';
import s from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ user }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(user.id));
  };

  return (
    <>
      <div>
        <p className={s.text}>
          Name: {user.name.charAt(0).toUpperCase()}
        </p>
        <p className={s.text}>Phone: {user.number}</p>
      </div>
      <button
        className={s.contactBtn}
        type='button'
        onClick={handleDelete}
      >
        Delete
      </button>
    </>
  );
};
export default Contact;