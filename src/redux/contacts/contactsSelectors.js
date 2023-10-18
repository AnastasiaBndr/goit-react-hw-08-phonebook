const getContacts = state => state.contacts.contacts;
const getLoading = state => state.contacts.isLoading;
const getFilter = state => state.filter.value;

const contactsSelectors = {
  getContacts,
  getFilter,
  getLoading,
};

export default contactsSelectors;
