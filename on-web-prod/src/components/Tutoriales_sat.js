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
                <h3>ON SATELITAL</h3>

                <p>Preparamos unos videos para ti:</p>

                <ul>
                    <li><a href="https://www.youtube.com/watch?v=YYhyUSKadHw">ON Satelital</a></li>
                    <li><a href="https://www.youtube.com/watch?v=YcYPFRfzM1U">ON Satelital (es otro video)</a></li>
                    <li><a href="https://www.youtube.com/watch?v=rHrig3UnM8c">Te enseñamos cúal es la diferencia entre velocidad y capacidad</a></li>
                    <li><a href="https://www.youtube.com/watch?v=lIBuCC7gIHo">¿Sabes qué es velocidad reducida?</a></li>


                </ul>


               
               
            </TocPage>
        </div>
    );
}

export default Prices;
