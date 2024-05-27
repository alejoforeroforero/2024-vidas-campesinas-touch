import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cambiarSeccion } from "../../Redux/states/managerSlice";
import Cargando from "../../components/Cargando";

import IntroCauca from "./Intro/Intro";
import GuardiaBio from "./Guardia/Bio";
import GuardiaRelatos1 from "./Guardia/Relatos";
import GuardiaYoutube1 from "./Guardia/Youtube";
import GuardiaRelatos2 from "./Guardia/Relatos2";
import GuardiaYoutube2 from "./Guardia/Youtube2";
import GuardiaRelatos3 from "./Guardia/Relatos3";

const lineas = [
  {
    id: "linea-guardia",
    titulo: "Guardia Indigena",
    navegacion: "cauca-guardia-navegacion",
  },
];

const Cauca = () => {
  const seccion = useSelector((state) => state.managerReducer.seccion);
  const personaje = useSelector((state) => state.managerReducer.personaje);
  const descargando = useSelector((state) => state.managerReducer.descargando);
  const mostrarLineasA = useSelector(
    (state) => state.managerReducer.mostrarLineasA
  );

  const dispatch = useDispatch();

  const handleNavegacion = (id) => {
    if (id == "cauca-guardia-navegacion") {
      dispatch(cambiarSeccion("guardia-bio"));
    }     
  };

  useEffect(() => {
    //dispatch(cambiarSeccion("cauca-intro"));

    dispatch(cambiarSeccion("cauca-guardia-bio"));

    
  }, []);

  return (
    <div className="capitulo">
      {mostrarLineasA && (
        <div className="lineas-a">
          {lineas.map((linea) => {
            return (
              <div
                onClick={() => {
                  handleNavegacion(linea.navegacion);
                }}
                key={linea.id}
                className={
                  personaje === linea.id ? "linea linea-seleccionada" : "linea"
                }
              />
            );
          })}
        </div>
      )}
      {descargando && <Cargando />}
      {seccion == "cauca-intro" && <IntroCauca />}
      {seccion == "cauca-guardia-bio" && <GuardiaBio />}
      {seccion == "guardia-relatos-1" && <GuardiaRelatos1 />}
      {seccion == "guardia-youtube-1" && <GuardiaYoutube1 />}
      {seccion == "guardia-relatos-2" && <GuardiaRelatos2 />}
      {seccion == "guardia-youtube-2" && <GuardiaYoutube2 />}
      {seccion == "guardia-relatos-3" && <GuardiaRelatos3 />}
    </div>
  );
};

export default Cauca;
