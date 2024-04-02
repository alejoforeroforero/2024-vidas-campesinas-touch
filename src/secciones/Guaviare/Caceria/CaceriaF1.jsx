import './CaceriaF1.css';
import hojaTop from '../../../assets/guaviare/caceria/hoja1.png';
import danta from '../../../assets/guaviare/caceria/jaguar2.png';
import hojaB from '../../../assets/guaviare/caceria/hoja2.png';

const CaceriaF1 = () => {

    return (
        <div className='caceria-f1'>
            <div className='caceria-f1-fondo'></div>
            <div className='mask-general'>
                
                <div className='caceria-f1-contenido'>
                    <div className='caceria-f1-top'>
                        <img src={hojaTop} alt="" />
                    </div>
                    <div className='caceria-f1-titulo'>
                        <h1>En los tiempos de la cacería</h1>
                        <hr />
                    </div>
                    <div className='caceria-f1-bottom'>
                        <img className='danta' src={danta} alt='danta' />
                        <img className='hoja-b' src={hojaB} alt='danta' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaceriaF1