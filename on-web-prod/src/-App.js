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


import Soporte_tec from './components/Soporte_tec';


import Rates from './components/Rates';
import Rates_in from './components/Rates_in';
import Rates_an from './components/Rates_an';
import Rates_sat from './components/Rates_sat';

import Captive from './components/Captive';
import Cobertura from './components/Cobertura';
import Packs from './components/Packs';
import Recharges from './components/Recharges';

class App extends React.Component
{
    render()
    {
        return (
            <Router>
                <div id="app" className="container-fluid p-0">
                    <div className='sticky-top shadow-sm' style={{zIndex:2020}}>
                        <Navbar />
                        <Modal />
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
                        <Route path='/ratessat' component={Rates_sat}/>


                        <Route path='/recargas' component={Captive}/>
                        <Route path='/cobertura' component={Cobertura}/>
                        <Route path='/paquetes' component={Packs}/>
                        <Route path='/recargas1' component={Recharges}/>

                        <Route path='/cargosin' component={Cargos_in}/>
                        <Route path='/cargosan' component={Cargos_an}/>
                        <Route path='/cargossat' component={Cargos_sat}/>

                         <Route path='/soportetec' component={Soporte_tec}/>

                         <Route path='/terms-and-conditionsin' component={TermsAndConditionsin}/>
                         <Route path='/terms-and-conditionsal' component={TermsAndConditionsal}/>
                         <Route path='/terms-and-conditionssat' component={TermsAndConditionssat}/>
                        <Footer />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
