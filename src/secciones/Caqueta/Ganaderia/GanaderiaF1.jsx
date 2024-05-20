import { useDispatch } from 'react-redux';
import { establecerMostrarAbajo } from '../../../Redux/states/managerSlice';
import './GanaderiaF1.css';
import grafica from '../../../assets/caqueta/ganaderia/ganado-1.png';
// import danta from '../../../assets/guaviare/ganaderia/jaguar2.png';
// import hojaB from '../../../assets/guaviare/ganaderia/hoja2.png';
import { useEffect } from 'react';

const EstigmaF1 = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(establecerMostrarAbajo(false));
    }, [])

    return (
        <div className='ganaderia-f1'>
            <div className='ganaderia-f1-fondo'></div>
            <div className='mask-general'>                
                <div className='contenido-general ganaderia-f1-contenedor'>
                    <div className='ganaderia-f1-titulo'>
                        <h2>El ganado <br></br>y los suelos</h2>
                        <hr />
                    </div>
                    <div className='ganaderia-f1-bottom'>
                        <img className='ganaderia-f1-grafica' src={grafica} alt='grafica' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EstigmaF1