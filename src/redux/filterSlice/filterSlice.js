import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'filter',
  storage,
};

const initialState = { value: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    update: (state, action) => {
      return { ...state, value: action.payload };
    },
  },
});

export const persistedFilterReducer = persistReducer(
  persistConfig,
  filterSlice.reducer
);

export const { update } = filterSlice.actions;
