import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { persistedReducer } from 'redux/phonebookSlice/phonebookSlice';

export const store = configureStore({
  reducer: {
    phonebook: persistedReducer,
  },
});

export const persistor = persistStore(store)