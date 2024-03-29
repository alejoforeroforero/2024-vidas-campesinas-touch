import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cambiarSeccion, sumar, cambiarDescargando } from '../../../Redux/states/managerSlice';
import { Jorge } from '../../../data/Guaviare';

import './Bio.css';

const Bio = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(cambiarDescargando(false));
    }, 2000)

    return () => clearTimeout(timer)
  })

  let contador = useSelector(state => state.managerReducer.contador);
  const [startY, setStartY] = useState(null);

  console.log(contador);

  useEffect(() => {
    let isScrolling;
    
    function handleScroll(event) {

      const direction = event.deltaY > 0 ? 'down' : 'up';

      clearInterval(isScrolling)

      isScrolling = setTimeout(function () {

        if (direction == 'up') {
          dispatch(sumar(0));
          dispatch(cambiarSeccion('guaviare-intro'));
        } else {
          dispatch(sumar(0));
          dispatch(cambiarSeccion('jorge-relatos'));
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
      dispatch(sumar(0));
      dispatch(cambiarSeccion('jorge-relatos'));
    } else if (deltaY < 0) {
      dispatch(sumar(0));     
      dispatch(cambiarSeccion('guaviare-intro'));
    } else {
      console.log('No vertical swipe');
    }
  }

  return (
    <div className='seccion jorge-bio' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      Jorge Bio
    </div>
  )
}

export default Bio