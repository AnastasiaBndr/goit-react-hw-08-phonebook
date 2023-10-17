import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchBooks',
  async () => {
    const contacts = await axios
      .get('https://652541e867cfb1e59ce6f87a.mockapi.io/all/contacts')
      .then(resp => {
        return resp.data;
      })
      .catch(err => err);

    return contacts;
  }
);

export const addContact = createAsyncThunk('contacts/add', async contact => {
  const contacts = await axios
    .post('https://652541e867cfb1e59ce6f87a.mockapi.io/all/contacts', contact)
    .then(resp => {
      return resp.data;
    })
    .catch(err => console.log('якась фігня'));

  return contacts;
});

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  const contacts = await axios
    .delete(`https://652541e867cfb1e59ce6f87a.mockapi.io/all/contacts/${id}`)
    .then(resp => {
      console.log('deleted!');
    })
    .catch(err => console.log('якась фігня'));

  return contacts;
});
