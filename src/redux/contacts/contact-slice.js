import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
  {
    id: 1,
    name: 'Oleks',
    number: '0934400016',
  },
  {
    id: 3,
    name: 'aleg',
    number: '0934400016',
  },
  {
    id: 2,
    name: 'Ilga',
    number: '0934400016',
  },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
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
