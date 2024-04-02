import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    cambiarSeccion,
    sumar,
    cambiarDescargando,
    establecerMostrarAbajo,
    establecerMostrarLineasA,
    establecerMostrarFlechasCanales
} from '../../../Redux/states/managerSlice';
import videoGuaviareM from '../../../assets/guaviare/home/guaviare-m.mp4';
import guaviareGrafica from '../../../assets/guaviare/home/pictograma.png';

import { GuaviareIntro } from '../../../data/Guaviare';

import './Intro.css';

const Intro = () => {
    const dispatch = useDispatch();
    const videoRef = useRef();
    const contenedorGRef = useRef();
    const [mostrar, setMostrar] = useState(false);

    useEffect(() => {
        dispatch(establecerMostrarLineasA(false));
        dispatch(establecerMostrarFlechasCanales(false));

        const timer = setTimeout(() => {
            dispatch(cambiarDescargando(false));
            dispatch(establecerMostrarAbajo(true));                        
            setMostrar(true);
            videoRef.current.play();
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    let contador = useSelector(state => state.managerReducer.contador);
    const [startY, setStartY] = useState(null);
    const [desaparecer, setDesaparecer] = useState(false);

    useEffect(() => {
        let isScrolling;

        function handleScroll(event) {

            const direction = event.deltaY > 0 ? 'down' : 'up';

            if (contador >= 0 && direction == 'down') {
                setDesaparecer(true);
            }

            clearInterval(isScrolling)

            isScrolling = setTimeout(function () {

                setDesaparecer(false);

                if (direction == 'up') {
                    contador--;
                } else {
                    contador++;
                }

                if (contador < 0) {
                    contador = 0;
                }

                if (contador > 1) {
                    dispatch(sumar(0));
                    dispatch(cambiarDescargando(true));
                    dispatch(cambiarSeccion('jorge-bio'));
                } else {
                    dispatch(sumar(contador));
                }
            }, 100);
        }
        contenedorGRef.current.addEventListener('wheel', handleScroll);

        return () => {
            if (contenedorGRef.current) {
                contenedorGRef.current.removeEventListener('wheel', handleScroll);
            }
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

        if (contador < 0) {
            contador = 0;
        }

        if (contador > 1) {
            dispatch(sumar(0));
            dispatch(cambiarDescargando(true));
            dispatch(cambiarSeccion('jorge-bio'));
        } else {
            dispatch(sumar(contador));
        }
    }

    const pintarVideo = () => {
        return (
            <div className="guaviare-video">
                <video
                    ref={videoRef}
                    loop
                    playsInline
                    muted
                    src={videoGuaviareM}>
                </video>
            </div>
        )
    }

    return (
        <div ref={contenedorGRef} className='seccion guaviare-intro' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
            {pintarVideo()}
            <div className="mask-general">
                {mostrar &&
                    <div className="contenido-general">
                        <div className='guaviare-titulo'>
                            <h1 className='guaviare-titulo-h1'>{GuaviareIntro.titulo}</h1>
                        </div>
                        <div className='guaviare-descripcion'>
                            <h2 className='guaviare-descripcion-h2'><pre>{GuaviareIntro.desc}</pre></h2>
                            <hr className='guaviare-descripcion-hr' />
                            <div className='guaviare-descripcion-p-contenedor'>
                                {contador == 0 &&
                                    <p className={desaparecer ? 'guaviare-intro-p1-des' : 'guaviare-intro-p1'}>
                                        {GuaviareIntro.p1}
                                    </p>
                                }
                                {contador == 1 &&
                                    <p className={desaparecer ? 'guaviare-intro-p1-des' : 'guaviare-intro-p1'}>
                                        {GuaviareIntro.p2}
                                    </p>
                                }
                            </div>
                        </div>
                        <div className='guaviare-descripcion-grafica'>
                            <img src={guaviareGrafica} alt="guaviare" />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Intro