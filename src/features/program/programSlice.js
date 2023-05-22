import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentDay: 1
}


export const changeDay = createAsyncThunk("program/changeDay", async (day) => {
   return day;
  });


  export const programSlice = createSlice({
    name: "program",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(changeDay.fulfilled, (state, action) => {
        state.currentDay = action.payload
      })

    }

  })

  export default programSlice.reducer;