import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  fetchContacts,
} from "../contacts/operations";
import { logout } from "../auth/operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "contacts",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, () => initialState)
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const contactReducer = slice.reducer;
