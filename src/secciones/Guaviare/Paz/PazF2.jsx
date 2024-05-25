import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { establecerMostrarAbajo } from '../../../Redux/states/managerSlice'
import Audio from '../../../components/Audio'
const libelula = 'https://res.cloudinary.com/dbqfefibl/image/upload/v1713229870/assets/home/libelula_mze5lz.png';
import planta from '../../../assets/guaviare/paz/planta-1.png';

import './PazF2.css';

const PazF2 = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(establecerMostrarAbajo(false));
    }, []);


    return (
        <>
            <div className='paz-f2'>

            </div>
            <div className='mask-general'>
                <div className="contenido-general">
                    <div className='paz-f2-interior'>
                        <div className='paz-f2-audio-contenedor1'>
                            <Audio
                                id='audio-paz-1'
                                titulo='“Ahora vivimos la tranquilidad. Hay mejores ingresos y menos zozobra”.'
                                autor='· Jorge Cano'
                            />
                        </div>
                        <div className='paz-f2-ilustraciones'>
                            <img className='paz-f2-planta' src={planta} alt="planta" />
                            <img className='paz-f2-libelula' src={libelula} alt="libelula" />
                        </div>
                        <div className='paz-f2-audio-contenedor2'>
                            <Audio
                                id='audio-paz-2'
                                titulo='“El proceso de paz hizo que fuéramos visibles”.'
                                autor='· Disney Ardila'
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PazF2