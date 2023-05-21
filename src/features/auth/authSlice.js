import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";


const initialState = {
  usuario: null,
  token: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
});

export const register = createAsyncThunk('auth/register',async(usuario)=>{
    try {
      return await authService.register(usuario);   
    } catch (error) {
      console.error(error);
    }
})

export default authSlice.reducer;