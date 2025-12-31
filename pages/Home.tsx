import React from 'react';
import Hero from '../components/Hero';
import Integrations from '../components/Integrations';
import Services from '../components/Services';
import UseCases from '../components/UseCases';
import WorkingProcess from '../components/WorkingProcess';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Integrations />
            <Services />
            <UseCases />
            <WorkingProcess />
            <AboutUs />
            <Testimonials />
            <ContactUs />
        </>
    );
};

export default Home;
