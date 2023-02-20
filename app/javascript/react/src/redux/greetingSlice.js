import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  message: [],
  status: null,
}

export const messageFetch = createAsyncThunk(
  "message/messageFetch",
  async() => {
    const response = await fetch("http://localhost:5001/products");
    const data = response.json();
    return data
  }
)