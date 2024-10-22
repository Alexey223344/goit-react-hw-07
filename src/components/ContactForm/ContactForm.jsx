import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactForm = () => {
  const dispatch = useDispatch();

  const orderSchema = Yup.object({
    name: Yup.string()
      .min(3, 'minimum of 3 letters')
      .max(50, 'max 50 letters')
      .required('Must be filled'),
    number: Yup.string()
      .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
      .min(3, 'min 3 number')
      .max(50, 'max 50 number')
      .required('Must be filled'),
  });

  const handleFormAdd = (values, options) => {
    dispatch(
      addContact({
        name: values.name.trim().toLowerCase(),
        number: values.number,
      })
    );
    options.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleFormAdd}
        validationSchema={orderSchema}
      >
        <Form className={s.contactForm}>
          <label>
            Name
            <Field className={s.formInput} name='name' />
            <ErrorMessage className={s.inputErr} name='name' component='p' />
          </label>
          <label>
            Number
            <Field className={s.formInput} name='number' />
            <ErrorMessage className={s.inputErr} name='number' component='p' />
          </label>
          <button className={s.formBtn} type='submit'>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;