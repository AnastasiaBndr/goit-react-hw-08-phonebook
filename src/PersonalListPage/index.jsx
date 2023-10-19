import ContactList from "components/ContactList";
import ContactForm from "components/ContactForm";
import Filter from 'components/Filter';

const PersonalListPage = () => {
    return (<><ContactForm /><Filter />
        <ContactList /></>)
}

export default PersonalListPage;