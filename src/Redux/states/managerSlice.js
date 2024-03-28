import { createSlice } from "@reduxjs/toolkit";

export const manager = createSlice({
  name: "Manager",
  initialState: {
    departamento: "Ninguno",
    contador:0,
    seccionGuaviare: "1",
  },
  reducers: {
    cambiarDepartamento: (state, action) => {},
    establecerPersonaje: (state, action) => {},
    cambiarSeccionGuaviare: (state, action) => {
      state.seccionGuaviare = action.payload;
      console.log(state.seccionGuaviare);
    },
    sumar: (state, action) => {
      state.contador = action.payload;
    },
  },
});

export const { cambiarDepartamento, establecerPersonaje, cambiarSeccionGuaviare, sumar } =
  manager.actions;
export default manager.reducer;
