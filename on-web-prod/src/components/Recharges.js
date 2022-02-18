import React from 'react';

import Tabs from './Packs/Tabs';
import Page from './Packs/Page';
import Pack from './Packs/Pack';

const Recharges = () =>
{
    const labels = ['On Inalámbrico', 'On Satelital'];

    const page0 =
        <Page
            cols={3}
            packs={[
                <Pack
                    megas='5'
                    megasUnit='GB'
                    price='40' priceUnit='$'
                />,
                <Pack
                    megas='10'
                    megasUnit='GB'
                    price='80' priceUnit='$'
                />,
                <Pack
                    megas='25'
                    megasUnit='GB'
                    price='160' priceUnit='$'
                />,
                <Pack
                    megas='50'
                    megasUnit='GB'
                    price='265' priceUnit='$'
                />,
            ]}
            footer={
                <div className='text-center font-m'>
                    <div className='my-5'>
                        Si quieres realizar una recarga, Ilámanos al <a href='tel:96283474'><b>96 28 34 74</b></a> para que un Agente te apoye a realizarla.
                    </div>
                    <div>Las recargas son opcionales y es decisión del suscriptor contratarlas.</div>
                    <div>Las recargas no son acumulables.</div>
                    <div>Vigencia válida al 31 diciembre de 2018. Sujetos a cambio con precia autorización de la Autoridad Competente.</div>
                </div>
            }
        />;

    const page1 =
        <Page
            cols={3}
            packs={[
                <Pack
                    megas='5'
                    megasUnit='GB'
                />,
                <Pack
                    megas='10'
                    megasUnit='GB'
                />,
            ]}
            footer={
                <div className='text-center font-m'>
                    <div className='my-5'>
                        Si quieres realizar una recarga, Ilámanos al <a href='tel:96283474'><b>96 28 34 74</b></a> para que un Agente te apoye a realizarla.
                    </div>
                    <div>Las recargas son opcionales y es decisión del suscriptor contratarlas.</div>
                    <div>Las recargas no son acumulables.</div>
                    <div>Vigencia válida al 31 diciembre de 2018. Sujetos a cambio con previa autorización de la Autoridad Competente.</div>
                </div>
            }
        />;

    const pages = [page0, page1];

    return (
        <Tabs id='recharges' labels={labels} pages={pages} />
    );
}

export default Recharges;
