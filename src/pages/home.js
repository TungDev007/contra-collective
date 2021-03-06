import React from 'react';
import Hero from '../components/home/hero';
import WhoWeAre from '../components/home/who_we_are';
import DifferentApproach from '../components/home/different_approach';
import WhyChooseUs from '../components/home/why_choose_us';
import WhatWeDo from '../components/home/what_we_do';
import ProductList from '../components/home/product_list';
import Agility from '../components/home/agility';
import OurPartners from '../components/home/our_partners';
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
            <OurPartners />
            <Contact />
            <Footer />
        </div>
    )
}

export default HomePage;