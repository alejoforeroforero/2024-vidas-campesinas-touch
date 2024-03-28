import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cambiarSeccionGuaviare, sumar } from '../../../Redux/states/managerSlice';

import './Bio.css';

const Bio = () => {

  const dispatch = useDispatch();

  // useEffect(()=>{
  //   console.log('entra');
  // }, [])

  let seccion = useSelector(state => state.managerReducer.seccionGuaviare);
  let contador = useSelector(state => state.managerReducer.contador);
  const [showPopup, setShowpopup] = useState(false);
  const [startY, setStartY] = useState(null);
  const [desaparecer, setDesaparecer] = useState(false);

   useEffect(() => {
   
    let isScrolling;
    function handleScroll(event) {
      setDesaparecer(true);
      const direction = event.deltaY > 0 ? 'down' : 'up';
      clearInterval(isScrolling)
      isScrolling = setTimeout(function () {
        console.log('paro');
        setDesaparecer(false)
        if (direction == 'up') {
          contador--;
        } else {
          contador++;
        }

        if(contador >2){
          dispatch(sumar(0));
          dispatch(cambiarSeccionGuaviare(2));
        }else{
          dispatch(sumar(contador));
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

    if(contador >2){
      dispatch(sumar(0));
      dispatch(cambiarSeccionGuaviare(2));
    }else{
      dispatch(sumar(contador));
    }  


    // setTimeout(() => {
    //   setShowpopup(false);
    // }, 400)

    //dispatch(cambiarSeccionGuaviare(seccion));
  }

  return (
    <div className='seccion jorge-bio' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
      {contador == 0 && 
        <p className={desaparecer ? 'jorge-bio-p1-des' : 'jorge-bio-p1'}>Hola mis amigos</p>
      }
      {contador == 1 && 
        <p className={desaparecer ? 'jorge-bio-p1-des' : 'jorge-bio-p1'}>va otro texto</p>
      }
      {contador == 2 && 
        <p className={desaparecer ? 'jorge-bio-p1-des' : 'jorge-bio-p1'}>y uno tercero</p>
      }
    </div>
  )
}

export default Bio