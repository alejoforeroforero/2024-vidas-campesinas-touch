import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cambiarSeccion, sumar, pararAudios } from "../Redux/states/managerSlice";

export default function useDelta(prevSection, nextSection, elementRef) {
  const dispatch = useDispatch();
  const [startY, setStartY] = useState(null);

  useEffect(() => {
    let isScrolling;

    function handleScroll(event) {
      const direction = event.deltaY > 0 ? "down" : "up";

      if(elementRef){
        elementRef.current.style.animation = 'cambiarEscena 2s';
      }

      clearInterval(isScrolling);

      isScrolling = setTimeout(function () {
        dispatch(sumar(0));
        dispatch(pararAudios());
        if (direction == "up") {
            dispatch(cambiarSeccion(prevSection));
        } else {  
          dispatch(cambiarSeccion(nextSection));
        }        
      }, 100);
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
      dispatch(cambiarSeccion(nextSection));
    } else if (deltaY < 0) {
      dispatch(sumar(0));
      dispatch(cambiarSeccion(prevSection));
    } else {
      console.log("No vertical swipe");
    }
  };

  return { handleTouchStart, handleTouchEnd };
}
