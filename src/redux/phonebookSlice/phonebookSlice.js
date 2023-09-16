import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { nanoid } from 'nanoid';

const persistConfig = {
  key: 'phonebook',
  storage,
};

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    add: {
      reducer(state, action) {
        return state.push(action.payload);
      },
      prepare(name) {
        return {
          payload: {
            name,
            id: nanoid(),
          },
        };
      },
    },
  },
});

export const persistedReducer = persistReducer(
  persistConfig,
  phonebookSlice.reducer
);

export const { add } = phonebookSlice.actions;
