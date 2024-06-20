import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  src:'nada',
  isPlaying:false
};

const audioHowlerSlice = createSlice({
  name: "audioHowlerSlice",
  initialState,
  reducers: {
    cambiarSrc: (state, action) => {
        state.src = action.payload;
    },
  },
 
});

export const { cambiarSrc } = audioHowlerSlice.actions;
export default audioHowlerSlice.reducer;
