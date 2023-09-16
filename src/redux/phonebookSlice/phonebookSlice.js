import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'phonebook',
  storage,
};

const initialState = {a: 1};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const persistedReducer = persistReducer(persistConfig, phonebookSlice.reducer);

export const { add } = phonebookSlice.actions;
