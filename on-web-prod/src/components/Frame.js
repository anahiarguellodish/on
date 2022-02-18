import React from 'react';
import axios from 'axios';
import $ from 'jquery';

import logo from '../media/ON_logo_blanco.png';

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
            <div id='map' className='container-fluid bg-primary'>
                 <div className='map-top w-100 bg-primary text-light text-right'>
                    <span className='text-uppercase align-middle'>Cobertura Alámbrico</span>
                    <img className='p-3 align-middle' src={logo} alt='logo' />
                </div>

                <div className='container p-4 p-md-5'>
                    <iframe width="1150" height="600" src="https://gfcomercial.telmex.com/MapasCoberturaTelmexTelnor/index.jsp?type=infinitum"></iframe>
                </div>
               



            </div>
        );
    }
}

export default CustomerService;
