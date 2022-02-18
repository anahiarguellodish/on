import React from 'react';
import $ from 'jquery';

import TocPage from './generic/TocPage';
import soportelinks from './Legal/soportelinks';

import '../css/prices.css';





const Prices = props =>
{


    return (
        <div id='prices' className='container-fluid p-4'>
            <TocPage history={props.history} links={soportelinks()}>
                <h3>ON ALÁMBRICO</h3>

                <p>Preparamos unos videos para ti:</p>

                <ul>
                    <li><a href="https://www.youtube.com/watch?v=9Z_rolcfE9g">Clase rápida de ON Alámbrico</a></li>
                    <li><a href="https://www.youtube.com/watch?v=1fT-w7PJAoQ">Así funciona ON Alámbrico</a></li>


                </ul>


               
               
            </TocPage>
        </div>
    );
}

export default Prices;
