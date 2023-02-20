import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const api = 'http://localhost:3000/api/v1/greetings';
const initialState = {
  message: [],
  status: null,
};

export const messageFetch = createAsyncThunk(
  'message/messageFetch',
  async () => {
    const response = await axios.get(api);
    return response.data;
  },
);

const greetingsSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(messageFetch.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(messageFetch.fulfilled, (state, action) => {
        const IsSuccessful = state;
        IsSuccessful.status = 'success';
        IsSuccessful.message = action.payload;
      })
      .addCase(messageFetch.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
      });
  },
});

export default greetingsSlice.reducer;
