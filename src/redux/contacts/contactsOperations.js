import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    console.log(data);
    return data;
  } catch (error) {}
});

const addContact = createAsyncThunk(
  'contacts/addContacts',
  async credentials => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      console.log(data);
      return data;
    } catch (error) {}
  }
);

const deleteContact = createAsyncThunk('contacts/deleteContacts', async id => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  } catch (error) {}
});

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default contactsOperations;
