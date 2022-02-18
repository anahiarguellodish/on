import React from 'react';
import axios from 'axios';
import $ from 'jquery';

import logo from '../media/ON_logo_blanco.png';
import whatsapp from '../media/logos/logo_whatsapp.png';
// import logos from '../media/dish_con_ponte.png';



class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            city: '',
            postal: '',
            dish: true,
            tecnologia: '',
            message: '',
            errorField: '',
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

        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(window.location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        const state = {};
        var tecnologia = getParameterByName("tecnologia");
        var latitud = getParameterByName("latitud");
        var longuitud = getParameterByName("longuitud");
        var cobertura = getParameterByName("cobertura");
        var city = "";

        if (tecnologia != "") {

            if (tecnologia === "inalambrico") {
                $('#tecnologia_ina').prop('checked', true);
                this.setState({ tecnologia: "inalambrico" });
            }

            if (tecnologia === "satelital") {
                $('#tecnologia_sat').prop('checked', true);
                this.setState({ tecnologia: "satelital" });
            }

            if (tecnologia === "inalambrico amazon prime") {
                $('#tecnologia_on').prop('checked', true);
                this.setState({ tecnologia: "inalambrico mas amazon prime" });
            }

            $("input[name=tecnologia]").attr("disabled", "true");

            // tecnologia_ina
            // tecnologia_ala
            // tecnologia_sat
        }

        if (latitud != "") {
            var openId, dn, iccid;
            $.ajax({
                url: "https://9f4eqobkma.execute-api.us-east-1.amazonaws.com/prod/login",
                type: "POST",
                data: JSON.stringify({
                    "user": "oninternet",
                    "password": "MgZlxvs67z"
                }
                ),
                dataType: "json",
                async: false,
                contentType: "application/json; charset=utf-8",

                success: function (data, status) {
                    openId = data.openid;
                }
            });



            $.ajax({
                url: "https://9f4eqobkma.execute-api.us-east-1.amazonaws.com/prod/direccion",
                type: "POST",
                data: JSON.stringify({
                    "latitud": latitud,
                    "longitud": longuitud

                }),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                headers: { "openid": openId },

                success: function (data, status) {

                    city = data.internet.direccion;
                    state['city'] = city;
                    $('#city').val(city);
                }


            });

            // state['city'] = city;
            //   	$('#city').val(city);
            //   	$('#city').click();
        }



        if (cobertura != "") {
            $('#postal').val(cobertura);
            state['postal'] = cobertura;
            $("#postal").attr("disabled", "true");

        }




        this.setState(state);
        window.scrollTo(0, 0);
        $("#submti").attr("disabled", "true");

        $("#buttonemail").attr("disabled", "true");
        $("#buttonsms").attr("disabled", "true");




        $("#privacidad").on("click", function () {
            $(".modals").modal("show");
        });

        $("#closemodal").on("click", function () {
            $(".modals").modal("hide");
        });


        $("#buttonemail").on("click", function () {
            enviacorreocobertura();
        });

        $("#buttonsms").on("click", function () {
            enviasmscobertura();
        });




        function enviacorreo() {
            // alert("Se enviara correo");
            $.ajax({
                type: 'POST',
                url: " https://cr3ybwcwoc.execute-api.us-east-1.amazonaws.com/Test/mailcontacto",
                // "to": "noebg0415@gmail.com"
                data: { to: $("#email").val() },
                success: function (data) {
                    alert(data);
                },
                error: function (data) {

                }
            });

            $(".modals").modal("hide");
        }






        function enviacorreocobertura() {


            // alert("Se enviara correo");
            var asunto_text = "ON Internet - Validación de cobertura";
            var mensaje = "";
            if (cobertura === "Sin cobertura") {
                mensaje = "<p>¡Gracias por contactarnos</p><p>Acabas de consultar cobertura de ON internet Satelital en:</p><p>" + city + "</p><p>Lamentamos no contar con cobertura en tu domicilio.</p><p>Pero llámanos para buscar alguna otra opciON de conexiON:<a href='tel:55 55 123 123'>55 55 123 123</a></p>";
            } else {
                mensaje = "<p>¡Gracias por contactarnos</p><p>Acabas de consultar cobertura de ON internet Satelital en:</p><p>" + city + "</p><p>Queremos que te pongas ON y que contrates el paquete que vaya contigo.</p><p>Al recibir tus datos de cotacto, te contactaremos para proceder con tu contrataciON, o si prefieres llámanos para que lo tengas de volON:<a href='tel:55 55 123 123'> 55 55 123 123</a></p>";
            }


            $.ajax({
                type: "POST",
                url: "https://cr3ybwcwoc.execute-api.us-east-1.amazonaws.com/Prod/sendemail_cobertura",
                data: JSON.stringify({
                    "destinatario": $("#email_modal").val(),
                    "asunto": asunto_text,
                    "cuerpo HTML": mensaje

                }),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                // headers: {"openid": openId},
                // data: {destinatario:$("#email_modal").val(), asunto:asunto_text, "cuerpo HTML": mensaje},  
                success: function (data) {
                    // alert(data);
                    $("#modalcorreo").modal("hide");
                },
                error: function (data) {

                }
            });


        }


        function enviasmscobertura() {
            // slert("se enviara sms");
            var menseje_sms = "";
            if (cobertura === "Sin cobertura") {
                menseje_sms = "No cuentas con cobertura para ON Satelital en " + city + "Más opciones: 5555123123";
            } else {
                menseje_sms = "Cuentas con cobertura para ON Satelital en " + city + "Más opciones: 5555123123";
            }



            $.ajax({
                type: 'POST',
                url: "https://cr3ybwcwoc.execute-api.us-east-1.amazonaws.com/Prod/sendsms_cobertura",
                data: JSON.stringify({
                    "numero": $("#sms_modal").val(),
                    "mensaje": menseje_sms
                }),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    $("#modalsms").modal("hide");
                },
                error: function (data) {

                }
            });

        }



        $("#email").on("change", function () {
            // enviacorreo();
        });







    }

    onChange(event) {
        const state = {};
        const name = event.target.name;
        let value = event.target.value;

        if (name === 'dish') {
            console.log("Radio button de: " + name);
            const id = event.target.id;
            if (id === 'dish-si-input')
                value = true;
            else
                value = false;
        }



        if (name === 'tecnologia') {
            console.log("Radio button de: " + name);
            const id = event.target.id;
            if (id === 'tecnologia_ina') {
                value = "Inalámbrico";
            } else if (id === 'tecnologia_ala') {
                value = "Alámbrico";
            } else if (id === 'tecnologia_on') {
                value = "Inalambrico más Amazon Prime";
            } else {
                value = "Satelital";
            }
        }


        if (name === 'aviso') {
            console.log("Radio button de: " + name);
            if ($('#aviso').prop('checked')) {
                $("#submti").removeAttr("disabled");//habilita
            } else {
                $("#submti").attr("disabled", "true");
            }

        }

        if (name === 'avisosms') {
            console.log("Radio button de: " + name);
            if ($('#avisosms').prop('checked')) {
                $("#buttonsms").removeAttr("disabled");//habilita
            } else {
                $("#buttonsms").attr("disabled", "true");
            }

        }



        if (name === 'avisoemail') {
            console.log("Radio button de: " + name);
            if ($('#avisoemail').prop('checked')) {
                $("#buttonemail").removeAttr("disabled");//habilita
            } else {
                $("#buttonemail").attr("disabled", "true");
            }

        }

        if (name === 'city') {
            console.log("Valor de city: " + $('#city').val());
            state['city'] = $('#city').val();

        }




        state['city'] = $('#city').val();

        state[name] = value;
        state.errorField = '';
        this.setState(state);
    }

    onSubmit() {


        const urls = "https://cr3ybwcwoc.execute-api.us-east-1.amazonaws.com/Test/mailcontacto";
        axios.post(urls,
            {
                to: this.state.email
            }

        );

        if (this.state.city == null || this.state.city == "") {
            const message = "El campo ciudad es necesario";
            const errorField = "city";
            this.setState({
                isSubmitting: false,
                message,
                hasError: true,
                errorField
            });
            $(this.modal.current).modal('show');
            return;
        }


        if (this.state.postal == null || this.state.postal == "") {
            const message = "El campo codigo postal es necesario";
            const errorField = "postal";
            this.setState({
                isSubmitting: false,
                message,
                hasError: true,
                errorField
            });
            $(this.modal.current).modal('show');
            return;
        }

        if (this.state.tecnologia == null || this.state.tecnologia == "") {
            const message = "El campo tecnología es necesario";
            const errorField = "tecnologia";
            this.setState({
                isSubmitting: false,
                message,
                hasError: true,
                errorField
            });
            $(this.modal.current).modal('show');
            return;
        }







        this.setState({ isSubmitting: true });
        // const url = "https://xx1s0msl3k.execute-api.us-east-1.amazonaws.com/default/dishonCustomerServiceForm/";
        // const key = "RRiE0mBF9p1DUyKcqUcO5V8VTxSvMZt4jTPG2wWj";
        const url = "https://9mxgxyv69a.execute-api.us-east-1.amazonaws.com/default/dishonCustomerServiceForm/";
        const key = "GIhBjMj7UZ6Cjnx0TykCV8muvR0JL3nd5fvDXLzG";
        axios.post(url,
            {
                form: 'contact',
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                city: this.state.city,
                postal: this.state.postal,
                dish: this.state.dish,
                tecnologia: this.state.tecnologia,
                aviso: this.state.aviso
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

    onSubmitSuccess(response) {
        this.setState({
            name: '',
            email: '',
            phone: '',
            city: '',
            postal: '',
            dish: true,
            message: '¡GRACIAS POR PONERTE EN CONTACTO CON ON! Hemos recibido tus datos, en breve nos pondremos en contacto contigo para que te pogas ON :)',
            isSubmitting: false,
            hasError: false
        });
        $(this.modal.current).modal('show');




    }

    onSubmitError(error) {
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

    render() {
        const ef = this.state.errorField;
        return (
            <div id='contact' className='container-fluid bg-secondary'>
                <div className='container p-5'>
                    <div className='row mx-md-5 px-md-5'>
                        <div className='col-12 col-lg-6 p-4 p-lg-5 bg-primary text-light text-center'>
                            <img className='logo m-4 m-md-5' src={logo} alt='dishon logo' />
                            <h3 className='text-uppercase'>¡Es momento de ponerte ON!</h3>
                            {/* <img className='logos mt-3 mt-lg-5' src={logos} alt='logos'/> */}
                            <h4>Para informes y contratación llámanos al <br /><a href='tel:5555123123'>55 55 123 123</a><br />  de Lunes a Domingo las 24 hrs del día.</h4>


                        <div className='col-12 widget-whatsapp mt-5'>
                                <div className=" d-flex">
                                    <div className="my-auto mx-auto">
                                        <img src={whatsapp} alt='logo-whatsapp' />
                                    </div>
                                    <div className="widget-whatsapp-text mx-auto">
                                        <h4 className="mt-1 mb-0"><strong>Para atención a clientes</strong></h4>
                                        <h4 className="pb-1"><strong>escribenos en WhatsApp</strong></h4>
                                        <h4 className="mt-2 mb-1"><strong>55 56 10 10 10</strong></h4>
                                        <p>De lunes  domingo de 9am a 9pm.</p>
                                    </div>
                                </div>

                            </div>
                            
                        </div>




                        <div className='col-12 col-lg-6 p-5 text-dark bg-light triangle-left-up'>
                            <h4 className='text-secondary text-uppercase text-center'>O déjanos tus datos y nosotros te contactamos:</h4>
                            <label id='labelname' for='name' className='EtiAcces'>NOMBRE:</label>
                            <input
                                id='name'
                                name='name'
                                value={this.state.name}
                                onChange={this.onChange}
                                className={'form-control' + (ef === 'name' ? ' is-invalid' : '')}
                                type='text'

                            />
                            <label id='labelemail' for='email' className='EtiAcces'>EMAIL:</label>
                            <input
                                id='email'
                                name='email'
                                value={this.state.email}
                                onChange={this.onChange}
                                className={'form-control' + (ef === 'email' ? ' is-invalid' : '')}
                                type='text'

                            />
                            <label id='labelphone' for='phone' className='EtiAcces'>NÚMERO TELEFÓNICO A 10 DÍGITOS</label>
                            <input
                                id='phone'
                                name='phone'
                                value={this.state.phone}
                                onChange={this.onChange}
                                className={'form-control' + (ef === 'phone' ? ' is-invalid' : '')}
                                type='text'

                            />
                            <label id='labelciudad' for='ciudad' className='EtiAcces'>DIRECCIÓN:</label>
                            <input
                                id='city'
                                name='city'
                                value={this.state.city}
                                onChange={this.onChange}
                                className={'form-control' + (ef === 'city' ? ' is-invalid' : '')}
                                type='text'

                            />
                            <label id='labelcp' for='postal' className='EtiAcces'>COBERTURA DISPONIBLE</label>
                            <input
                                id='postal'
                                name='postal'
                                value={this.state.postal}
                                onChange={this.onChange}
                                className={'form-control' + (ef === 'postal' ? ' is-invalid' : '')}
                                type='text'

                            />


                            <div id='dish' className='text-left pl-2 pt-3'>
                                <span id=''>¿Quieres recibir la confirmación  de cobertura?</span>
                                <p id=''>Selecciona como: <span data-toggle='modal' data-target='#modalcorreo'>Mail</span> o <span data-toggle='modal' data-target='#modalsms'>Sms</span> </p>
                            </div>



                            <div id='dish' className='text-left pl-2 pt-3'>
                                <span id='dish-q'>¿ERES CLIENTE DISH?</span>
                                <label id='dish-si' for='dish-si-input'><input
                                    id='dish-si-input'
                                    type='radio'
                                    name='dish'
                                    onChange={this.onChange}
                                    checked={this.state.dish === true}
                                /> SÍ</label>
                                <label id='dish-no' for='dish-no-input'><input
                                    id='dish-no-input'
                                    type='radio'
                                    name='dish'
                                    onChange={this.onChange}
                                    checked={this.state.dish === false}
                                /> NO</label>
                            </div>


                            <div id='dish_tecnologia' className='text-left pl-2 pt-3'>
                                <span id='contacto_span'>¿QUÉ TECNOLOGÍA DE INTERNET ES LA QUE TE INTERESA?</span>
                                <br />
                                <label className='alinear_tecnologias contacto_span'><input
                                    id='tecnologia_ina'
                                    type='radio'
                                    name='tecnologia'
                                    onChange={this.onChange}
                                /> INALÁMBRICO</label>
                                <label className='alinear_tecnologias contacto_span'><input
                                    id='tecnologia_ala'
                                    type='radio'
                                    name='tecnologia'
                                    onChange={this.onChange}
                                /> ALÁMBRICO</label>
                                <label className='alinear_tecnologias contacto_span'><input
                                    id='tecnologia_sat'
                                    type='radio'
                                    name='tecnologia'
                                    onChange={this.onChange}
                                /> SATELITAL</label>
                                <label className='alinear_tecnologias contacto_span'><input
                                    id='tecnologia_on'
                                    type='radio'
                                    name='tecnologia'
                                    onChange={this.onChange}
                                /> INALAMBRICO + AMAZON PRIME</label>
                            </div>



                            <div className='text-left pl-2 pt-3'>
                                <label id='labelaviso' for='aviso'>AVISO:</label>
                                <br />
                                <input
                                    id='aviso'
                                    name='aviso'
                                    onChange={this.onChange}
                                    value={this.state.aviso}
                                    type='checkbox'
                                />
                                <span> &nbsp; He leído y acepto el <i id="privacidad">Aviso de privacidad</i></span>
                            </div>


                            <button
                                id="submti"
                                disabled={this.state.isSubmitting}
                                className='btn btn-secondary btn-lg d-block w-100 mt-4 text-bold'
                                onClick={this.onSubmit}
                            >
                                {this.state.isSubmitting ? 'PRESENTANDO SU SOLICITUD' : 'ENVIAR'}
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
                            <div className="modal-footer" style={{ border: '0' }}>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal modals primero_modal_contrata" tabIndex="-1" role="dialog">
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






                <div className='modal fade' id='modalsms' tabindex='-1' role='dialog' aria-hidden='true'>
                    <div className='modal-dialog modal-dialog-centered modal-xl' role='document'>
                        <div className='modal-content'>
                            <div className='modal-header modal-header-right-side'>
                                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                            </div>
                            <div className='modal-body modal-body-right- text-center'>
                                <center>
                                    <input id="sms_modal" type="text" className='form-control form_contrata_modal' placeholder="Ingresa tu telefono a 10 digitos" />
                                </center>
                                <input
                                    id='avisosms'
                                    name='avisosms'
                                    type='checkbox'
                                    onChange={this.onChange}

                                />

                                <span> &nbsp; He leído y acepto el <i data-toggle='modal' data-target='.modals'>Aviso de privacidad</i></span>
                                <br />
                                <br />
                                <button id="buttonsms" className="btn btn-secondary btn-lg">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='modal fade' id='modalcorreo' tabindex='-1' role='dialog' aria-hidden='true'>
                    <div className='modal-dialog modal-dialog-centered modal-xl' role='document'>
                        <div className='modal-content'>
                            <div className='modal-header modal-header-right-side'>
                                <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                            </div>
                            <div className='modal-body modal-body-right- text-center'>
                                <center>
                                    <input id="email_modal" type="text" className='form-control form_contrata_modal' placeholder="Ingresa tu correo electrónico" />
                                </center>

                                <input
                                    id='avisoemail'
                                    name='avisoemail'
                                    type='checkbox'
                                    onChange={this.onChange}
                                />
                                <span> &nbsp; He leído y acepto el <i data-toggle='modal' data-target='.modals'>Aviso de privacidad</i></span>
                                <br />
                                <br />
                                <button id="buttonemail" className="btn btn-secondary btn-lg">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        );
    }
}

export default Contact;
