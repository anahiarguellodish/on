import React from 'react';

import Carousel from './Home/Carousel_satelital';
// import TempCarousel from './Home/TempCarousel';
import Icons from './Home/Icons';
import Plans from './Home/plans_satelital';
import Banner from './Home/Banner';
import Contjs from './Home/Contjs';


const Home = () => (
    <div id='home'>

        <Carousel/>
        {/* <TempCarousel/> */}
        <Icons/>
        <Plans/>
        <Banner/>
        <Contjs/>
        

       
    </div>
);

export default Home;