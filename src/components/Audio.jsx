import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cambiarCancion, pararAudios } from '../Redux/states/managerSlice';
import audioOnImg from '../assets/generales/audio-on.png';
import audioImg from '../assets/generales/audio.png';
import audioJorge1 from '../assets/guaviare/jorge/jorge1.mp3';
import audioJorge2 from '../assets/guaviare/jorge/jorge2.mp3';
import audioJorge3 from '../assets/guaviare/jorge/jorge3.mp3';
import './Audio.css'


const Audio = ({ titulo, id }) => {
    const dispatch = useDispatch();

    const audioRef = useRef();
    const canvasRef = useRef();
    const frame = useRef(0);

    const [animar, setAnimar] = useState(false);

    const cancionActual = useSelector(state => state.managerReducer.cancionActual);

    const audioS = cancionActual == id ? true : false;

    const escogerCancion = () => {
        if (id == 'jorge1') {
            return audioJorge1
        } else if (id == 'jorge2') {
            return audioJorge2;
        } else if (id == 'jorge3') {
            return audioJorge3
        }
    }

    const animate = () => {
        //nextAnimationFrameHandler();
        frame.current = requestAnimationFrame(animate);
        console.log('holaaaaa');
    };

    useEffect(() => {
        // start or continue animation in case of shouldAnimate if true
        if (animar) {
            frame.current = requestAnimationFrame(animate);
            
        } else {
            // stop animation
            cancelAnimationFrame(frame.current);
        }

        return () => cancelAnimationFrame(frame.current);
    }, [animar]);


    const playAudio = () => {

        dispatch(pararAudios());

        if (cancionActual == id) {
            dispatch(cambiarCancion(null))
            audioRef.current.pause();
            setAnimar(false)
        } else {
            dispatch(cambiarCancion(id))

            const path = escogerCancion();

            audioRef.current.src = path;
            audioRef.current.play();

            setAnimar(true);
        }
    }

    return (
        <div className='audio-contenedor'>
            <div>
                <img src={(audioS) ? audioOnImg : audioImg} onClick={() => { playAudio() }} ></img>
                <h3>{titulo}</h3>
            </div>
            <audio
                ref={audioRef}
                src=""
                controls
                // className={(audioS) ? 'mostrar' : 'esconder'}
                className={(audioS) ? 'esconder' : 'esconder'}
            >
            </audio>
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}

export default Audio