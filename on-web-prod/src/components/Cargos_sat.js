import React from 'react';
import $ from 'jquery';

import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';

import '../css/prices.css';



// class Prices extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//     }

//     componentDidMount() {
//         function test(){
//             alert("test");
//         }
//     }
// }



const Prices = props =>
{


    return (
        <div id='prices' className='container-fluid p-4'>
            <TocPage history={props.history} links={getLegalLinks()}>
               

                 <table>
                     <thead>
                        <tr>
                            <th className='bg-primary text-light text-uppercase text-center p-4 titulo_verde'  colSpan={2}>ON INTERNET</th>
                        </tr>
                        <tr>
                            <th className='bg-primary text-light text-uppercase text-center p-4' colSpan={2}>ON SATELITAL</th>
                        </tr>
                    </thead>
                     <tbody>
                        <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>CARGOS DE COBRANZA ON</th>
                        </tr>
                        <tr>
                            <td>Cargo por suspensión-reconexión</td>
                            <td>$50</td>
                        </tr>

                         <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>Cargos de cobranza On Internet + TV DISH</th>
                        </tr>
                        
                        <tr>
                            <td>Cargo por pago tardío</td>
                            <td>$39</td>
                        </tr>

                        <tr>
                            <td>Cargo por suspensión-reconexión</td>
                            <td>$56</td>
                        </tr>

                         <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>Cargos por servicio técnico</th>
                        </tr>

                        <tr>
                            <td>Costo de visita por servicio técnico</td>
                            <td>$405</td>
                        </tr>

                        <tr>
                            <td>Costo por distancia y acceso: km recorrido a partir de la base de Dish al domicilio </td>
                            <td>$4</td>
                        </tr>

                        <tr>
                            <td>Cambio de lugar de módem</td>
                            <td>$324</td>
                        </tr>

                        <tr>
                            <td>Cambio de lugar de antena</td>
                            <td>$324</td>
                        </tr>

                        <tr>
                            <td>Reinstalación y/o reorientación de antena</td>
                            <td>$325</td>
                        </tr>

                        <tr>
                            <td>Reinstalación de sistema</td>
                            <td>$613</td>
                        </tr>
                        <tr>
                            <td>Cambio de domicilio</td>
                            <td>$317</td>
                        </tr>

                        <tr>
                            <td>*Reposición equipo terminal por robo</td>
                            <td>$357</td>
                        </tr>
                        <tr>
                            <td>Cambio de cableado (30m )</td>
                            <td>$338</td>
                        </tr>

                        <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>Cargo de componentes por pérdida, daño y/o reparación (Fuera de garantía)</th>
                        </tr>

                         <tr>
                            <td>Módem satelital</td>
                            <td>$5,085</td>
                        </tr>
                        <tr>
                            <td>Antena</td>
                            <td>$2,065</td>
                        </tr>
                        <tr>
                            <td>LNB/Transceiver</td>
                            <td>$1,600</td>
                        </tr>

                        <tr>
                            <td>Cableado por servicio técnico (hasta 30 metros)</td>
                            <td>$270</td>
                        </tr>
                         <tr>
                            <td>Metro adicional de cable</td>
                            <td>$18</td>
                        </tr>
                        <tr>
                            <td>Router Wifi</td>
                            <td>$400</td>
                        </tr>
                        <tr>
                            <td>Base antena</td>
                            <td>$350</td>
                        </tr>
                        

                    </tbody>
                </table>

                  <p>*Se requiere comprobante de denuncia correspondiente ante Ministerío Público.</p>


            </TocPage>
        </div>
    );
}

export default Prices;
