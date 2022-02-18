import React from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

// import logo from '../media/dishon_logo.png';
// import whiteLogo from '../media/dishon_logo_white_circle.png';
import logo from '../media/ON_logo_color_small.png';
import whiteLogo from '../media/ON_logo_blanco_small.png';
import Modal from './Modales/Modal';

const NavbarLink = props => {
    const navLinkClassName = 'nav-item nav-link font-bold text-uppercase p-0 h2 bullet';
    return (
        <NavLink
            to={props.to}
            className={props.className ? props.className : navLinkClassName}
            activeClassName='active'
            onClick={props.onClick}>
            {props.children}
        </NavLink>
    )
};



class Navbar extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isShown: false
        };

        this.onTogglerClicked = this.onTogglerClicked.bind(this);
        this.onLinkClicked = this.onLinkClicked.bind(this);

        this.modal = React.createRef();
    }


    componentDidMount() {
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
              panel.style.display = "none";
            } else {
              panel.style.display = "block";
            }
          });
        }
    }

    onTogglerClicked(event)
    {
        this.setState({isShown: !this.state.isShown});
    }

    onLinkClicked(event)
    {
        this.setState(prevState => {
            if(prevState.isShown) {
                $('.navbar-toggler').addClass('collapsed');
                $('.navbar-collapse').removeClass('show');
                return {isShown: !this.state.isShown}
            }
        });
    }

    render()
    {
        var isShown = this.state.isShown;
        var style = {
            color: {
                nav: isShown ? 'navbar-dark' : 'navbar-light',
                bg: isShown ? 'bg-primary' : 'bg-light',
                text: isShown ? 'text-light' : 'text-dark',
                border: isShown ? 'border-light' : 'border-dark'
            },
            toggler: isShown ?
                <span>
                    <span className="toggler-text font-book pr-3">MENÚ</span>
                    <span className="fas fa-times text-secondary"></span>
                </span> :
                <span>
                    <span className="fas fa-bars text-secondary"></span>
                </span>,
            logo: isShown ? whiteLogo : logo
        };

        const phone = <i className="fas fa-phone" style={{transform: 'scaleX(-1)', fontSize: '12px', marginRight: '5px'}}></i>;
        const vPhoneClass = !isShown ? 'text-primary' : 'text-light';
        const aPhoneClass = !isShown ? 'text-secondary' : 'text-light';

        return (

          
            <nav className={"navbar " + style.color.nav + ' ' + style.color.bg + ' ' + style.color.text}>
                <NavbarLink className="navbar-brand font-bold text-uppercase" to="/" onClick={this.onLinkClicked}>
                    <img src={style.logo} height="60" className="d-inline-block mr-2" alt='ONlogo' />
                    <span className={style.color.text}>Ponte On</span>
                </NavbarLink>
                <span
                    className={
                        "navbar-text text-uppercase_ mr-auto pl-3 pt-1 d-none d-md-inline-block " +
                        style.color.text + " border-left " + style.color.border
                    }
                >
                    Te cONecta.
                </span>

                <button
                    className="navbar-toggler border-0" type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation"
                    onClick={this.onTogglerClicked}>
                    {style.toggler}
                </button>
                <ul className='navbar-nav telephones'>
                    <li className='nav-item mr-4 my-2'>
                        <div className={vPhoneClass}>{phone} <b>Ventas</b>: <a className={vPhoneClass} href='tel:5555123123'> <b>55 55 123 123</b></a></div>
                        <div className={aPhoneClass}>{phone} <b>Atención a Clientes</b>: <a className={aPhoneClass} href='tel:5596283474'> <b>55 9628 3474</b></a></div>
                    </li>
                </ul>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav float-right">
                       <div class="nav-item nav-link font-bold text-uppercase p-0 h2 bullet accordion">Mi Cuenta On</div>
                       <div class="panel">
                           <a class="nav-item nav-link font-bold text-uppercase p-0 h2 bullet" href="https://micuentaon.oninternet.com.mx/index.php">Inicia Sesión</a>
                           <div className='nav-item nav-link font-bold text-uppercase p-0 h2 bullet' data-toggle='modal' data-target='.ON-form'>Regístrate</div>
                       </div>
                        <NavbarLink to="/customer-service" onClick={this.onLinkClicked}>Atención a Clientes</NavbarLink>
                        <NavbarLink to="/places-of-payment" onClick={this.onLinkClicked}>Lugares de pago</NavbarLink>
                        <NavbarLink to="/recharge" onClick={this.onLinkClicked}>Paquetes GB Adicionales</NavbarLink>
                        <NavbarLink to="/map" onClick={this.onLinkClicked}>Dónde contratar</NavbarLink>
                        <NavbarLink to="/faq" onClick={this.onLinkClicked}>Preguntas frecuentes</NavbarLink>
                        <NavbarLink
                            to="/terms-and-conditions"
                            className='nav-item nav-link font-bold text-uppercase p-0 h2 bullet d-block d-md-none'
                            onClick={this.onLinkClicked}
                        >TÉRMINOS Y CONDICIONES</NavbarLink>
                        <NavbarLink to="/contrata" onClick={this.onLinkClicked}>CONTACTO</NavbarLink>
                        <NavbarLink to="/cobertura" onClick={this.onLinkClicked}>COBERTURA</NavbarLink>
                        
                    </div>
                </div>
            </nav>

            
            

        );
    }


    
   
}

export default Navbar;
