import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeVideo, establecerMostrarAbajo } from '../../../Redux/states/managerSlice';
import Audio from '../../../components/Audio'

import './BonanzasF3.css';

const BonanzasF3 = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeVideo(null))
        dispatch(establecerMostrarAbajo(false));
    }, []);


    return (
        <div className='bonanzas-f3'>
            <div className='bonanzas-f3-fondo'></div>
            <div className='mask-general'>
                <div className="contenido-general">
                    <div className='bonanzas-f3-interior'>
                        <div className='bonanzas-audio-contenedor1'>
                            <Audio
                                id='audio-coca-disney'
                                titulo='“Cuando se creció más el Raudal, fue cuando hubo coca. Creíamos que eso nunca se iba a acabar”.'
                                autor='- Disney Ardila'
                            />
                        </div>
                        <div className='bonanzas-audio-contenedor2'>
                            <Audio
                                id='audio-coca-ivan'
                                titulo='“Los que compraban la mercancía eran los ‘Chichipatos’. Cuando ellos llegaban, yo ayudaba a sacar las lonas de plata”.'
                                autor='- Iván Ramírez'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BonanzasF3