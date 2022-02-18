import React from 'react';

import logo from '../media/ON_logo_blanco.png';

class Captive extends React.Component
{

    constructor(props)
    {
        super(props);
    }

    componentDidMount() {


        function getParameterByName(name) {
                name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(window.location.search);
                return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
            }

        function cautivo(){
            var data =window.location+"";
            var url = data.split('/');
 
              
                 

            var msisdn = getParameterByName('msisdn');


            if(msisdn!=null){
                //window.location.replace("https://control.oninternet.com.mx/cautivo/"+url[4]);
                console.log("entra: "+"https://control.oninternet.com.mx/cautivo/"+msisdn);
                window.location="https://control.oninternet.com.mx/cautivo/"+msisdn;
            }
        } 

        cautivo();

    }

    render()
    {
        return (
            <div id='captive' className='container-fluid p-0 bg-secondary'>
                <div className='container p-5'>
                    <div className='row mx-md-5 px-md-5'>
                        <div className='col-12 col-lg-6 p-4 p-lg-5 bg-primary text-light text-center'>
                            <img className='logo m-4 m-md-5' src={logo} alt='dishon logo' />
                        </div>
                        <div className='col-12 col-lg-6 p-5 text-dark bg-light text-center triangle-left-up'>
                            <h4 className='text-secondary text-uppercase'>
                                ESTIMADO CLIENTE ON, TU SERVICIO DE INTERNET HA SIDO SUSPENDIDO POR ALGUNA DE LAS SIGUIENTES RAZONES:
                            </h4>
                            <ul>
                                <li>Alcanzaste el límite de datos de navegación incluida en tu Plan contratado.</li>
                                <li>Haz cambiado el módem de domicilio sin notificar previamente a ON.</li>
                                <li>Tienes atraso en pagos del Servicio ON.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='container-fluid p-0'>
                    <div className='container p-5'>
                        <div className='row mx-md-5 px-md-5'>
                            <div className='col-12 p-4 bg-primary text-light text-center'>
                                <span>
                                    Te invitamos a comunicarte al Centro de Atención a Clientes al teléfono <b><a href='tel:5596283474'> 55 9628 3474</a></b> o al correo electrónico <b><a href='mailto:atenciónaclientes@oninternet.com.mx'>atenciónaclientes@oninternet.com.mx</a></b> Y con gusto te apoyamos.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Captive;
