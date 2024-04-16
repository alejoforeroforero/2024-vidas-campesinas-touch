import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { establecerMostrarAbajo } from '../../../Redux/states/managerSlice'
import Audio from '../../../components/Audio'
import grafica from '../../../assets/guaviare/guardianes/grafica.png';


import './GuardianesF2.css';

const GuardianesF2 = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(establecerMostrarAbajo(false));
    }, []);


    return (
        <>
            <div className='guardianes-f2'>

            </div>
            <div className='mask-general'>
                <div className="contenido-general">
                    <div className='guardianes-f2-interior'>
                        <div className='guardianes-f2-audio-contenedor1'>
                            <Audio
                                id='audio-guardianes-1'
                                titulo='“Somos únicos en el mundo en pinturas rupestres”.'
                                autor='- Norbey Méndez'
                            />
                        </div>
                        <div className='guardianes-f2-ilustraciones'>
                            <img className='guardianes-f2-grafica' src={grafica} alt="grafica" />
                        </div>
                        <div className='guardianes-f2-audio-contenedor2'>
                            <Audio
                                id='audio-guardianes-2'
                                titulo='“Cuidamos y preservamos este lugar. Somos guardianes de ese Yuruparí que está plasmado en las pinturas”.'
                                autor='- Disney Ardila'
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default GuardianesF2