import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { establecerMostrarAbajo } from '../../../Redux/states/managerSlice'
import Audio from '../../../components/Audio'
import ave from '../../../assets/guaviare/paz/ave-2.png';
import planta from '../../../assets/guaviare/paz/planta-2.png';

import './PazF3.css';

const PazF3 = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(establecerMostrarAbajo(true));
    }, []);


    return (
        <>
            <div className='paz-f3'>

            </div>
            <div className='mask-general'>
                <div className="contenido-general">
                    <div className='paz-f3-interior'>
                        <div className='paz-f3-ilustraciones'>
                            <img className='paz-f3-ave' src={ave} alt="ave" />
                            <img className='paz-f3-planta' src={planta} alt="planta" />
                        </div>
                        <div className='paz-f3-audio-contenedor2'>
                            <Audio
                                id='audio-paz-3'
                                titulo='“Con el proceso de paz, el Guaviare se consolida como destino turístico emergente. Ha sido muy interesante regresar a apoyar a mi comunidad”.'
                                autor='- Leiver Pabón'
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PazF3