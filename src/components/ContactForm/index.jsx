import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Notiflix from "notiflix";
import * as contactsOperations from "redux/contacts/contactsOperations";
import { contactsSelectors } from "redux/contacts";
import image from '../../images/no-image.jpg';


const ContactForm = () => {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();
  const [temp, setTemp] = useState('');

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch, temp]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const number = e.currentTarget.elements.number.value;
    const name = e.currentTarget.elements.name.value;
    if (contacts.find(contact => contact.number === number))
      Notiflix.Notify.failure("This contact exists!")
    else {
      const newUser = { name: name, number: number, avatar: image };
      await dispatch(contactsOperations.addContact(newUser));
      await setTemp(number);
    }

    const form = e.target;
    form.reset();
  }

  return (<section className={css.main_page_container}>
    <form className={css.add__contact__container} onSubmit={handleSubmit}>
      <div className={css.name_container}>
        <h3>Name</h3>
        <input
          type="text"
          id="name"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className={css.number_container}>
        <h3>Number</h3>
        <input
          type="tel"
          id="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className={css.number__input}
        />
      </div>
      <button type="submit">Add Contact</button>
    </form> <Outlet></Outlet></section>);
}

export default ContactForm;