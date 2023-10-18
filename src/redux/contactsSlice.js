import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts/contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contact: { name: null, phone: null, avatar: null },
    isLoading: false,
    error: null,
    contacts: [],
  },
  extraReducers: {
    [contactsOperations.fetchContacts.fulfilled](state, action) {
      state.contacts = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [contactsOperations.fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [contactsOperations.fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  [contactsOperations.addContact.fulfilled](state, action) {
    state.contacts.push(action.payload);
    state.isLoading = false;
    state.error = null;
  },
});

export const contactsReducer = contactsSlice.reducer;
