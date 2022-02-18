import React from 'react';
import $ from 'jquery';
import Recaptcha from 'react-google-recaptcha';
import loadJS from '../helpers/loadJS';
import logo from '../media/ON_logo_blanco.png';
import dishonLocations from '../locations/dishonLocations';
import Api from '../helpers/Api';

class Map extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            postalCode: '',
            error: false,
            isHuman: true,
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
        // if(event.key === 'Enter')
            // this.handleSubmitSearch();
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

        //alert("estas dentro de handle con postalcode: "+ postalCode);
        let location = null;
        for(var i = 0; i < dishonLocations.length; i++) {
            location = dishonLocations[i];
            if(location.postalCode === postalCode){
                //alert("El codigo postal coincide");
                break;
            }
                
            
            location = null;
        }

        //alert("estas dentro de handle con location: "+ location);
        if(location === null) {
            this.setState({ error: true });
            if (window.confirm('No hemos localizado un punto de venta cercano a tu domicilio, ¡pero no te preocupes! \n\n Llena el siguiente formulario y nosotros nos ponemos en contacto contigo para que te pongas ON')) 
                {
                    window.location.href='/contrata';
                };

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
        const key = 'AIzaSyAkgOryaCfC3yHjLJY2-SvQOzp2sugrI3c';
       // const key = 'AIzaSyCnmK6idgVg5q6Kt7AVacghzaSmaG3wENU';
        // const key = 'AIzaSyDRAbXJn_LPTbOI2w3C03klkr7E1FLoBgg'; // Development
        const src = 'https://maps.googleapis.com/maps/api/js?key=' + key+'&libraries=places';
        loadJS(src, (err, result) =>
        {
            // if(err){
            //     alert("No hemos localizado un punto de venta cercano a tu domicilio, ¡pero no te preocupes! \n\n Llena el siguiente formulario y nosotros nos ponemos en contacto contigo para que te pongas ON");

            //     if (window.confirm('No hemos localizado un punto de venta cercano a tu domicilio, ¡pero no te preocupes! \n\n Llena el siguiente formulario y nosotros nos ponemos en contacto contigo para que te pongas ON')) 
            //     {
            //         window.location.href='/contrata';
            //     };

            //     return console.error(err);
            // }

            // this.map = new window.google.maps.Map(this.mapRef.current, {
            //     center: { lat: 21.1996573, lng: -101.8276726 },
            //     streetViewControl: false,
            //     mapTypeControl: false,
            //     zoom: 6
            // });

                this.map = new window.google.maps.Map(this.mapRef.current, {
                  center: {lat: 19.353381,lng:  -99.157460},
                  zoom: 13,
                  mapTypeId: 'roadmap'
                });

                var mapacom= this.map;
        
                window.google.maps.event.addListener(mapacom, 'click', function(event) { 
                  document.getElementById("latlon").value= event.latLng.lat() + ", " + event.latLng.lng();
                   markers.forEach(function(marker) {
                    marker.setMap(null);
                  });
                  markers = [];
                   var latitudajax = $('#latlon').val().split(",")[0];
                  var lonajax=$('#latlon').val().split(",")[1];   
                 var openId,dn,iccid;
                  $.ajax ({
                      url: "https://9f4eqobkma.execute-api.us-east-1.amazonaws.com/prod/login",
                      type: "POST",
                      data: JSON.stringify({ 
                         "user": "oninternet",
                          "password": "MgZlxvs67z"
                      }
                  ),
                  dataType: "json",
                  async:false,
                  contentType: "application/json; charset=utf-8",
              
                      success: function( data, status){ 
                          openId=data.openid;
                      }
                  });

               $.ajax ({
                  url: "https://9f4eqobkma.execute-api.us-east-1.amazonaws.com/prod/direccion",
                  type: "POST",
                  data: JSON.stringify({ 
                      "latitud":latitudajax.replace("(",""),
                      "longitud":lonajax.replace(")","")
                              
                  }),
                  dataType: "json",
                  contentType: "application/json; charset=utf-8",
                  headers: {"openid": openId},
              
                success: function( data, status){
                  
                    var city=data.internet.direccion;
                    $("#coordenadas_modal").html(city);
                    $("#pac-input").val(city);
                  }
                 });

                  


                  var icon = {
                      path: window.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                      scale: 5, //tamaño
                      strokeColor: '#00953a', //color del borde
                      strokeWeight: 5, //grosor del borde
                      fillColor: '#00953a', //color de relleno
                      fillOpacity:1// opacidad del relleno
                  };

                    markers.push(new window.google.maps.Marker({
                             icon: icon,
                              title: "Marcador",
                             position : {
                                          lat : parseFloat( event.latLng.lat()),
                                          lng : parseFloat( event.latLng.lng())
                                      },

                              map: mapacom
                    }));

                   
                  });
                // Create the search box and link it to the UI element.
                var input = document.getElementById('pac-input');
                var searchBox = new window.google.maps.places.SearchBox(input);
                mapacom.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);
        
                // Bias the SearchBox results towards current map's viewport.
                mapacom.addListener('bounds_changed', function() {
                  searchBox.setBounds(mapacom.getBounds());
                });
        
                var markers = [];
                // Listen for the event fired when the user selects a prediction and retrieve
                // more details for that place.
                searchBox.addListener('places_changed', function() {
                  console.log("cambio");
                  var places = searchBox.getPlaces();
        
                  if (places.length == 0) {
                    return; 
                  }
        
                  // Clear out the old markers.
                  markers.forEach(function(marker) {
                    marker.setMap(null);
                  });
                  markers = [];
        
                  // For each place, get the icon, name and location.
                  var bounds = new window.google.maps.LatLngBounds();
                  console.log(bounds);

                  places.forEach(function(place) {
                            if (!place.geometry) {
                              console.log("Returned place contains no geometry");
                              return;
                            }
                            var icon = {
                            path: window.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                            scale: 5, //tamaño
                            strokeColor: '#00953a', //color del borde
                            strokeWeight: 5, //grosor del borde
                            fillColor: '#00953a', //color de relleno
                            fillOpacity:1// opacidad del relleno
                            };



                           
                
                            // Create a marker for each place.
                            
                            markers.push(new window.google.maps.Marker({
                               icon: icon,
                              title: place.name,
                              position: place.geometry.location,
                              map: mapacom
                            }));
                            
                            var coords= place.geometry.location;
                            document.getElementById("latlon").value= coords;

                            
                            if (place.geometry.viewport) {
                              // Only geocodes have viewport.
                              bounds.union(place.geometry.viewport);
                            } else {
                              bounds.extend(place.geometry.location);
                            }
                          });
                          mapacom.fitBounds(bounds);
                        });

                });



           $("#dispoonibilidadBtn").click(function(){

            if($("#latlon").val()=="" && $("#pac-input").val()==""){

                    alert("Por favor selecciona un marcador");
                    return; 

            }

            $(".loading").show();  
          var openId,dn,iccid;
          $.ajax ({
              url: "https://9f4eqobkma.execute-api.us-east-1.amazonaws.com/prod/login",
              type: "POST",
              data: JSON.stringify({ 
                 "user": "oninternet",
                  "password": "MgZlxvs67z"
              }
          ),
          dataType: "json",
          async:false,
          contentType: "application/json; charset=utf-8",
      
              success: function( data, status){ 
                  openId=data.openid;
              }
          });

          var latitudajax = $('#latlon').val().split(",")[0];
          var lonajax=$('#latlon').val().split(",")[1];     
                   
        $.ajax ({
          url: "https://9f4eqobkma.execute-api.us-east-1.amazonaws.com/prod/altan/cobertura",
          type: "POST",
          data: JSON.stringify({ 
              "latitud":latitudajax.replace("(",""),
                      "longitud":lonajax.replace(")","")
                      
          }),
          dataType: "json",
          contentType: "application/json; charset=utf-8",
          headers: {"openid": openId},
      
          success: function( data, status){
               $(".loading").hide();  
              var coberturaTMX="Telmex:";
              var coberturaAltan="Inalámbrico: ";
              var coberturaHispasat="Hispasat:";
               console.log(data);
              var cobertura="";

               $.ajax ({
                  url: "https://9f4eqobkma.execute-api.us-east-1.amazonaws.com/prod/direccion",
                  type: "POST",
                  data: JSON.stringify({ 
                     "latitud":latitudajax.replace("(",""),
                      "longitud":lonajax.replace(")","")
                              
                  }),
                  dataType: "json",
                  contentType: "application/json; charset=utf-8",
                  headers: {"openid": openId},
              
                success: function( data, status){
                  
                  var city=data.internet.direccion;
                  $("#coordenadas_modal").html(city);
                  $("#pac-input").val(city);

                
              
                }


               });
              if(data.altan.hasCoverage){
                  for ( var i = 0, l = data.altan.coverage.length; i < l; i++ ) {

                      coberturaAltan+= "<p> Internet "+data.altan.coverage[i]+"</p>";
                      cobertura+="Internet "+data.altan.coverage[i]+ ", ";
                  }

              $("#paquetes_disponibes_modal").html(coberturaAltan);

             

             

              $("#señal_mapa_modal").modal("show");


              $("#contrue").attr("href","/contrata?tecnologia=inalambrico&latitud="+latitudajax.replace("(","")+"&longuitud="+lonajax.replace(")","")+"&cobertura="+cobertura);

              }else{
                  coberturaAltan+="Sin cobertura"
                  // $("#coordenadas_modal").html($("#latlon").val());
                  $("#señal_mapa_sin_modal").modal("show");
                  $("#confalse").attr("href","/contrata?tecnologia=inalambrico&latitud="+latitudajax.replace("(","")+"&longuitud="+lonajax.replace(")","")+"&cobertura=Sin Cobertura");

              }
            
              // alert(coberturaAltan );




           

               }                            });
   
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
            'NUMERO EXTERIOR: ' + location.externalNumber + '<br/>' +
            'ATENCIÓN: ' + location.atencion;
        
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
            <div id='map' className='contianer-fluid p-0'>

                 <div className='map-top w-100 bg-primary text-light text-right'>
                    <span className='text-uppercase align-middle'>Cobertura Inalámbrico</span>
                    <img className='p-3 align-middle' src={logo} alt='logo' />
                </div>
                
                <div className='text-center mt-5'>
                  <h3>Se validará cobertura en <strong>ON Inalámbrico</strong></h3> <br/>
                  <p>También puedes validar cobertura en <a href="/cobertura_alambrico">ON Alámbrico</a> y <a href="/cobertura_satelital">ON Satelital</a></p>
                </div>   
                <div className='container p-4 p-md-5'>
                    <div className='row mb-5 align-items-center'>
                        <div className='col-12 col-lg-4'>
                                  <input
                                    className={'form-control inputmap' + validationClass}
                                    type='text'
                                    id="pac-input"
                                    placeholder='Direccion para validar cobertura'
                                />
                        </div>
                        <div className='col-12 col-lg-4 py-4 py-lg-0'>
                           
                        </div>
                        <div className='col-12 col-lg-4'>
                            <div className='input-group visualizadormayor'>
                                <input
                                   id="latlon"
                                    className={'form-control alinea_tamanio_' + validationClass}
                                    type='text'
                                    placeholder='Cordenadas'
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-secondary btn-lg"
                                        style={{width: '100px'}}
                                        type="button"
                                        id="dispoonibilidadBtn"
                                        

                                    >
                                        Validar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="loading"><div className="loader_spin"></div></div> 
                    <div id='g-map' className='w-100 alinearmapa' ref={this.mapRef}></div>
                </div>

                <p>Todos los paquetes están sujetos a condiciones técnicas y disponibilidad de cobertura.</p>

                <div className='modal fade' id='señal_mapa_modal' tabindex='-1' role='dialog' aria-hidden='true'>
                  <div className='modal-dialog modal-dialog-centered modal-xl' role='document'>
                    <div className='modal-content'>
                      <div className='modal-header modal-header-right-side'>
                        <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                          <span aria-hidden='true'>&times;</span>
                        </button>
                      </div>
                      <div className='modal-body modal-body-right- text-center'>
                        <h5 className='modal-title title-center'>Si tenemos cobertura en tu domicilio</h5>
                        <p id="coordenadas_modal">  </p>
                        <h5 className='modal-title title-center'>Paquetes disponibles</h5>
                        <p id="paquetes_disponibes_modal">  </p>
                        <a href="/contrata" id="contrue"  className="btn btn-secondary btn-lg">CONTRATAR</a>
                      </div>
                    </div>
                  </div>
                </div> 


                 <div className='modal fade' id='señal_mapa_sin_modal' tabindex='-1' role='dialog' aria-hidden='true'>
                  <div className='modal-dialog modal-dialog-centered modal-xl' role='document'>
                    <div className='modal-content'>
                      <div className='modal-header modal-header-right-side'>
                        <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                          <span aria-hidden='true'>&times;</span>
                        </button>
                      </div>
                      <div className='modal-body modal-body-right- text-center'>
                        <h5 className='modal-title title-center'>No tenemos cobertura en tu domicilio</h5>
                        <p id="coordenadas_modal">  </p>
                        <h5 className='modal-title title-center'>Déjanos tus datos para contactarte y ofrecerte otra opción de conexiON</h5>
                        <p id="paquetes_disponibes_modal">  </p>
                        <a href="/contrata" id="confalse" className="btn btn-secondary btn-lg">CONTACTAME</a>
                      </div>
                    </div>
                  </div>
                </div> 




            </div>
        )
    }
}

export default Map;