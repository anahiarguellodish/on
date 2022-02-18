import React from 'react';
import $ from 'jquery';

import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';

import '../css/prices.css';


import contrato233 from '../media/SOLICITUD CARATULA Satelital 234-2020.pdf';
import contrato270 from '../media/SOLICITUD CARATULA Satelital 269-2020.pdf';


const Prices = props =>
{


    return (
        <div id='prices' className='container-fluid p-4'>
            <TocPage history={props.history} links={getLegalLinks()}>
                <h3>SOLICITUD</h3>


                {/* <p><a href={contrato233} target='_blank'>Solicitud de servicios y/o Carátula: 234-2020</a></p> */}
                <p><a href={contrato270} target='_blank'>Solicitud de servicios y/o carátula de contrato de Adhesión de Telecomunicaciones ON Internet 269-2020</a></p>

               


               
               
            </TocPage>
        </div>
    );
}

export default Prices;
