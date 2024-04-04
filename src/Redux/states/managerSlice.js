import { createSlice } from "@reduxjs/toolkit";

export const manager = createSlice({
  name: "Manager",
  initialState: {
    departamento: "guaviare",
    personaje:'',
    contador: 0,
    seccion:'guaviare-intro',
    canalBOn:false,
    descargando: false,
    cancionActual:'',
    mostrarAbajo:true,
    mostrarLineasA:false,
    mostrarFlechasCanales:false,
    duracion:0
  },
  reducers: {
    cambiarDepartamento: (state, action) => {},
    establecerPersonaje(state, action) {
      state.personaje = action.payload;
    },
    cambiarSeccion: (state, action) => {
      state.seccion = action.payload;
      console.log(state.seccionGuaviare);
    },
    sumar: (state, action) => {
      state.contador = action.payload;
    },
    establecerCanalBOn(state, action) {
      state.canalBOn = action.payload;
    },
    cambiarDescargando: (state, action) => {
      state.descargando = action.payload;
    },
    cambiarCancion:(state, action)=>{
      state.cancionActual = action.payload;
    },
    pararAudios:(state, action)=>{
      state.cancionActual = null;
      const audios = document.getElementsByTagName('audio');

        for(let i=0; i< audios.length; i++){
            const audio = audios[i];
            audio.pause();
        }
    },
    changeVideo(state, action) {
      if (state.videoActual !== action.payload) {
        if (state.videoActual != null) {
          const prevVideo = document.getElementById(state.videoActual);

          if(prevVideo){
            if (!prevVideo.paused) {
              prevVideo?.pause();
            }
          }
        }
      }
      state.videoActual = action.payload;
      if (state.videoActual != null) {
        const currentVideo = document.getElementById(action.payload);
        if (currentVideo.paused) {
          currentVideo.play();
        }
      }
    },
    establecerMostrarAbajo(state, action){
      state.mostrarAbajo = action.payload;
    },
    establecerMostrarLineasA(state, action){
      state.mostrarLineasA = action.payload;
    },
    establecerMostrarFlechasCanales(state, action){
      state.mostrarFlechasCanales = action.payload;
    },
    establecerDuracion(state, action){
      state.duracion = action.payload;
    },
  },
});

export const {
  cambiarDepartamento,
  establecerPersonaje,
  cambiarSeccion,
  establecerCanalBOn,
  sumar,
  cambiarDescargando,
  cambiarCancion,
  pararAudios,
  changeVideo,
  establecerMostrarAbajo,
  establecerMostrarLineasA,
  establecerMostrarFlechasCanales,
  establecerDuracion
  
} = manager.actions;
export default manager.reducer;
