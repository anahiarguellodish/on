import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import loadJs from '../../helpers/loadJS';

import logoWhite from '../../media/ON_logo_blanco_small.png';


import play from '../../media/Iconos_ON.png';

import banner from '../../media/Banner.png';



import googleplay from '../../media/googleplay.png';
import appstore from '../../media/appstore.png';
import logoON from '../../media/logo-ON.png';
import flechas from '../../media/flechas.png';

import '../../css/alambrico.css';



class Carousel extends React.Component
{
    constructor(props)
    {
        super(props);

        this.modal = React.createRef();
    }

    componentDidMount()
    {
        loadJs('https://www.youtube.com/iframe_api', (err, status) => {
            if(err) return console.error(err);

            const modal = this.modal.current;
            const content = modal.querySelector('.modal-content');

            window.YT.ready(e => {
                const player = new window.YT.Player(content, {
                    height: '390', width: '640',
                    videoId: '7xFSGKkZurk',
                    events: {
                        'onStateChange': onPlayerStateChange
                      }


                });

                function onPlayerStateChange(event) {
                if (event.data == window.YT.PlayerState.ENDED) {
                   player.stopVideo(); 
                  $('#promo-video-modal').modal('hide');
                }

                if (event.data == window.YT.PlayerState.PAUSED) {
                     setTimeout(function(){
                                 player.stopVideo(); 
                                 $('#promo-video-modal').modal('hide');
                     }, 10000);
                  
                }
              }


                $(modal).on('show.bs.modal', event => {
                    player.playVideo();
                    setTimeout(function(){ 
                        player.stopVideo(); 
                        $('#promo-video-modal').modal('hide');
                    }, 60000);
                });

                $(modal).on('hide.bs.modal', event => {
                    player.stopVideo();
                });

             
            });
        });


        // $(".bannericon").on("click",function(){
        //     window.location="http://fpop.com.mx/contacto.php";
        // })

       

    }

    render()
    {
        return (
            <div>
              {/*  <!-- <div className=" justify-content-center  bannericon "> -->*/}
                   <div className=" justify-content-center ">

                    <div id="carousel-main_principal" className="carousel slide tam_carrusel_home" data-ride="carousel" data-interval="10000">
                    <div className="carousel-inner bg-primary text-light" role="listbox">
                        <div className="row">

                        {/*<div className="carousel-item">
                                  <div className="row banner_alambrico"></div>
                          </div>

                            <div className="carousel-item">
                                  <div className="row bannericon"></div>
                               
                            </div>

                            <div className="carousel-item">
                                  <div className="row bannericon_1"></div>
                               
                            </div>

                            <div className="carousel-item">
                                  <div className="row bannericon_2"></div>
                               
                            </div>*/}

                            <div className="carousel-item active">
                                  <div className="row bannericon_3"></div>
                               
                            </div>

                            {/*<div className="carousel-item">
                                  <div className="row bannericon_4"></div>
                               
                            </div>*/}

                           
                            

                           
                            </div>
                            
                        </div>

                      
                        <div className="caption t-5">
                           
                        </div>

                        <a className="left carousel-control-prev" href="#carousel-main_principal" role="button" data-slide="prev">
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control-next" href="#carousel-main_principal" role="button" data-slide="next">
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </div>

                

                         {/*
                            <div className="container" id="bannerBack">
                                <div className="row">
                                    <div className="col-md-4" id="col1">
                                        <h3>
                                            ¡pONte contentON!
                                        </h3>
                                        <p>
                                        YA PUEDES DESCARGAR LA <span className="verde">NUEVA APP</span> 
                                        </p>
                                        <center>
                                        <ul>
                                            <li>
                                            <a href="https://play.google.com/store/apps/details?id=mx.com.dish.oninternet" target="_blank">
                                            <img alt="Google Play" src={googleplay}/>
                                            </a>
                                            </li>
                                            <li>
                                            <a href="https://apps.apple.com/us/app/on-internet/id1484378436?l=es&ls=1" target="_blank">
                                            <img alt="App Store" src={appstore}/>
                                            </a>    
                                            </li>
                                        </ul>
                                        </center>
                                        
                                        
                                    </div>
                                    <div className="col-md-3">
                                        <center>
                                        <img src={logoON} alt="Logo On"/>
                                        </center>
                                    </div>
                                    <div className="col-md-5" id="Tex">
                                        <h4>
                                            en la que podrás:
                                        </h4>
                                        <center>
                                        <img src={flechas} alt="Flechas" id="Flechas"/>
                                        </center>
                                        <div className="row" id="flechasTexto">
                                            <div className="col-md-6">
                                                <h5 id="consulSald">
                                                    Conocer tu saldo y referencia de pago
                                                </h5>
                                            </div>
                                            <div className="col-md-6">
                                                <h5>
                                                    Consultar tu consumo de GB de capacidad si tienes ON Inalámbrico.
                                                </h5>
                                            </div>
                                        </div>
                                        <p id="Texto">
                                        Si ya estás registrado en Mi Cuenta ON, ingresa con el mismo <br/>
                                        usuario y contraseña. Si no, puedes hacerlo desde la APP, necesitarás tu número de Cliente y teléfono registardo.  
                                        </p>
                                    </div>
                                </div>
                            </div>
                        */}

                

                <div id="carousel-main" className="carousel slide tam_carrusel" data-ride="carousel_" data-interval="5000">
                    <div className="carousel-inner bg-primary text-light" role="listbox">
                        <div className="container">

                            <div className="carousel-item active">

                                <div className='top-flex carrusel-panel'>
                                    <div className='copy'>
                                        <div className='t-1 levantar_texto'>Ponerte<img className="logo-img" src={logoWhite} alt="ponte on logo"/>?</div>
                                        <div className='t-2 levantar_texto'>El internet con o sin cables</div>  
                                    </div>
                                    <div className='play' data-toggle='modal' data-target='#promo-video-modal'>
                                        <img src={play} className='play-icon iconoson' alt='play'/>
                                    </div>
                                    <div className='action'>
                                        <Link to='/contrata' className='btn btn-lg btn-light t-3 text-primary font-bold ponteon-gato'>#PonteON</Link>
                                    </div>
                                </div>
                            </div>

                            

                            
                        </div>

                      
                        <div className="caption t-5">
                           
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
            </div>
        );
    }
}

export default Carousel;
