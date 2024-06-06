import React, { useState, Suspense, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  pararAudios,
  establecerMostrarAbajo,
  establecerCanalBOn,
  establecerMostrarFlechasCanales,
} from "./Redux/states/managerSlice";

import Portada from "./secciones/Portada/Portada";
import Creditos from "./secciones/Creditos/Creditos";
import Home from "./secciones/Home/Home";
import Guaviare from "./secciones/Guaviare/Guaviare";
import Caqueta from "./secciones/Caqueta/Caqueta";
import Cauca from "./secciones/Cauca/Cauca";
import Menu from "./secciones/Home/Menu/Menu";
import NotFound from "./components/NotFound";

import menu from "./assets/generales/menu.png";
import salida from "./assets/generales/salida.png";
import abajo from "./assets/generales/abajo.png";
import ejeAImg from "./assets/generales/ejeA.png";
import ejeBImg from "./assets/generales/ejeB.png";

import "./App.css";
import "./CanalA.css";
import "./CanalB.css";

import GuaviareB from "./secciones/Guaviare/GuaviareB";
import CaquetaB from "./secciones/Caqueta/CaquetaB";

function App() {
  const location = useLocation();
  const path = location.pathname;

  const mostrarAbajo = useSelector(
    (state) => state.managerReducer.mostrarAbajo
  );
  const mostrarFlechasCanales = useSelector(
    (state) => state.managerReducer.mostrarFlechasCanales
  );
  const mostrarHamburguesa = useSelector(
    (state) => state.managerReducer.mostrarHamburguesa
  );
  const canalBOn = useSelector((state) => state.managerReducer.canalBOn);
  const [yaEmpezo, setYaEmpezo] = useState(false);
  const [showingMenu, setShowingMenu] = useState(false);
  const PortadaRef = useRef(null);

  const dispatch = useDispatch();

  const showCanalB = () => {
    dispatch(pararAudios());
    dispatch(establecerMostrarAbajo(false));
    dispatch(establecerCanalBOn(true));
  };

  const hideCanalB = () => {
    dispatch(pararAudios());
    dispatch(establecerMostrarAbajo(true));
    dispatch(establecerCanalBOn(false));
  };

  const handleEmpezar = () => {
    PortadaRef.current.style.animation = "desaparecer 3s";

    setTimeout(() => {
      setYaEmpezo(true);
    }, 2000);
  };

  const handleShowingMenu = () => {
    setShowingMenu(!showingMenu);
    dispatch(establecerCanalBOn(false));
    dispatch(establecerMostrarFlechasCanales(false));
  };

  return (
    <>
      {!yaEmpezo && (
        <section ref={PortadaRef} className="portada-bg">
          <Portada handleEmpezar={handleEmpezar} />
        </section>
      )}
      {mostrarHamburguesa && (
        <div className="menu-hamburguesa">
          {!showingMenu && (
            <img
              onClick={() => {
                setShowingMenu(!showingMenu);
              }}
              src={menu}
              alt="menu"
            />
          )}
          {showingMenu && (
            <img
              onClick={() => {
                setShowingMenu(!showingMenu);
              }}
              src={salida}
              alt="menu"
            />
          )}
        </div>
      )}
      {showingMenu && (
        <nav className="menu">
          <Creditos handleShowingMenu={handleShowingMenu} />
        </nav>
      )}

      {canalBOn && mostrarFlechasCanales && (
        <div className="ejeA">
          <img onClick={hideCanalB} src={ejeAImg} alt="ejeA" />
        </div>
      )}
      {!canalBOn && mostrarFlechasCanales && (
        <div className="ejeB">
          <img onClick={showCanalB} src={ejeBImg} alt="ejeB" />
        </div>
      )}

      <div className={canalBOn ? "canal-b canal-b-on" : "canal-b canal-b-off"}>
        {path == "/guaviare" && <GuaviareB />}
        {path == "/caqueta" && <CaquetaB />}
      </div>

      {mostrarAbajo && (
        <div className="abajo">
          <img src={abajo} alt="abajo" />
        </div>
      )}

      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guaviare" element={<Guaviare />} />
          <Route path="/caqueta" element={<Caqueta />} />
          <Route path="/cauca" element={<Cauca />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
