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
                            <th className='bg-primary text-light text-uppercase text-center p-4' colSpan={2}>ON Inalámbrico Planes Postpago + AMAZON PRIME </th>
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
                            <td>Segundo cambio de domicilio en adelante</td>
                            <td>$100</td>
                        </tr>

                        <tr>
                            <td>Visita en falso por servicio técnico solicitado </td>
                            <td>$100</td>
                        </tr>

                        <tr>
                            <td>Visita servicio técnico fuera de garantía </td>
                            <td>$100</td>
                        </tr>

                        <tr>
                            <td>*Visita para reposición de equipo terminal (Módem) por robo </td>
                            <td>$100</td>
                        </tr>

                        <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>Cargo de componentes por pérdida, daño y/o reparación (Fuera de garantía)</th>
                        </tr>

                         <tr>
                            <td>Equipo terminal (Modém) por pérdida / maltrato / falla </td>
                            <td>$2,230</td>
                        </tr>

                        <tr>
                            <td>Reposición de eliminador de corriente eléctrica por pérdida / maltrato / falla</td>
                            <td>$100</td>
                        </tr>
                       
                       

                    </tbody>
                </table>

                 <p>*Se requiere comprobante de denuncia correspondiente ante Ministerío Público.</p>


                 

                

            </TocPage>
        </div>
    );
}

export default Prices;
