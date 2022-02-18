import React from 'react';

import Tabs from './Packs/Tabs';
import Page from './Packs/Page_Maps';
import Pack from './Packs/Maps';
import inalambrico from '../media/inalambrico_blanco.png';
import alambrico from '../media/alambrico_blanco.png';
import satelital from '../media/satelital_blanco.png';


const Maps = () =>
{
  /*
  <div className='row'>
                <div className='col-8 p-0 center'>
                    <Button path='/contrata' label="DÉJANOS TUS DATOS AQUÍ"/>
                    <div className="my-4  text-center font-s text-gray">o llámanos al <span className="numero font-m">55 55 123 123</span></div>
                </div>
        </div>
        Inalambrico<img src={satelital} alt="internet satelital"/> 
  */ 
    const inicio =  [];
    const labels = ['On Inalámbrico', 'On Alámbrico', 'On Satelital'];

    const page0 =
        <Page
            cols={4}   
            packs={[


                <Pack
                url="cobertura_inalambrico"
                imagen={<img alt="Inalambrico" src={inalambrico}  />}
                 header=' EL INTERNET FÁCIL QUE CONECTAS Y USAS'
                
                 leyenda="*Todos los paquetes están sujetos a condiciones técnicas y disponibilidad de cobertura"
                    
                />
            ]}
   
        />;

    const page1 =
        <Page
            cols={4}
            /*header={
                <div>
                    <div>Te ponemos <b>ON</b> a gran velocidad con capacidad ilimitada a través de Internet por cable de cobre.</div>
                    <div className='font-m text-secondary text-uppercase mt-3'><u>Pago Inicial: $800</u></div>
                </div>
            }*/
            packs={[
                <Pack
                url="cobertura_alambrico"
                imagen={<img alt="Alambrico" src={alambrico}  />}
                header=' COBERTURA A NIVEL NACIONAL.'
                leyenda2={<p className="my-4  text-center font-s" >Sujeto a disponibilidad de facilidades técnicas.</p>}
                /*data_table={<tbody>
                    <tr>
                      <td class="sub-title">Estados / Ciudades</td>
                      <td class="sub-title">Ciudad</td>
                    </tr>
                    <tr>
                      <td>Baja California Sur</td>
                      <td>La Paz</td>
                    </tr>
                    <tr>
                      <td>Sonora</td>
                      <td>Hermosillo</td>
                    </tr>
                    <tr>
                      <td>Chihuahua</td>
                      <td>Cd. Juarez</td>
                    </tr>
                    <tr>
                      <td>Sinaloa</td>
                      <td>Culiaca, Los Mochis</td>
                    </tr>
                    <tr>
                      <td>Veracruz</td>
                      <td>Veracruz</td>
                    </tr>
                    <tr>
                      <td>Yucat&aacute;n</td>
                      <td>M&eacute;rida</td>
                    </tr>
                    <tr>
                      <td>M&eacute;xico</td>
                      <td>CDMX</td>
                    </tr>
                    <tr>
                      <td>Estado de México</td>
                      <td>Estado de México</td>
                    </tr>
                  </tbody>}*/
                    
                />
            ]}
        />;

    const page2 =
        <Page
            cols={4}
            /*header={
                <div className='pack-font-m'>Ponemos <b>ON</b> a las zonas OFF con un servicio de Internet Satelital en áreas con difícil acceso a Internet para que todos estemos conectados.</div>
            }*/
            packs={[
                
                <Pack
                url="cobertura_satelital"
                imagen={<img alt="Satelital" src={satelital}  />}
                header=' TE PONEMOS ON NO IMPORTA ONDE ANDES'
                  
                    leyenda="*Todos los paquetes están sujetos a condiciones técnicas y disponibilidad de cobertura"
                />
            ]}
          
        />;

    const pages = [page0, page1, page2];

    return (
        <Tabs id='maps' labels={labels} pages={pages} inicio={inicio}/>
    );
}

export default Maps;
