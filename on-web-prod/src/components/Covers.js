import React from 'react';
import Recaptcha from 'react-google-recaptcha';
import loadJS from '../helpers/loadJS';
import logo from '../media/ON_logo_blanco.png';
import dishonLocations from '../locations/dishonLocations';
import Api from '../helpers/Api';

class Cobertura extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            postalCode: '',
            error: false,
            isHuman: false,
            recaptchaValue: ''
        };

        this.mapRef = React.createRef();
        this.infoWindow = null;

        this.makeInfoWindow = this.makeInfoWindow.bind(this);
        this.handlePostalCodeChange = this.handlePostalCodeChange.bind(this);
        this.handlePostalCodeKeyUp = this.handlePostalCodeKeyUp.bind(this);
        this.handleRecaptcha = this.handleRecaptcha.bind(this);
        this.handleSubmitSearch = this.handleSubmitSearch.bind(this);
    }

    handlePostalCodeChange(event)
    {
        // TODO: Validate postal code
        this.setState({
            postalCode: event.target.value,
            error: false
        });
    }

    handlePostalCodeKeyUp(event)
    {
        if(event.key === 'Enter')
            this.handleSubmitSearch();
    }

    handleRecaptcha(value)
    {
        this.setState({
            recaptchaValue: value
        });

        const api = new Api();
        api.post({
            op: 'isHuman',
            value: value
        })
        .then(() => {
            this.setState({
                isHuman: true
            });
        })
        .catch(() => {
            this.setState({
                isHuman: false
            });
        });
    }

    handleSubmitSearch()
    {
        if(typeof this.map === 'undefined' || !this.map)
            return;

        const postalCode = this.state.postalCode;

        if(postalCode === '')
            return;

        let location = null;
        for(var i = 0; i < dishonLocations.length; i++) {
            location = dishonLocations[i];
            if(location.postalCode === postalCode)
                break;
            location = null;
        }

        if(location === null) {
            this.setState({ error: true });
            return;
        }
        
        this.map.setCenter(location.coordinates);
        this.makeInfoWindow(location);
        this.map.setZoom(20);

        this.setState({
            postalCode: ''
        });
    }

    componentDidMount()
    {
        // const key = 'AIzaSyCnmK6idgVg5q6Kt7AVacghzaSmaG3wENU';
        const key = 'AIzaSyAkgOryaCfC3yHjLJY2-SvQOzp2sugrI3c'; // Dish Key
        const src = 'https://maps.googleapis.com/maps/api/js?key=' + key;
        loadJS(src, (err, result) =>
        {
            if(err)
                return console.error(err);

            this.map = new window.google.maps.Map(this.mapRef.current, {
                center: { lat: 21.1996573, lng: -101.8276726 },
                streetViewControl: false,
                mapTypeControl: false,
                zoom: 6
            });

            for(var i = 0; i < dishonLocations.length; i++) {
                const location = dishonLocations[i];

                const marker = new window.google.maps.Marker({
                    title: location.name,
                    position: location.coordinates,
                    map: this.map
                });

                marker.addListener('click', () => {
                    this.makeInfoWindow(location);
                });
            };
        });
    }

    makeInfoWindow(location)
    {
        const content =
            '<b>' + location.name + '</b><br/>' +
            location.city + ' ' +
            '(' + location.postalCode + ')<br/>' +
            'COLONIA: ' + location.suburb + '<br/>' +
            'CALLE: ' + location.street + '<br/>' +
            'NUMERO EXTERIOR: ' + location.externalNumber;
        
        if(this.infoWindow) {
            this.infoWindow.close();
            this.infoWindow = null;
        }

        this.infoWindow = new window.google.maps.InfoWindow({
            content: content,
            position: location.coordinates,
            map: this.map
        });
    }

    componentWillUnmount()
    {
        if(typeof this.map !== 'undefined' && this.map)
            this.map = null;
    }

    render()
    {
        let validationClass = '';
        if(this.state.error) {
            validationClass = ' is-invalid';
        }
        return (
            <div id='cobertura' className='contianer-fluid p-0'>
                <div className='map-top w-100 bg-primary text-light text-right'>
                    <span className='text-uppercase align-middle'>el internet contigo y donde quieras</span>
                    <img className='p-3 align-middle' src={logo} alt='logo' />
                </div>
                <div className='container p-4 p-md-5 text-center'>
                    <h4 className='text-uppercase text-primary'>Consulta nuestra cobertura, ingresa su código postal</h4>
                    <div className='form-line input-group mx-auto my-4'>
                        <input
                            value={this.state.postalCode}
                            onChange={this.handlePostalCodeChange}
                            onKeyUp={this.handlePostalCodeKeyUp}
                            className={'form-control' + validationClass}
                            type='text'
                            placeholder='Código Postal'
                            disabled={!this.state.isHuman}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-primary btn-lg text-uppercase"
                                type="button"
                                id="consultar"
                                onClick={this.handleSubmitSearch}
                                disabled={!this.state.isHuman}
                            >
                                Consultar
                            </button>
                        </div>
                    </div>
                    <div className='form-line mx-auto my-4'>
                        <Recaptcha
                            sitekey='6Lf2KmsUAAAAADMBVZcqaJqUpTmL7pn-bV1KVKJg'
                            onChange={this.handleRecaptcha}
                        />
                    </div>
                    <div id='g-map' className='w-100' ref={this.mapRef}></div>
                </div>
            </div>
        )
    }
}

export default Cobertura;