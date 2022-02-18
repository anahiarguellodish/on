import React from 'react';
import $ from 'jquery';

import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';

import '../css/prices.css';

import aviso29 from '../media/Aviso Importante 29jul21.pdf';
import aviso30 from '../media/AVISO IMPORTANTE_ONInternet2022.pdf';


const Prices = props =>
{


    return (
        <div id='prices' className='container-fluid p-4'>
            <TocPage history={props.history} links={getLegalLinks()}>
                <h3>AVISO</h3>

                <p><a href={aviso30} target='_blank'>Ajuste en tarifas ON Inalámbrico a partir del 4 de febrero 2022</a></p>
                <p><a href={aviso29} target='_blank'> Ajuste en tarifas ON Inalámbrico a partir del 1 de septiembre de 2021</a></p>
               
            </TocPage>
        </div>
    );
}

export default Prices;
