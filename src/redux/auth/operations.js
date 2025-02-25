// https://connections-api.goit.global

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://connections-api.goit.global",
});

const setAuthBar = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthBar = () => {
  api.defaults.headers.common.Authorization = ``;
};

// said123456@gmail.com

export const register = createAsyncThunk(
  "auth/register",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("/users/signup", body);
      setAuthBar(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (body, thunkAPI) => {
  try {
    const { data } = await api.post("/users/login", body);
    setAuthBar(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await api.post("/users/logout");
    clearAuthBar();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
