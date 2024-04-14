import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cambiarCancion, pararAudios, establecerDuracion } from '../Redux/states/managerSlice';
import audioOnImg from '../assets/generales/audio-on.png';
import audioImg from '../assets/generales/audio.png';
import salida from '../assets/generales/salida.png';

import audioJorge1 from '../assets/guaviare/jorge/jorge1.mp3';
//import audioJorge2 from '../assets/guaviare/jorge/jorge2.mp3';
const audioJorge2 = 'https://res.cloudinary.com/dfwhzadxa/video/upload/v1713054257/vidas-campesinas/jorge/jorge2_njk2y7.mp3'
//import audioJorge3 from '../assets/guaviare/jorge/jorge3.mp3';
const audioJorge3 = 'https://res.cloudinary.com/dfwhzadxa/video/upload/v1713054261/vidas-campesinas/jorge/jorge3_mbvsln.mp3'
import audioCarlos from '../assets/guaviare/carlos/carlos1.mp3'
import audioCaceria from '../assets/guaviare/caceria/audio-caceria.mp3';
import audioArteGuaviare from '../assets/guaviare/caceria/audio-arte-sonoro-guaviare.mp3';
import audioGuayabero1 from '../assets/guaviare/guayabero/audio-guayabero1.mp3';
import audioGuayabero2 from '../assets/guaviare/guayabero/audio-guayabero2.mp3';
import audioToninas from '../assets/guaviare/guayabero/audio-toninas.mp3';
import audioMarihuana from '../assets/guaviare/bonanzas/la-marihuana.mp3';
import audioCocaDisney from '../assets/guaviare/bonanzas/la-coca-disney.mp3';
import audioCocaIvan from '../assets/guaviare/bonanzas/la-coca-ivan.mp3';
import audioLaMadera from '../assets/guaviare/bonanzas/la-madera.mp3';

import './Audio.css'

const Audio = ({ titulo, id, autor = '', popup = false }) => {
    const cancionActual = useSelector(state => state.managerReducer.cancionActual);
    const duracion = useSelector(state => state.managerReducer.duracion);
    const dispatch = useDispatch();

    const canvasRef = useRef();
    const audioRef = useRef()
    const frame1 = useRef(0);
    const progressBarRef = useRef();
    const progressLineRef = useRef();


    const [contadorReg, setContadorReg] = useState(0);
    const [audioPos, setAudioPos] = useState(0)

    let audioCtx = null;
    let analyser;
    let gainNode;
    let source;
    let bufferLength;
    let dataArray;
    let canvasCtx;

    const audioS = cancionActual == id ? true : false;

    const escogerCancion = () => {
        if (id == 'jorge1') {
            return audioJorge1
        } else if (id == 'jorge2') {
            return audioJorge2;
        } else if (id == 'jorge3') {
            return audioJorge3
        } else if (id == 'carlos') {
            return audioCarlos
        } else if (id == 'caceria') {
            return audioCaceria
        } else if (id == 'arte-guaviare') {
            return audioArteGuaviare
        } else if (id == 'audio-guayabero1') {
            return audioGuayabero1
        } else if (id == 'audio-guayabero2') {
            return audioGuayabero2
        } else if (id == 'audio-toninas') {
            return audioToninas
        } else if (id == 'audio-marihuana') {
            return audioMarihuana
        } else if (id == 'audio-coca-disney') {
            return audioCocaDisney
        } else if (id == 'audio-coca-ivan') {
            return audioCocaIvan
        } else if (id == 'audio-madera') {
            return audioLaMadera
        }
    }

    const formatTime = (seconds) => {
        let hours = Math.floor(seconds / 3600);
        let minutes = Math.floor((seconds % 3600) / 60);
        let remainingSeconds = Math.floor(seconds % 60);

        // Add leading zeros if necessary
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

        return minutes + ':' + remainingSeconds;
    }

    const animate1 = () => {
        if (audioCtx == null) {
            console.log('creea audio')
            const audioEl = document.createElement('audio');
            audioEl.id = 'audio-el';
            audioEl.controls = true;
            audioEl.src = escogerCancion();
            document.body.appendChild(audioEl);
            audioEl.addEventListener('canplaythrough', () => {
                dispatch(establecerDuracion(audioEl.duration))
            });
            audioEl.play();

            audioRef.current = audioEl;

            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioCtx.createAnalyser();
            gainNode = audioCtx.createGain();
            analyser.fftSize = 2048;
            source = audioCtx.createMediaElementSource(audioEl);
            source.connect(analyser);
            analyser.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            bufferLength = analyser.frequencyBinCount;
            dataArray = new Uint8Array(bufferLength);
        }

        if (canvasCtx == null) {
            canvasCtx = canvasRef.current.getContext("2d");
        }

        analyser.getByteFrequencyData(dataArray);

        canvasCtx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        var barWidth = (600 / bufferLength) * 22 - 1;
        var x = 0;

        for (var i = 0; i < bufferLength; i++) {
            const barHeight = dataArray[i];
            var color = 'rgba(255, 255, 255, 0.4';
            canvasCtx.fillStyle = color;
            canvasCtx.fillRect(x, canvasRef.current.height - barHeight / 2, 4, barHeight / 2);
            x += barWidth;
        }

        frame1.current = requestAnimationFrame(animate1);
    };


    useEffect(() => {
        if (audioS) {
            frame1.current = requestAnimationFrame(animate1);
        } else {
            cancelAnimationFrame(frame1.current);
        }

        return () => {
            cancelAnimationFrame(frame1.current);
        }
    }, [cancionActual]);

    useEffect(() => {
        if (duracion > 0 && audioRef.current) {
            const timer = setInterval(() => {
                setContadorReg(formatTime(duracion - audioRef.current.currentTime));

                if (popup) {
                    const percentage = audioRef.current.currentTime * 100 / duracion;
                    const leftPosPx = progressBarRef.current.offsetWidth * percentage / 100;
                    progressLineRef.current.style.width = leftPosPx + 'px';
                }

            }, 200)

            return () => clearInterval(timer);
        }

    }, [audioRef.current?.currentTime])

    const playAudio = () => {

        dispatch(pararAudios());
        dispatch(establecerDuracion(0));
        setContadorReg(0)

        if (cancionActual == id) {
            dispatch(cambiarCancion(null))

        } else {
            dispatch(cambiarCancion(id))
        }
    }

    const handleOnClose = () => {
        audioRef.current = null;
        dispatch(pararAudios());
    }

    const handleBarraOnClick = (e) => {
        const posLeft = e.target.getBoundingClientRect().x;
        const width = e.target.getBoundingClientRect().width;
        let percentage = (e.pageX - posLeft) * 100 / width;

        if (percentage < 1) {
            percentage = 0;
        }

        const finalPos = percentage * duracion / 100;
        audioRef.current.currentTime = finalPos;
    }

    const pintarMiniPlayer = () => {
        return (
            <div className={audioS ? 'mini-player mostrar' : 'mini-player esconder'}>
                <div className='mini-player-contenedor'>
                    <div className='mini-player-salida'>
                        <img onClick={handleOnClose} src={salida} alt="salida" />
                    </div>
                    <div className='canvas-audio-container'>
                        <canvas ref={canvasRef}></canvas>
                        <div><span>{contadorReg}</span></div>
                    </div>
                    <div className='mini-player-pregress-container'>
                        <div onClick={handleBarraOnClick} className='mini-player-pregress-bar'></div>
                        <div ref={progressBarRef} className='mini-player-pregress-bar-total'>
                            <div ref={progressLineRef} className='mini-player-pregress-line'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='audio-contenedor'>
            <div className='audio-contenedor-interior'>
                <img src={(audioS) ? audioOnImg : audioImg} onClick={() => { playAudio() }} ></img>
                <h3>{titulo}</h3>
            </div>
            {autor != '' && <h4>{autor}</h4>}
            {popup && pintarMiniPlayer()}
            {!popup &&
                <div className={audioS ? 'canvas-audio-container mostrar' : 'canvas-audio-container esconder'}>
                    <canvas ref={canvasRef}></canvas>
                    <div><span>{contadorReg}</span></div>
                </div>
            }
        </div>
    )
}

export default Audio
