import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    name: '',
  },
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

export const selectUserFiltered = state => state.filters.filters.name;

export const filtrationReducer = slice.reducer;

export const { addFilter } = slice.actions;