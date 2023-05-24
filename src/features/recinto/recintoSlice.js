import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import recintoService from "./recintoService";

const initialState = {
    recinto: {},
    createMessage: ""
};

export const recintoSlice = createSlice({
    name: "recinto",
    initialState,
    reducers: {},
});

export const createRecinto = createAsyncThunk('recinto/createRecinto',async(recinto)=>{
    try {
      return await recintoService.createRecinto(recinto);   
    } catch (error) {
      console.error(error);
    }
})


export const programSlice = createSlice({
  name: "recinto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(createRecinto.fulfilled, (state, action) => {
      state.recinto = action.payload.recinto
      state.createMessage = action.payload.message
    })
  }

})





export default recintoSlice.reducer;