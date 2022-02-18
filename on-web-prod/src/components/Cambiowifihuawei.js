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
                <h3>ON INALÁMBRICO</h3>

               
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=bamJc113NYg">Cómo cambiar la contraseña de mi WIFI si tengo módem Huawei 310</a></li>


                </ul>


               
               
            </TocPage>
        </div>
    );
}

export default Prices;
