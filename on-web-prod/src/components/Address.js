import React from 'react';
import TocPage from './generic/TocPage';
import getLegalLinks from './Legal/getLegalLinks';

const Address = () =>
{
    return (
        <div id='address' className='container p-4'>
            <TocPage links={getLegalLinks()}>
                <h4>DOMICILIO DE LA EMPRESA</h4>
                <p>Calzada de Tlalpan 1924<br/>
                Colonia Churubusco Country Club<br/>
                Alcaldía Tlalpan<br/>
                Ciudad de México. C.P. 04210<br/>
                </p>
            </TocPage>
        </div>
    );
}

export default Address;