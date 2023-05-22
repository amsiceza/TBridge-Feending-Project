import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import asistentesService from "./asistentesService";

const initialState = {
  asistentes: [],
};

export const getAll = createAsyncThunk("usuarios/getAllUsers", async () => {
  try {
    return await asistentesService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const asistentesSlice = createSlice({
  name: "asistentes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.asistentes = action.payload;
    });
  },
});

export default asistentesSlice.reducer;
