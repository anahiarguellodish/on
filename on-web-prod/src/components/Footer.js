import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../media/ON_logo_blanco.png';
import manual from '../media/manual_de_usuario.pdf';

class FooterLink extends React.Component
{
    onClick()
    {
        window.scrollTo(0, 0);
    }

    render()
    {
        return (
            <div className='col-12 col-md-auto py-1'>
                <Link {...this.props} onClick={this.onClick}>
                    {this.props.children}
                </Link>
            </div>
        );
    }
}

class Footer extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            expanded: false
        }

        this.toggleFooter = this.toggleFooter.bind(this);
    }

    toggleFooter()
    {
        this.setState(prevState => {
            return { expanded: !prevState.expanded }
        });
    }

    render()
    {
        const expanded = this.state.expanded;
        const style = {
            mobile: { display: (expanded ? 'none' : '') },
            menu2: { display: (expanded ? 'block' : '') }
        }
        return (
            <footer id="footer" className="container-fluid p-0 bg-primary text-light text-center">
                <div className='mobile container-fluid p-3' style={style.mobile}>
                    <img src={logo} width='85' alt='logo On' className='d-inline-block my-3'/>
                    <div className='container pb-3 px-5'>
                        <small>ON&reg; es una marca registrada de Comercializadora de Frecuencias Satelitales, S. de R.L. de C.V., Prohibida su Reproducción Total o Parcial.</small>
                    </div>
                    <div className='fas fa-angle-double-down m-4' onClick={this.toggleFooter}></div>
                </div>
                <div className='menu-1 container-fluid p-3 d-none d-md-block'>
                    <div className='row justify-content-center mx-0'>
                        <FooterLink to='/'><small>HOME</small></FooterLink>
                        <FooterLink to='/map'><small>Dónde contratar</small></FooterLink>
                        <FooterLink to='/places-of-payment'><small>Lugares de pago</small></FooterLink>
                        <FooterLink to='/customer-service'><small>Atención a Clientes</small></FooterLink>
                        <FooterLink to='/faq'><small>Preguntas frecuentes</small></FooterLink>
                        <FooterLink to='/cobertura'><small>Cobertura</small></FooterLink>
                        <FooterLink to='/terms-and-conditions'><small>Legales</small></FooterLink>
                        <FooterLink to='/soporte-tecnico'><small>TIPS ON</small></FooterLink>
                        <FooterLink to='/preciosfronterizos'><small>Precios Fronterizos</small></FooterLink>
                    </div>
                </div>
                <div className='menu-2 container-fluid p-3' style={style.menu2}>
                    <img src={logo} width='85' alt='logo On' className='d-inline-block my-3'  />
                    <div className='container px-5'>
                        <small>ON&reg; es una marca registrada de Comercializadora de Frecuencias Satelitales, S. de R.L. de C.V., Prohibida su Reproducción Total o Parcial. Todo el material, incluyendo imágenes, texto, ilustraciones, diseños, íconos, fotografías, programas, videos y cualquier otro material parte de este sitio constituyen derechos de autor, marcas, marcas tridimensionales y en general, propiedad intelectual de, controlada o licenciada o bien corresponden a terceros que han licenciado o concedido el uso de sus materiales a Comercializadora de Frecuencias Satelitales, S. de R.L. de C.V., y sus empresas afiliadas, por lo que están protegidos por leyes mexicanas e internacionales. El acceso a este sitio no otorga de ninguna forma, ni deberá entenderse como si otorgara licencia, cesión o autorización de los derechos de propiedad intelectual de Comercializadora de Frecuencias Satelitales, S. de R.L. de C.V. o sus empresas afiliadas, ni de los terceros propietarios de marcas, logos, nombres comerciales y cualquier otro contenido de este sitio. Precios y señales sujetos a cambio, previa autorización de la autoridad competente. Derechos Reservados. Este sitio obtiene datos personales a través de cookies y web beacons.</small>
                    </div>
                      {/*<div className='row justify-content-center pt-3 mx-0'>
                        <FooterLink  to='/terms-and-conditions' className='d-none d-md-block'>
                            <small>TÉRMINOS Y CONDICIONES</small></FooterLink>
                        <FooterLink to='/privacy'><small>AVISO DE PRIVACIDAD</small></FooterLink>
                        <div className='col-12 col-md-auto py-1'>
                            <a href={manual} target="_blank"><small>GUÍA DE USO DEL EQUIPO</small></a>
                        </div>
                        <FooterLink to='/terms-of-use'><small>TÉRMINOS DE USO</small></FooterLink>
                        <FooterLink to='/customer-service'><small>Atención a Clientes</small></FooterLink>
                        <FooterLink to='/min-rights'><small>Carta de Derechos Mínimos</small></FooterLink>
                        <FooterLink to='/prices'><small>Costos por los componentes</small></FooterLink>
                    </div>*/}
                    <div className='fas fa-angle-double-up m-4 d-md-none' onClick={this.toggleFooter}></div>
                </div>
            </footer>
        );
    }
}

export default Footer;