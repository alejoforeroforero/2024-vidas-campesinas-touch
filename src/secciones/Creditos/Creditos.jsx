import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/generales/logo-accionar.png';
import logo2 from '../../assets/generales/logo-culturas.png';
import logo3 from '../../assets/generales/logo-icanh.png';
import logo4 from '../../assets/generales/logo.png';
import './Creditos.css';

const Creditos = ({ handleShowingMenu }) => {

    const [showCreditos, setShowCreditos] = useState(false);

    return (
        <div className='creditos'>
            <div className='creditos-img'>
                <img src={logo4} alt="" />
            </div>
            <div className='creditos-btn'>
                <hr />
                <button><NavLink onClick={() => handleShowingMenu()} to='/menu'>Inicio</NavLink></button>
            </div>
            <div className='creditos-btn'>
                <hr />
                <button onClick={() => setShowCreditos(!showCreditos)}>Vidas Campesinas</button>
            </div>
            {showCreditos &&
                <div className='creditos-interior'>
                    <div className='creditos-interior-contenido'>
                        <p>
                            En Colombia, el campesinado ha venido reivindicando desde hace más de una década su reconocimiento como sujeto integral de derechos. El Paro Nacional Agrario de 2013, así como las distintas mesas de negociación derivadas con el Estado, pusieron sobre la palestra nacional que campesinas y campesinos no aparecían como tales en los documentos e instrumentos de política pública, como tampoco en las concepciones generales del Estado.
                        </p>
                        <p>
                            La población campesina ha sufrido discriminaciones y exclusiones de larga data, y han sido estas comunidades las más afectadas por el conflicto armado. El 26.2% de la población colombiana se auto-reconoce como campesina.
                        </p>
                        <p>
                            Finalmente, en 2023, Colombia firma la <i>Declaración de Derechos Campesinos y de Otras Personas que Trabajan en las Zonas Rurales de la ONU</i>, y reforma el artículo 64 de la Constitución Política de 1991, que reconoce al campesinado como sujeto de derechos de especial protección. Esto da inicio a una nueva etapa en la historia del campesinado.
                        </p>
                        <p>
                            <i>Vidas campesinas</i> es un proyecto que busca reconocer y potenciar los procesos, las memorias y los aprendizajes de tres experiencias campesinas provenientes de tres departamentos: el Cauca, el Guaviare y el Caquetá. </p>
                        <div className='creditos-logos'>
                            <img src={logo2} alt="logo" />
                            <img src={logo4} alt="logo" />
                            <img src={logo} alt="logo" />
                            <img src={logo3} alt="logo" />
                        </div>
                        <div className='creditos-cerrar'>
                            <span onClick={()=>setShowCreditos(false)}>Cerrar</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Creditos