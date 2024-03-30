import { createSlice } from "@reduxjs/toolkit";

export const manager = createSlice({
  name: "Manager",
  initialState: {
    departamento: "guaviare",
    contador: 0,
    seccion:'jorge-relatos',
    descargando: false,
    cancionActual:''
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
    cambiarCancion:(state, action)=>{
      state.cancionActual = action.payload;
    },
    pararAudios:(state, action)=>{
      const audios = document.getElementsByTagName('audio');

        for(let i=0; i< audios.length; i++){
            const audio = audios[i];
            audio.pause();
        }
    }
  },
});

export const {
  cambiarDepartamento,
  establecerPersonaje,
  cambiarSeccion,
  sumar,
  cambiarDescargando,
  cambiarCancion,
  pararAudios
} = manager.actions;
export default manager.reducer;
