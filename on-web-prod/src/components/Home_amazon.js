import React from 'react';

import Carousel from './Home/Carousel_amazon';
// import TempCarousel from './Home/TempCarousel';
import Icons from './Home/Icons';
import Plans from './Home/plans_amazon';
import Banner from './Home/banner_amazon.js';
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