import React from 'react';
import Hero from '../components/home/hero';
import WhoWeAre from '../components/home/who_we_are';
import DifferentApproach from '../components/home/different_approach';
import WhyChooseUs from '../components/home/why_choose_us';
import WhatWeDo from '../components/home/what_we_do';
import ProductList from '../components/home/product_list';
import Agility from '../components/home/agility';
// import WhatPeopleSay from '../components/home/what_people_say';
import Contact from '../components/home/contact';
import Footer from '../components/home/footer';
import '../assets/styles/home.scss';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <WhoWeAre />
            <DifferentApproach />
            <WhyChooseUs />
            <WhatWeDo />
            <ProductList />
            <Agility />
            {/* <WhatPeopleSay /> */}
            <Contact />
            <Footer />
        </div>
    )
}

export default HomePage;