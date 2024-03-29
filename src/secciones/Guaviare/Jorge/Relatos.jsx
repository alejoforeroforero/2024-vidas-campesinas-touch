import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cambiarSeccion, sumar, cambiarDescargando } from '../../../Redux/states/managerSlice';

import './Relatos.css';

const Relatos = () => {
  const dispatch = useDispatch();
  let contador = useSelector(state => state.managerReducer.contador);
  const [startY, setStartY] = useState(null);

  useEffect(()=>{
    const timer =   setTimeout(()=>{
      dispatch(cambiarDescargando(false));
    }, 1000)

    return ()=> clearTimeout(timer)
  })

  useEffect(() => {
    let isScrolling;
    function handleScroll(event) {
      const direction = event.deltaY > 0 ? 'down' : 'up';

      clearInterval(isScrolling);

      isScrolling = setTimeout(function () {

        if (direction == 'up') {
          contador--;
        } else {
          contador++;
        }

        if (contador > 0) {
          dispatch(sumar(0));
          dispatch(cambiarSeccion(3));
        } else if (contador < 0) {
          dispatch(sumar(2));
          dispatch(cambiarSeccion(1));
        }
      }, 100);
    }
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const handleTouchStart = (event) => {

    setStartY(event.touches[0].clientY);
  }

  const handleTouchEnd = (event) => {
    const endY = event.changedTouches[0].clientY;
    const deltaY = startY - endY;

    if (deltaY > 0) {
      contador++;
    } else if (deltaY < 0) {
      contador--
    } else {
      console.log('No vertical swipe');
    }

    if (contador > 0) {
      dispatch(sumar(0));
      dispatch(cambiarSeccion(3));
    } else if (contador < 0) {
      dispatch(sumar(2));
      dispatch(cambiarSeccion(1));
    }
  }

  return (
    <div className='seccion jorge-relatos' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      Relatos {contador} sipa
    </div>
  )
}

export default Relatos