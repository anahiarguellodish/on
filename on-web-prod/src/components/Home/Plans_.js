import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
// import egoLogo from '../../media/ego_logo.png';
import promo from '../../media/dishon_promo.png';
import inalambrico from '../../media/inalambrico-internet.png';
import alambrico from '../../media/alambrico-internet.png';
import satelital from '../../media/satelital-internet.png';
import Tabs from '../Packs/Tabs';
import Page from '../Packs/Page';
import Pack from '../Packs/Pack';

const Button = withRouter(props => (
    <button
        className='btn btn-secondary btn-lg d-block text-bold'
        onClick={() => props.history.push(props.path)}
    >
        {props.label}
    </button>
))

const Packs = () =>
{
    const labels = ['On Inalámbrico', 'On Alámbrico', 'On Satelital'];

    const page0 =
        <Page
            cols={2}
            header={
              
                <span className='pack-font-m'>
                <img src={inalambrico} alt="inalambrico"/>
                El Internet Fácil que conectas y usas
                </span>
               
            }
            packs={[
                <Pack
                    megas='5'
                    megasUnit={<div>
                        <div>MEGAS</div>
                        <div className='font-s'>Capacidad de 60 GB</div>
                        <div className='espacio-blanco'></div>
                        <div className='font-s'>Conecta 2 dispositivos simultáneos</div>
                   
                        <div className='font-s'></div>
                    </div>}
                    price='199' priceUnit='$'
                    pricePost={<div>
                        <div>AL MES</div>
                        <div className='font-s'>Suscripción de $2,000 en una exhibición.</div>
                    </div>}
                    buttonLabel='CONTRATA' buttonPath='/contrata'
                />,
                <Pack
                    megas='10'
                    megasUnit={<div>
                        <div>MEGAS</div>
                        <div className='font-s'>Capacidad de 100 GB</div>
                         <div className='espacio-blanco'></div>
                        <div className='font-s'>Conecta 3 dispositivos simultáneos</div>
                    </div>}
                    price='349' priceUnit='$'
                    pricePost={<div>
                        <div>AL MES</div>
                        <div className='font-s'>Suscripción de $2,000 en una exhibición.</div>
                    </div>}
                    buttonLabel='CONTRATA' buttonPath='/contrata'
                />,
                <Pack
                    megas='20'
                    megasUnit={<div>
                        <div>MEGAS</div>
                        <div className='font-s'>Capacidad de 150 GB</div>
                         <div className='espacio-blanco'></div>
                        <div className='font-s'>Conecta 4 dispositivos simultáneos</div>
                    </div>}
                    price='599' priceUnit='$'
                    pricePost={<div>
                        <div>AL MES</div>
                        <div className='font-s'>Suscripción de $2,000 en una exhibición.</div>
                    </div>}
                    buttonLabel='CONTRATA' buttonPath='/contrata'
                />,
                 <Pack
                    megas='5'
                    megasUnit={<div>
                        <div>MEGAS</div>
                        <div className='font-s'>Capacidad de 60 GB</div>
                        <div className='espacio-blanco'></div>
                        <div className='font-s'>Conecta 2 dispositivos simultáneos</div>
                   
                        <div className='font-s'></div>
                    </div>}
                    price='249' priceUnit='$'
                    pricePost={<div>
                        <div>AL MES</div>
                        <div className='font-s'>Suscripción de $600 en una exhibición.</div>
                    </div>}
                    buttonLabel='CONTRATA' buttonPath='/contrata'
                />,
                <Pack
                    megas='10'
                    megasUnit={<div>
                        <div>MEGAS</div>
                        <div className='font-s'>Capacidad de 100 GB</div>
                         <div className='espacio-blanco'></div>
                        <div className='font-s'>Conecta 3 dispositivos simultáneos</div>
                    </div>}
                    price='399' priceUnit='$'
                    pricePost={<div>
                        <div>AL MES</div>
                        <div className='font-s'>Suscripción de $600 en una exhibición.</div>
                    </div>}
                    buttonLabel='CONTRATA' buttonPath='/contrata'
                />,
                <Pack
                    megas='20'
                    megasUnit={<div>
                        <div>MEGAS</div>
                        <div className='font-s'>Capacidad de 150 GB</div>
                         <div className='espacio-blanco'></div>
                        <div className='font-s'>Conecta 4 dispositivos simultáneos</div>
                    </div>}
                    price='649' priceUnit='$'
                    pricePost={<div>
                        <div>AL MES</div>
                        <div className='font-s'>Suscripción de $600 en una exhibición.</div>
                    </div>}
                    buttonLabel='CONTRATA' buttonPath='/contrata'
                />
            ]}
            footer={
                <div className='font-m'>

                    <br/>
                    <div className='container-fluid title-above-borders'>
                        <h2 className='font-bold text-primary bg-light'>OPCIONES DE SUSCRIPCIÓN</h2>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <h3 className='text-primary font-bold bullet'>Suscripción</h3>
                                    <h4 className='font-book'>$2,000 en una sola exhibición</h4>
                                    <h5>Efectivo, tarjeta de débito o crédito</h5>
                                    <h3 className='font-bold text-uppercase text-secondary'>¡CONTRATA Y PAGA MENOS EN TU MENSUALIDAD!</h3>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <h3 className='text-primary font-bold bullet'>Suscripción</h3>
                                    <h4 className='font-book'>$600 en una exhibición</h4>
                                    <h5>Efectivo, tarjeta de crédito o débito</h5>
                                </div>
                            </div>
                        </div>
                        <small>*Todos los paquetes están sujetos a condiciones técnicas y disponibilidad de cobertura</small>
                         <small> 
                    <ul>
                        <li>Cada paquete cuenta con una capacidad de Gigabytes (GB) que se consumen conforme las actividades en Internet que realices.</li>
                        <li>Al alcanzar el límite de capacidad (GB), podrás seguir navegando a una velocidad de 300 kbps; si deseas volver a navegar a la velocidad contratada podrás realizar recargas de Capacidad (GB). Consúltalas en la sección de recargas.</li>
                        <li>Es un servicio de internet fijo que no puedes sacar de tu casa. Si lo llevas a otro domicilio, el servicio será suspendido. </li>   
                    </ul>

                    </small>
                    </div>
                    <div className='my-4 font-s text-gray'>
                       Vigencia válida al 30 de Septiembre de 2019. Sujetos a cambio con previa autorización de la Autoridad Competente. Cada paquete cuenta con una Capacidad específica: 5 megas con 60 GB, 10 megas con 100 GB y 20 Megas con 150 GB. Al término de la Capacidad, el usuario podrá seguir navegando a una velocidad de 300 kbps con una disponibilidad de 60 GB de capacidad.
                        </div>


                  <br/>
                   <div className="BotonContacto">
                       <a className="btn btn-secondary btn-lg d-block text-bold" href='https://ventasweb.dish.com.mx/paquetes.php?tab_paquete=paq_television_internet&modal=activo' label="">Si quieres contratar ON con TV Dish da clic aquí</a>  
                    </div>
                    
                </div>

            }
        />;

    const page1 =
        <Page
            cols={3}
            header={
                <div>
                    <div className='pack-font-m'><img src={alambrico} alt="inalambrico"/> Si tus ganas de navegar no tienen límites, te ponemos <b>ON</b> con estos paquetes.</div>
                    <div>Internet por cable de cobre o fibra óptica para alcanzar grandes velocidades de navegación.</div>
                    <br/>         
                    <div className='font-bold'><u>Pregunta por las promociones de suscripción que tenemos para ti</u></div>
                </div>
            }
            packs={[
                <Pack
                    megas='10' megasUnit='MEGAS'
                    price='349' priceUnit='$'
                    buttonLabel='CONTRATA' buttonPath='/contrata'
                    pricePost={<div>
                        <div>AL MES</div>
                    </div>}
                />,
                <Pack
                    megas='20' megasUnit='MEGAS'
                    price='399' priceUnit='$'
                    buttonLabel='CONTRATA' buttonPath='/contrata'
                    pricePost={<div>
                        <div>AL MES</div>
                    </div>}
                />,
                   
                 <Pack
                    megas='50' megasUnit='MEGAS'
                    price='649' priceUnit='$'
                    buttonLabel='CONTRATA' buttonPath='/contrata'
                    pricePost={<div>
                        <div>AL MES</div>
                    </div>}
                />,
                   
                 <Pack
                    megas='100' megasUnit='MEGAS'
                    price='899' priceUnit='$'
                    buttonLabel='CONTRATA' buttonPath='/contrata'
                    pricePost={<div>
                        <div>AL MES</div>
                    </div>}
                />,
            ]}
            footer={
                <div className='container-fluid font-m'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <span>Todos los paquetes están sujetos a condiciones técnicas y disponibilidad de cobertura.</span>
                        </div>
                
                
                

                    </div>
                
                 <div className='my-4 font-s text-gray text-center'>
                    Vigencia válida al 30 de Septiembre de 2019. Sujetos a cambio con previa autorización de la Autoridad Competente.
                </div>
                <div className="BotonContacto">
                       <a className="btn btn-secondary btn-lg d-block text-bold" href='https://ventasweb.dish.com.mx/paquetes.php?tab_paquete=paq_television_internet&modal=activo' label="">Si quieres contratar ON con TV Dish da clic aquí</a>  
                    </div>
                    
                </div>
                
               
            }
        />;
        
        
    const page2 =
        <Page
            cols={2}
            header={
                <div className='pack-font-m'> 
                <img src={satelital} alt="internet satelital"/> Te ponemos <b>ON</b>  no importa <b>ON</b>de andes.
                <br/>
                El internet vía satélite diseñado para zonas difíciles de alcanzar con otro tipo de internet.
                </div>
               
            }
            packs={[
                   
                     
                   
                <Pack
                    megas='2.5' megasUnit='MEGAS'
                    buttonLabel='CONOCE MÁS' buttonPath='/contrata'
                    capacidad='CAPACIDAD 5 GB'
                    price='819' priceUnit='$'
                    pricePost={<div>
                        <div>al mes</div>
                    </div>}
                />,
                <Pack
                    megas='5' megasUnit='MEGAS'
                    buttonLabel='CONOCE MÁS' buttonPath='/contrata'
                    capacidad='CAPACIDAD 10 GB'
                    price='1019' priceUnit='$'
                    pricePost={<div>
                        <div>al mes</div>
                    </div>}
                />,
                <Pack
                    megas='10' megasUnit='MEGAS'
                    buttonLabel='CONOCE MÁS' buttonPath='/contrata'
                    capacidad='CAPACIDAD 20 GB'
                    price='1499' priceUnit='$'
                    pricePost={<div>
                        <div>al mes</div>
                    </div>}
                />,
                <Pack
                    megas='20' megasUnit='MEGAS'
                    buttonLabel='CONOCE MÁS' buttonPath='/contrata'
                    capacidad='CAPACIDAD 40 GB'
                    price='2199' priceUnit='$'
                    pricePost={<div>
                        <div>al mes</div>
                    </div>}
                />,
                <Pack
                    megas='30' especial={<span className="font-m">*</span>} megasUnit='MEGAS'
                    buttonLabel='CONOCE MÁS' buttonPath='/contrata'
                    capacidad='CAPACIDAD 50 GB'
                    price='3699' priceUnit='$'
                    pricePost={<div>
                        <div>al mes</div>
                    </div>}
                />,
                <Pack
                    megas='30' especial={<span className="font-m">*</span>} megasUnit='MEGAS'
                    buttonLabel='CONOCE MÁS' buttonPath='/contrata'
                    capacidad='CAPACIDAD 100 GB'
                    price='6499' priceUnit='$'
                    pricePost={<div>
                        <div>al mes</div>
                    </div>}
                />
            ]}
            /*Navega libremente sin consumir tu capacidad de GB. Las actividades que consumirán tu capacidad de GB son únicamente las plataformas de streaming, para ver videos y escuchar música, y las descargas y subidas de documentos.*/
//<div>Navega libremente sin consumir tu capacidad de GB. Las plataformas de streaming, ver videos, escuchar música y las descargas y subidas de documentos son las actividades que consumirán tu capacidad de GB.</div>
            footer={
                <div className='lh-1-5 font-m'>
                        
                      <div className="BotonContacto">
                      <Button path='/contrata' label="DÉJANOS TUS DATOS AQUÍ"/>
                    
                    </div>
                    <br/>
                    <div>NAVEGACIÓN ILIMITADA**</div>
                    <div>Navega libremente sin consumir tu capacidad de GB. Las actividades que consumirán tu capacidad de GB son únicamente las plataformas de streaming, para ver videos y escuchar música, y las descargas y subidas de documentos.</div>
                    <br/>
                    <div>FREE ZONE: Cuentas con 8 horas para que disfrutes de internet realizando tus actividades favoritas sin consumir tu capacidad de GB. El horario va de 12 am a 8 am.</div>
                    <br/>
                    <div className='my-4 font-s text-gray'>
                    Planes empresariales*
                    <br/>
                    Todos los paquetes están sujetos a condiciones técnicas y disponibilidad de cobertura.
                    <br/>
                    Al alcanzar el límite de capacidad del paquete contratado, podrás seguir navegando pero a una velocidad de 300 kbps. Si deseas regresar a la velocidad contratada, podrás realizar una recarga de GB. Las recargas no son acumulables. Vigencia válida al 30 de Septiembre de 2019.
                    <br/>
                    Sujetos a cambio con previa autorización de la Autoridad Competente.
                    <br/>
                    **No aplica para los paquetes de hasta 30 megas.
                    <br/>
                    **Plazo forzoso en ON Satelital de 24 meses.

                </div>
                    <div className="BotonContacto">
                      <a className="btn btn-secondary btn-lg d-block text-bold" href='https://ventasweb.dish.com.mx/paquetes.php?tab_paquete=paq_television_internet&modal=activo' label="">Si quieres contratar ON con TV Dish da clic aquí</a>  
                    </div>
                    
                     
                </div>


            }
        />;

    const pages = [page0, page1, page2];

    return (
        <Tabs id='packs' labels={labels} pages={pages} />

    );
}

export default Packs;
