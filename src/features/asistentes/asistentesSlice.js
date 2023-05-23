import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import asistentesService from "./asistentesService";

const initialState = {
  asistentes: [],
};

export const getAll = createAsyncThunk("usuarios/getAll", async () => {
  
  try {
    return await asistentesService.getAll();
  } catch (error) {
    console.error(error);
  }
});

export const asistentesSlice = createSlice({
  name: "usuarios",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      console.log(action.payload)
      state.asistentes = action.payload;
    });
  },
});

export default asistentesSlice.reducer;
