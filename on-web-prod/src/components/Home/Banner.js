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




class Banner extends React.Component
{
    constructor(props)
    {
        super(props);

        this.modal = React.createRef();
    }

    componentDidMount()
    {
       

        if (navigator.appVersion.indexOf("Mac")!=-1){
           // OSName="MacOS";  
           $(".google").hide();
        } 

        if (navigator.appVersion.indexOf("Android")!=-1){
           // OSName="Android";
           $(".ios").hide();
        } 




        $(".bannericon").on("click",function(){
            window.location="http://fpop.com.mx/contacto.php";
        })

       

    }

    render()
    {
        return (
                        <div>
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
                                        <ul className="descargas">
                                            <li className="google">
                                                <a href="https://play.google.com/store/apps/details?id=mx.com.dish.oninternet" target="_blank">
                                                    <img alt="Google Play" src={googleplay}/>
                                                </a>
                                            </li>
                                            <li className="ios">
                                                <a href="https://apps.apple.com/mx/app/on-internet/id1484378436#see-all/reviews" target="_blank">
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
                            <br/>
                            <br/>

                        </div>
        );
    }
}

export default Banner;
