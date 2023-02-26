import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => [...state, payload],

      prepare: data => {
        return { payload: { id: nanoid(), ...data } };
      },
    },

    removeContact: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
});

export const { addContact, removeContact } = contactSlice.actions;
export default contactSlice.reducer;
