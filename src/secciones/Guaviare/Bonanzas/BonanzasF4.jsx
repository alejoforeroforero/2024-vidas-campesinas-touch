import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeVideo, establecerMostrarAbajo } from '../../../Redux/states/managerSlice';
import Audio from '../../../components/Audio'

import delfinImg from '../../../assets/guaviare/guayabero/delfin.png';

import './BonanzasF4.css';

const BonanzasF4 = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeVideo(null))
        dispatch(establecerMostrarAbajo(true));
    }, []);


    return (
        <div className='bonanzas-f4'>
            <div className='bonanzas-f4-fondo'></div>
            <div className='mask-general'>
                <div className="contenido-general">
                    <div className='bonanzas-f4-interior'>
                        <div className='bonanzas-f4-ilustraciones'>
                            <img src={delfinImg} alt="" />
                        </div>
                        <div className='bonanzas-audio-contenedor'>
                            <Audio
                                id='audio-madera'
                                titulo='“Luego se bajó el precio de la coca y ahí se forma la bonanza maderera. Comenzaron a entrar las motosierras...”'
                                autor='- Antonio Molano'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BonanzasF4