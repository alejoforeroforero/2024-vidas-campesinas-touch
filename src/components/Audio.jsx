import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cambiarCancion, pararAudios } from '../Redux/states/managerSlice';
import audioOnImg from '../assets/generales/audio-on.png';
import audioImg from '../assets/generales/audio.png';
import audioJorge1 from '../assets/guaviare/jorge/jorge1.mp3';
import audioJorge2 from '../assets/guaviare/jorge/jorge2.mp3';
import audioJorge3 from '../assets/guaviare/jorge/jorge3.mp3';
import './Audio.css'


const Audio = ({ titulo, id }) => {
    const cancionActual = useSelector(state => state.managerReducer.cancionActual);

    const dispatch = useDispatch();

    const canvasRef = useRef();
    const frame1 = useRef(0);

    let audioCtx = null;
    let analyser;
    let gainNode;
    let source;
    let bufferLength;
    let dataArray;
    let canvasCtx;

    let counter = 0;

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

    const animate1 = () => {

        counter++;

        if (audioCtx == null) {

            const audioEl = document.createElement('audio');
            audioEl.src = escogerCancion();
            document.body.appendChild(audioEl);
            audioEl.play();
            

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


    const playAudio = () => {

        dispatch(pararAudios());

        if (cancionActual == id) {
            dispatch(cambiarCancion(null))

        } else {
            dispatch(cambiarCancion(id))
        }
    }

    return (
        <div className='audio-contenedor'>
            <div>
                <img src={(audioS) ? audioOnImg : audioImg} onClick={() => { playAudio() }} ></img>
                <h3>{titulo}</h3>
            </div>
            <canvas className={audioS ? 'mostrar' : 'esconder'} ref={canvasRef}></canvas>
        </div>
    )
}

export default Audio