import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Modal from './components/Modales/Modal';
import Home from './components/Home';
import Contact from './components/Contact';
import CustomerService from './components/CustomerService';
import PlacesOfPayment from './components/PlacesOfPayment';
import Recharge from './components/Recharge';
import Map from './components/Map';
import FAQ from './components/FAQ';
import TermsOfUse from './components/TermsOfUse';
import TermsAndConditions from './components/TermsAndConditions';
import TermsAndConditionsin from './components/TermsAndConditionsin';
import TermsAndConditionssat from './components/TermsAndConditionssat';
import TermsAndConditionsal from './components/TermsAndConditionsal';
import TermsAndConditionpor from './components/TermsAndConditionpor';
import TermsAndConditionson from './components/TermsAndConditionson';


import Address from './components/Address';
import MinRights from './components/MinRights';
import Privacy from './components/Privacy';
import PrivacyIntegral from './components/PrivacyIntegral';
import Footer from './components/Footer';

import Prices from './components/Prices';
import Prices_in from './components/Prices_in';
import Prices_sat from './components/Prices_sat';
import Prices_an from './components/Prices_an';

import Cargos_in from './components/Cargos_in';
import Cargos_an from './components/Cargos_an';
import Cargos_sat from './components/Cargos_sat';
import Cargos_on from './components/Cargos_on';


import Soporte_tec from './components/Soporte_tec';


import Rates from './components/Rates';
import Rates_in from './components/Rates_in';
import Rates_an from './components/Rates_an';
import Rates_an_fija from './components/Rates_an_fija';
import Rates_sat from './components/Rates_sat';
import Rates_in_pre from './components/Rates_in_pre';
import Rates_on from './components/Rates_on.js'

import Captive from './components/Captive';
import Cobertura from './components/Cobertura';
import Packs from './components/Packs';
import Recharges from './components/Recharges';

import SoporteTecnico from './components/SoporteTecnico';

import Service_costs from './components/Service-costs';
import Legal from './components/Legal';

import Additional_costs from './components/Additional_costs';
import polizadegarantia from './components/Poliza_garantia';

import tutorialesin from './components/Tutoriales_in';
import tutorialesal from './components/Tutoriales_al';
import tutorialessat from './components/Tutoriales_sat';
import cambiowifim4 from './components/Cambiowifim4';
import cambiowifihuawei from './components/Cambiowifihuawei';

import preciosfronterizos from './components/PreciosFronterizos';
import Portabilidad from './components/Portabilidad';


import Cargos_in_prepago from './components/Cargos_in_prepago';
import TermsAndConditioninpre from './components/TermsAndConditionsinpre';
import TermsAndConditiontelfija from './components/TermsAndConditiontelfija';

import Contratopostalfija from './components/Contratopostalfija';
import Contratopre from './components/Contratopre';
import Contratosat from './components/Contratosat';


import Solicitudpostalfija from './components/Solicitudpostalfija';
import Solicitudpre from './components/Solicitudpre';
import Solicitudsat from './components/Solicitudsat';

import Frame from './components/Frame';
import Cobertura_satelital from './components/cobertura_satelital';
import Cobertura_inalambrico from './components/cobertura_inalambrico';
import Home_alambrico from './components/Home_alambrico';
import Home_satelital from './components/Home_satelital';
import Home_amazon from './components/Home_amazon';
import Avisoimport from './components/Avisoimport';


class App extends React.Component
{
    render()
    {
        return (
            <Router>
                <div id="app" className="container-fluid p-0">
                    <div className='sticky-top shadow-sm' style={{zIndex:2020}}>
                        <Navbar/>
                        <Modal/>
                    </div>
                    <div style={{zIndex:2000}}>
                        <Route exact path='/' component={Home}/>
                        <Route path='/customer-service' component={CustomerService}/>
                        <Route path='/contrata' component={Contact}/>
                        <Route path='/places-of-payment' component={PlacesOfPayment}/>
                        <Route path='/map' component={Map}/>
                        <Route path='/recharge' component={Recharge}/>
                        <Route path='/faq' component={FAQ}/>
                        <Route path='/terms-and-conditions' component={TermsAndConditions}/>
                        <Route path='/address' component={Address}/>
                        <Route path='/min-rights' component={MinRights}/>
                        <Route path='/terms-of-use' component={TermsOfUse}/>
                        <Route path='/privacy' component={Privacy}/>
                        <Route path='/privacy-integral' component={PrivacyIntegral}/>
                        <Route path='/prices' component={Prices}/>
                        <Route path='/pricesin' component={Prices_in}/>
                        <Route path='/pricessat' component={Prices_sat}/>
                        <Route path='/pricesan' component={Prices_an}/>

                        <Route path='/rates' component={Rates}/>
                        <Route path='/ratesin' component={Rates_in}/>
                        <Route path='/ratesan' component={Rates_an}/>
                        <Route path='/ratesanfija' component={Rates_an_fija}/>
                        <Route path='/ratessat' component={Rates_sat}/>
                        <Route path='/ratesinpre' component={Rates_in_pre}/>
                        <Route path='/rateson' component={Rates_on} />

                        



                        <Route path='/recargas' component={Captive}/>
                        <Route path='/cobertura' component={Cobertura}/>
                        <Route path='/paquetes' component={Packs}/>
                        <Route path='/recargas1' component={Recharges}/>

                        <Route path='/cargosin' component={Cargos_in}/>
                        <Route path='/cargosan' component={Cargos_an}/>
                        <Route path='/cargossat' component={Cargos_sat}/>
                        <Route path='/cargoson' component={Cargos_on} />


                         <Route path='/soportetec' component={Soporte_tec}/>

                         <Route path='/terms-and-conditionsin' component={TermsAndConditionsin}/>
                         <Route path='/terms-and-conditionsal' component={TermsAndConditionsal}/>
                         <Route path='/terms-and-conditionssat' component={TermsAndConditionssat}/>
                         <Route path='/terms-and-conditionson' component={TermsAndConditionson}/>

                         <Route path='/soporte-tecnico' component={SoporteTecnico}/>
            			 <Route path='/service-costs' component={Service_costs}/>
            			 <Route path='/legal' component={Legal}/>

                         <Route path='/additional-costs' component={Additional_costs}/>
                         <Route path='/polizagarantia' component={polizadegarantia}/>

                         <Route path='/tutorialesin' component={tutorialesin}/>
                         <Route path='/tutorialesal' component={tutorialesal}/>
                         <Route path='/tutorialessat' component={tutorialessat}/>

                         <Route path='/cambiowifim4' component={cambiowifim4}/>
                         <Route path='/cambiowifihuawei' component={cambiowifihuawei}/>

                         <Route path='/preciosfronterizos' component={preciosfronterizos}/>
                         <Route path='/portabilidad' component={Portabilidad}/>
                         <Route path='/terms-and-conditionspor' component={TermsAndConditionpor}/>
                         <Route path='/cargosinprepago' component={Cargos_in_prepago}/>
                         <Route path='/terms-and-conditionsin-prepago' component={TermsAndConditioninpre}/>
                         <Route path='/terms-and-conditionstelfija' component={TermsAndConditiontelfija}/>


                         <Route path='/contratopostalfija' component={Contratopostalfija}/>
                         <Route path='/contratopre' component={Contratopre}/>
                         <Route path='/contratosat' component={Contratosat}/>


                         <Route path='/solicitudpostalfija' component={Solicitudpostalfija}/>
                         <Route path='/solicitudpre' component={Solicitudpre}/>
                         <Route path='/solicitudsat' component={Solicitudsat}/>


                         <Route path='/cobertura_alambrico' component={Frame}/>
                         <Route path='/cobertura_satelital' component={Cobertura_satelital}/>

                         <Route path='/cobertura_inalambrico' component={Cobertura_inalambrico}/>

                         <Route path='/alambrico' component={Home_alambrico}/>
                         <Route path='/satelital' component={Home_satelital}/>
                         <Route path='/On Internet/Amazon Prime' component={Home_amazon}/>
                         <Route path='/Avisoimport' component={Avisoimport}/>


                         





                         

                         


                        <Footer />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
