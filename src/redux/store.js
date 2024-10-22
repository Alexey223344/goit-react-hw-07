import { configureStore } from '@reduxjs/toolkit';
import { filtrationReducer } from './filtersSlice';
import { contactReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filtrationReducer,
  },
});