import React from 'react';
import $ from 'jquery';

import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';

import '../css/prices.css';


import contrato233 from '../media/SOLICITUD CARATULA prepago 223-2020.pdf';


const Prices = props =>
{


    return (
        <div id='prices' className='container-fluid p-4'>
            <TocPage history={props.history} links={getLegalLinks()}>
                <h3>SOLICITUD</h3>


                <p><a href={contrato233} target='_blank'>Solicitud de servicios y/o carátula del contrato de Adhesión de Telecomunicaciones ON Internet 223-2020</a></p>

               


               
               
            </TocPage>
        </div>
    );
}

export default Prices;
