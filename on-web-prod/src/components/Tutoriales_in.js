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

                <p>Preparamos unos videos para ti:</p>

                <ul>
                    <li><a href="https://www.youtube.com/watch?v=9dBf32ZzME0">¿A dónde puedo mover mi módem de ON Inalámbrico?</a></li>
                    <li><a href="https://www.youtube.com/watch?v=rHrig3UnM8c">Te enseñamos cuál es la diferencia entre velocidad y capacidad</a></li>
                    <li><a href="https://www.youtube.com/watch?v=lIBuCC7gIHo">¿Sabes qué es velocidad reducida?</a></li>
                    <li><a href="https://www.youtube.com/watch?v=bamJc113NYg">Cómo cambiar la contraseña de mi WIFI si tengo módem Huawei 310</a></li>
                    <li><a href="https://www.youtube.com/watch?v=ZRNm3CF4b2M">Cómo cambiar la contraseña de mi WIFI si tengo módem M4</a></li>


                </ul>


               
               
            </TocPage>
        </div>
    );
}

export default Prices;
