import { createSlice } from "@reduxjs/toolkit";

export const manager = createSlice({
  name: "Manager",
  initialState: {
    departamento: "Ninguno",
    contador: 0,
    seccion:'jorge-bio',
    descargando: true,
  },
  reducers: {
    cambiarDepartamento: (state, action) => {},
    establecerPersonaje: (state, action) => {},
    cambiarSeccion: (state, action) => {
      state.seccion = action.payload;
      console.log(state.seccionGuaviare);
    },
    sumar: (state, action) => {
      state.contador = action.payload;
    },
    cambiarDescargando: (state, action) => {
      state.descargando = action.payload;
    },
  },
});

export const {
  cambiarDepartamento,
  establecerPersonaje,
  cambiarSeccion,
  sumar,
  cambiarDescargando,
} = manager.actions;
export default manager.reducer;
