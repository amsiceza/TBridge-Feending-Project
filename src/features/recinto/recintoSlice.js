import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import recintoService from "./recintoService";

const initialState = {
    recinto: null,
};

export const recintoSlice = createSlice({
    name: "recinto",
    initialState,
    reducers: {},
});

export const createRecinto = createAsyncThunk('recinto/createRecinto',async(recinto)=>{
    console.log("Hola")
    try {
      return await recintoService.createRecinto(recinto);   
    } catch (error) {
      console.error(error);
    }
})

export default recintoSlice.reducer;