import React from 'react';

import logoWhite from '../../media/ON_logo_blanco.png';
import logoWhiteWifi from '../../media/on_logo_white_wifi.png';
import telephone from '../../media/telephone.png';

class TempCarousel extends React.Component
{
    render()
    {
        return (
            <div id="carousel-main" className="carousel slide" data-ride="carousel" data-interval="5000">
                <div className="carousel-inner bg-primary text-light" role="listbox">
                    <div className='container-fluid'>
                        <div className='row lh-1-2'>
                            <div className='col-12 col-md-8 p-5'>
                                <div className='font-bold t-1'>Al Buen Fin lo ponemos<img className='logo-img w-25 align-bottom' src={logoWhite} alt='on-logo'/>.</div>
                                <div className='font-book t-3 text-uppercase my-4'>El internet fácil con o sin cables.</div>
                                <hr align='left' className='w-25 bg-light'/>
                                <div className='mb-5'>Aprovecha el descuento de $200.00 en nuestras suscripciones.</div>
                                <div className='t-6 font-book text-right'>
                                    <div>Promoción válida del 15 al 19 de noviembre de 2018.</div>
                                    <div>Consulta Términos y Condiciones en oninternet.com.mx</div>
                                </div>
                            </div>
                            <div className='col-12 col-md-4 bg-secondary text-center p-5 d-flex flex-column justify-content-center align-items-center'>
                                <img src={logoWhiteWifi} alt='on-logo' className='w-75 mb-3'/>
                                <div>
                                    <img className='h-2-4rem align-bottom pr-3' src={telephone} alt='telephone-icon'/>
                                    <a className='text-light t-3 tel' href='tel:55123123'>55 123 123</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a className="left carousel-control-prev" href="#carousel-main" role="button" data-slide="prev">
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control-next" href="#carousel-main" role="button" data-slide="next">
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div id='promo-video-modal' className='modal' tabIndex='-1' role='dialog' ref={this.modal}>
                    <div className='modal-dialog' role='document'>
                        <div className='modal-content'></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TempCarousel;