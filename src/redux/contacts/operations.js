import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../auth/operations";

export const fetchContacts = createAsyncThunk(
  `contacts/fetchAll`,
  async (_, thunkAPI) => {
    try {
      const response = await api.get(`/contacts`);
      console.log("Contacts:", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  `contacts/deleteContact`,
  async (id, thunkAPI) => {
    try {
      console.log("Attempting to delete contact with id:", id);
      await api.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      console.error("Error deleting contact:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  `contacts/createContact`,
  async (contact, thunkAPI) => {
    try {
      const response = await api.post(`/contacts`, contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
