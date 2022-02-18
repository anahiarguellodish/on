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
                            <th className='bg-primary text-light text-uppercase text-center p-4' colSpan={2}>ON ALÁMBRICO</th>
                        </tr>
                    </thead>
                     <tbody>
                         <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>CARGOS DE COBRANZA ON</th>
                        </tr>
                        <tr>
                            <td>Cargo por suspensión-reconexión</td>
                            <td>$100</td>
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
                            <td>$100</td>
                        </tr>

                         <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>Cargos por servicio técnico</th>
                        </tr>

                        <tr>
                            <td>Cambio de domicilio (Gastos de reinstalación)</td>
                            <td>$600</td>
                        </tr>

                        <tr className='thead-dark'>
                             <th className='td-title' colSpan={2}>Cargo de componentes por pérdida, daño y/o reparación </th>
                        </tr>

                         <tr>
                            <td>Cambio de modém por pérdida o daño </td>
                            <td>$1,922</td>
                        </tr>

                    </tbody>
            

                

                </table>
            </TocPage>
        </div>
    );
}

export default Prices;
