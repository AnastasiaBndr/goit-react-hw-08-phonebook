import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import Notiflix from "notiflix";
import contactsSelectors from 'redux/contacts/contactsSelectors';
import contactsOperations from 'redux/contacts/contactsOperations';


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
    if (contacts) {
      if (contacts.find(contact => contact.number === number))
        Notiflix.Notify.failure("This contact exists!")
      else {
        await dispatch(contactsOperations.addContact({ name: name, number: number }));
        await setTemp(number);
      }
    } else dispatch(contactsOperations.addContact({ name: name, number: number }));


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
    </form></section>);
}

export default ContactForm;