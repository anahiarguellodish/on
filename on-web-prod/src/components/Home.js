import React from 'react';

import Carousel from './Home/Carousel';
// import TempCarousel from './Home/TempCarousel';
import Icons from './Home/Icons';
import Plans from './Home/Plans';
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