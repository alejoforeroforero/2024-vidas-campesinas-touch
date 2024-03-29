import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cambiarSeccion, sumar } from "../Redux/states/managerSlice";

export default function useDelta(prevSection, nextSection) {
  const dispatch = useDispatch();
  const [startY, setStartY] = useState(null);

  useEffect(() => {
    let isScrolling;

    function handleScroll(event) {
      const direction = event.deltaY > 0 ? "down" : "up";

      clearInterval(isScrolling);

      isScrolling = setTimeout(function () {
        if (direction == "up") {
          dispatch(sumar(0));
          dispatch(cambiarSeccion(prevSection));
        } else {
          dispatch(sumar(0));
          dispatch(cambiarSeccion(nextSection));
        }
      }, 100);
    }
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
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
