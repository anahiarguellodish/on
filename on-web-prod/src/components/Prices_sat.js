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
               <h3>COSTO POR COMPONENTES</h3>


       


                   <table>
                     <thead>
                        <tr>
                            <th className='bg-primary text-light text-uppercase text-center p-4' colSpan={2}>ON SATELITAL</th>
                        </tr>
                        <tr>
                            <th className="cabezal"  scope="col">COMPONENTES</th>
                            <th className="cabezal"  scope="col">COSTO</th>
                        </tr>
                    </thead>
                     <tbody>
                        <tr>
                            <td>Módem Satelital</td>
                            <td> $5,085</td>
                        </tr>
                        <tr>
                            <td>Antena</td>
                            <td>$2,065</td>
                        </tr>
                        <tr>
                            <td>LNB Transceiver</td>
                            <td>$1,600</td>
                        </tr>
                        <tr>
                            <td>Router WiFi</td>
                            <td>$400</td>
                        </tr>

                        <tr>
                            <td>Base de Antena</td>
                            <td>$350</td>
                        </tr>

                        <tr>
                            <td><strong>TOTAL</strong></td>
                            <td>$9,500</td>
                        </tr>


                    </tbody>
                </table>

                <p>En caso de cancelar el servicio, el Cliente deberá entregar todos componente (s) y/o equipo (s) a COFRESA, en caso de no devolverlos o entregarlo (s) en condiciones normales de uso, deberá pagar el costo de (los) mismo (s) (IVA incluido) de acuerdo al plan y tecnología contratada.</p>
                <p>* Aplica por daño ocasionado por negligencia y/o robo.</p>

                

            </TocPage>
        </div>
    );
}

export default Prices;
