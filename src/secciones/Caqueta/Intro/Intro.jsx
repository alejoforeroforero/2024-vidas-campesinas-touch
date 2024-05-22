import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    cambiarSeccion,
    sumar,
    cambiarDescargando,
    establecerMostrarAbajo,
    establecerMostrarLineasA,
    establecerMostrarFlechasCanales,
    pararAudios
} from '../../../Redux/states/managerSlice';

const videoCaquetaM = 'https://res.cloudinary.com/dhz9jfn78/video/upload/v1716267079/caqueta/home/caqueta_alcwwn.mp4'
import sol from '../../../assets/caqueta/intro/sol.png';
import luna from '../../../assets/caqueta/intro/luna.png';



import { CaquetaIntro } from '../../../data/Caqueta';

import './Intro.css';

const Intro = () => {
    const dispatch = useDispatch();
    const videoRef = useRef();
    const contenedorGRef = useRef();
    const [mostrar, setMostrar] = useState(false);

    useEffect(() => {
        dispatch(establecerMostrarLineasA(false));
        dispatch(establecerMostrarFlechasCanales(false));
        dispatch(pararAudios());

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
                    dispatch(cambiarSeccion('moyano-bio'));
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
        }

        if (contador < 0) {
            contador = 0;
        }

        if (contador > 1) {
            dispatch(sumar(0));
            dispatch(cambiarDescargando(true));
            dispatch(cambiarSeccion('moyano-bio'));
        } else {
            dispatch(sumar(contador));
        }
    }

    const pintarVideo = () => {
        return (
            <div className="caqueta-video">
                <video
                    ref={videoRef}
                    loop
                    playsInline
                    muted
                    src={videoCaquetaM}>
                </video>
            </div>
        )
    }

    return (
        <div ref={contenedorGRef} className='seccion caqueta-intro' onTouchEnd={handleTouchEnd} onTouchStart={handleTouchStart}>
            {pintarVideo()}
            <div className="mask-general">
                {mostrar &&
                    <div className="contenido-general">
                        <div className='caqueta-sol'>
                            <img src={sol} alt="" />
                        </div>
                        <div className='caqueta-titulo'>
                            <h1 className='caqueta-titulo-h1'>{CaquetaIntro.titulo}</h1>
                        </div>
                        <div className='caqueta-descripcion'>
                            <img src={luna} alt="" />
                            <h2 className='caqueta-descripcion-h2'><pre>{CaquetaIntro.desc}</pre></h2>
                            <hr className='caqueta-descripcion-hr' />
                            <div className='caqueta-descripcion-p-contenedor'>
                                {contador == 0 &&
                                    <p className={desaparecer ? 'caqueta-intro-p1-des' : 'caqueta-intro-p1'}>
                                        {CaquetaIntro.p1}
                                    </p>
                                }
                                {contador == 1 &&
                                    <p className={desaparecer ? 'caqueta-intro-p1-des' : 'caqueta-intro-p1'}>
                                        {CaquetaIntro.p2}
                                    </p>
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Intro