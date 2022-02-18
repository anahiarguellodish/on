import React from 'react';
import axios from 'axios';
import $ from 'jquery';

import logo from '../media/ON_logo_blanco.png';

import whatsapp from '../media/logos/logo_whatsapp.png';
class CustomerService extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            subject: 'Estatus de mi compra',
            comment: '',
            errorField: '',
            message: '',
            isSubmitting: false,
            hasError: false
        }

        this.modal = React.createRef();

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitSuccess = this.onSubmitSuccess.bind(this);
        this.onSubmitError = this.onSubmitError.bind(this);
    }

      componentDidMount() {
      window.scrollTo(0, 0);
      $("#submti").attr("disabled","true");

      $("#privacidad").on("click",function(){
            $(".modals").modal("show");
      });

      $("#closemodal").on("click",function(){
            $(".modals").modal("hide");
      });

      
        
    }

    onChange(event)
    {
        const state = {};
        state[event.target.id] = event.target.value;
        state.errorField = '';
        this.setState(state);

           if($('#aviso').prop('checked')){
            $("#submti").removeAttr("disabled");//habilita
          }else{
             $("#submti").attr("disabled","true");
          }
    }

    onSubmit()
    {
        this.setState({isSubmitting: true});
        // const url = "https://xx1s0msl3k.execute-api.us-east-1.amazonaws.com/default/dishonCustomerServiceForm/";
        // const key = "RRiE0mBF9p1DUyKcqUcO5V8VTxSvMZt4jTPG2wWj";
        const url = "https://9mxgxyv69a.execute-api.us-east-1.amazonaws.com/default/dishonCustomerServiceForm/";
        const key = "GIhBjMj7UZ6Cjnx0TykCV8muvR0JL3nd5fvDXLzG";
        axios.post(url,
            {
                form: 'customer-service',
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                subject: this.state.subject,
                comment: this.state.comment
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': key
                }
            }
        )
        .then(this.onSubmitSuccess)
        .catch(this.onSubmitError);
    }

    onSubmitSuccess(response)
    {
        this.setState({
            name: '',
            email: '',
            phone: '',
            subject: 'Estatus de mi compra',
            comment: '',
            message: '¡Gracias! Uno de nuestro agentes se pondrá en contacto contigo.',
            isSubmitting: false,
            hasError: false
        });
        $(this.modal.current).modal('show');
    }

    onSubmitError(error)
    {
        const message = error.response ?
            error.response.data.message :
            'Oops, something went wrong!';
        const errorField = error.response ?
            error.response.data.field :
            '';
        this.setState({
            isSubmitting: false,
            message,
            hasError: true,
            errorField
        });
        $(this.modal.current).modal('show');
    }

    render()
    {
        const ef = this.state.errorField;
        return (
            <div id='customer-service' className='container-fluid bg-primary'>
                <div className='container p-5'>
                    <div className='row mx-md-5 px-md-5'>
                        <div className='col-12 col-lg-6 p-4 p-lg-5 bg-secondary text-light text-center'>
                            <img className='m-3 m-lg-5 w-50' src={logo} alt='dishon logo' />
                            <h3 className='text-uppercase'>atención a clientes on</h3>
                            <h6 className='mt-3 mt-lg-5'>¡Acá te resolvemos tus dudas!</h6>
                            <h6>Nos puedes escribir a <a href='mailto:atencionaclientes@oninternet.com.mx'>
                                    <b>atencionaclientes@oninternet.com.mx</b>,
                                </a>
                            </h6>
                            <h6 >llamarnos al <b><a href='tel:5556101010'>55 56 10 10 10</a></b></h6>
                            <h6 >de Lunes a Domingo las 24 hrs del día</h6>
                        <div className='col-12 widget-whatsapp mt-5'>
                                <div className=" d-flex">
                                    <div className="my-auto mx-auto">
                                        <img src={whatsapp} alt='logo-whatsapp' />
                                    </div>
                                    <div className="widget-whatsapp-text mx-auto">
                                        <h4 className="mt-3"><strong>Para atención a clientes</strong></h4>
                                        <h4 className=""><strong>escribenos en WhatsApp</strong></h4>
                                        <h4 className="mt-1 mb-1"><strong>55 56 10 10 10</strong></h4>
                                        <p>De lunes  domingo de 9am a 9pm.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='col-12 col-lg-6 p-4 p-lg-5 text-dark bg-light triangle-left-up'>
                            <h4 className='text-secondary text-center'>o déjanos tus datos y dudas para contactarte y apoyarte</h4>
                            <label id='labelname'for='name' className='EtiAcces'>NOMBRE:</label>
                            <input
                                id='name'
                                value={this.state.name}
                                onChange={this.onChange}
                                className={'form-control' + (ef === 'name' ? ' is-invalid' : '')}
                                type='text'
                                
                            />
                            <label id='labelemail'for='email' className='EtiAcces'>EMAIL:</label>
                            <input
                                id='email'
                                value={this.state.email}
                                onChange={this.onChange}
                                className={'form-control' + (ef === 'email' ? ' is-invalid' : '')}
                                type='text'
                                
                            />
                            <label id='labelphone'for='phone' className='EtiAcces'>NÚMERO TELEFÓNICO A 10 DÍGITOS:</label>
                            <input
                                id='phone'
                                value={this.state.phone}
                                onChange={this.onChange}
                                className={'form-control' + (ef === 'phone' ? ' is-invalid' : '')}
                                type='text'
                                
                            />
                            <label id='labelsubject'for='subject' className='EtiAcces'>Asunto:</label>
                            <select
                                id='subject'
                                value={this.state.subject}
                                onChange={this.onChange}
                                className={'form-control' + (ef === 'subject' ? ' is-invalid' : '')}
                                
                            >
                                <option value='Estatus de mi compra'>Estatus de mi compra</option>
                                <option value='Apoyo técnico'>Apoyo técnico</option>
                                <option value='Consulta de saldo'>Consulta de saldo</option>
                                <option value='Facturación'>Facturación</option>
                                <option value='Aclaración o temas relacionados con tu servicio'>Aclaración o temas relacionados con tu servicio</option>
                            </select>
                            <textarea
                                id='comment'
                                value={this.state.comment}
                                onChange={this.onChange}
                                className={'form-control' + (ef === 'comment' ? ' is-invalid' : '')}
                                placeholder='COMENTARIOS'
                            />

                             <div className='text-left pl-2 pt-3'>
                             <label id='labelaviso'for='aviso' className='EtiAcces'>AVISO</label>
                             <br/>
                             <input
                                id='aviso'
                                name='aviso'
                                onChange={this.onChange}
                                value={this.state.aviso}
                                type='checkbox'
                            />
                            <span> &nbsp; He leído y acepto el <i id="privacidad">Aviso de privacidad</i></span>
                            </div>


                            <button disabled={this.state.isSubmitting}
                             id='submti'
                            className='btn btn-secondary btn-lg d-block w-100 mt-4 text-bold'
                            onClick={this.onSubmit}>
                                {this.state.isSubmitting ? 'PROCESANDO SU SOLICITUD' : 'ENVIAR'}
                            </button>
                           
                        </div>
                    </div>
                </div>
                <div ref={this.modal} className="modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                {/* <h5 className="modal-title">{this.state.messageTitle}</h5> */}
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p className={this.state.hasError ? 'text-danger' : 'text-secondary'}>
                                    {this.state.message}
                                </p>
                            </div>
                            <div className="modal-footer" style={{border: '0'}}>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                            </div>
                        </div>
                    </div>
                </div>


                 <div  className="modal modals" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" id="closemodal" className="close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p><h3>Aviso de privacidad</h3></p>
                                 <p>Los datos personales recabados por Comercializadora de Frecuencias Satelitales, S. de R. L. de C.V., conocida comercialmente como “ON INTERNET”, con domicilio en Calzada de Tlalpan, número 1924, Colonia Churubusco Country Club, Coyoacán, Ciudad de México., C.P. 04210, son necesarios para las siguientes finalidades primarias i) su registro como Suscriptor; ii) proveer el servicio de Internet Inalámbrico (en lo sucesivo, el Servicio); iii) informarle sobre cambios en el servicio contratado; iv) realizar gestiones de cobranza del Servicio, a través de visitas presenciales, llamadas telefónicas, mensajes o cualquier otro medio de comunicación; v) realizar instalaciones, desinstalaciones y/o servicios técnicos, con familiares y/o personas relacionadas con el suscriptor cuando el mismo no se encuentre en su domicilio; vi) emisión de facturación electrónica relacionada con el Servicio, y vii) cumplir con las obligaciones legales que deriven de la relación comercial, y podrán utilizarse para las siguientes finalidades secundarias: i) llevar a cabo rifas, encuestas, sorteos, concursos, ofertas, programas, actividades publicitarias, promociones y otorgamiento de cortesías; ii) verificar la identidad de los participantes y ponerse en contacto por cualquier medio con los ganadores; iii) evaluar la calidad del Servicio; iv) ofrecerle nuevas opciones de programación (paquetes) y pago del Servicio; v) envío de promociones, newsletters o información de socios comerciales del Responsable y/o terceros que tengan alguna relación jurídica con el Responsable; vi) envío de productos promocionales, obsequios y/o premios, información y muestras; y vii) permitir el acceso, control y video-vigilancia/ grabación para la seguridad de las personas que visitan las instalaciones del Responsable.</p>
                                <p>Además, su información podrá utilizarse para fines de mercadotecnia, publicidad y prospección comercial, específicamente para el ofrecimiento y la promoción de bienes, productos y servicios del responsable.</p>
                                <p>Consiento el tratamiento de mis datos personales, para las finalidades secundarias antes descritas Sí __ No __</p>
                                <p>Se hace del conocimiento al titular de los datos personales, que cuenta con un plazo de 5 (cinco) días hábiles para manifestar su negativa al tratamiento de sus datos personales, para todas o algunas de las finalidades secundarias, sin que ello tenga como consecuencia la conclusión del tratamiento para las finalidades primarias, enviando un correo electrónico a datospersonales@oninternet.com.mx Para efecto de ofrecer al Suscriptor diferentes opciones de pago y/o instalación del servicio, la responsable puede recabar y tratar datos personales financieros y patrimoniales que incluyen datos de tarjeta de crédito o débito, situación en el buró de crédito, obligaciones susceptibles de valoración económica, tipo de vivienda (casa, local comercial o edificio), tipo de construcción (madera, adobe, concreto, lámina u otro).</p>
                                <p>Consiento el tratamiento de mis datos financieros y patrimoniales, para las finalidades antes descritas Sí __ No __</p>
                                <p>Para conocer mayor información sobre los términos y condiciones en que serán tratados sus datos personales, puede consultar nuestro aviso de privacidad integral en la página de internet www.oninternet.com.mx en la sección Aviso de Privacidad. Derivado de la relación jurídica que tengo con el responsable, doy mi consentimiento para el tratamiento de mis datos personales, incluyendo los patrimoniales y financieros, para las finalidades señaladas en el presente aviso de privacidad.</p>
                            
                            </div>
                           
                        </div>
                    </div>
                </div>





            </div>
        );
    }
}

export default CustomerService;
