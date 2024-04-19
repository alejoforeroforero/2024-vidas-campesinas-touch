import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {
  cambiarSeccion,
  sumar,
  pararAudios,
} from "../Redux/states/managerSlice";

export default function useDelta(prevSection, nextSection, elementRef) {
  const dispatch = useDispatch();
  const [startY, setStartY] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let isScrolling;

    function handleScroll(event) {
      const direction = event.deltaY > 0 ? "down" : "up";

      if (direction == "down" && nextSection == null) {
       
      } else if (direction == "up" && prevSection == null) {
      
      } else {
        if (elementRef) {
          elementRef.current.style.animation = "cambiarEscena 2s";
        }

        clearInterval(isScrolling);

        isScrolling = setTimeout(function () {
          dispatch(sumar(0));
          dispatch(pararAudios());
          if (direction == "up") {
            dispatch(cambiarSeccion(prevSection));
          } else {
            if(nextSection == 'guaviare-menu'){
              navigate('/menu'); 
              return;
            }
            dispatch(cambiarSeccion(nextSection));
          }
        }, 100);
      }
    }
    elementRef.current.addEventListener("wheel", handleScroll);

    return () => {
      //elementRef.current.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const handleTouchStart = (event) => {
    setStartY(event.touches[0].clientY);
  };

  const handleTouchEnd = (event) => {
    const endY = event.changedTouches[0].clientY;
    const deltaY = startY - endY;

    if (deltaY > 0) {
      dispatch(sumar(0));
      if(nextSection == null){       
        
      }else{
        if(nextSection == 'guaviare-menu'){
          navigate('/menu'); 
          return;
        }
        dispatch(cambiarSeccion(nextSection));
      }
      
    } else if (deltaY < 0) {
      dispatch(sumar(0));
      if(prevSection == null){
       
      }else{
        dispatch(cambiarSeccion(prevSection));
      }
    } else {
      
    }
  };

  return { handleTouchStart, handleTouchEnd };
}
