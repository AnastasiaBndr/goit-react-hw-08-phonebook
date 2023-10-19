import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Hourglass } from 'react-loader-spinner';
import contactsSelectors from 'redux/contacts/contactsSelectors';
import contactsOperations from 'redux/contacts/contactsOperations';
import image from '../../images/no-image.jpg';
const ContactList = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelectors.getContacts);
    console.log(contacts)
    const isLoading = useSelector(contactsSelectors.getLoading);
    const [temp, setTemp] = useState(0);

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch, temp]);

    const onClickDelete = async id => {
        await dispatch(contactsOperations.deleteContact(id))
        await setTemp(id);
    }


    const filter = useSelector(contactsSelectors.getFilter);
    console.log(filter)
    return (<div className={css.contacts__list__container}>
        {contacts &&
            <ul>
                {contacts.map(contact => {
                    if (contact.name.toLowerCase().includes(filter.toLowerCase()) || filter === '')
                        return (
                            <li key={contact.id} className={css.contact_list_item}>
                                <img className={css.avatar} src={image} alt={contact.name} />
                                <p>{contact.name}: {contact.number}</p>
                                <button type="button" onClick={() => onClickDelete(contact.id)}>Delete</button>
                            </li>)
                    else return "";
                })}</ul>
        }
        <Hourglass
            visible={isLoading}
            height="40"
            width="40"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass="loader"
            colors={['#bba5cf', '#f588ff']}
        />
    </div>);
}

export default ContactList;