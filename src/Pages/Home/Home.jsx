import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Features from '../Features/Features';
import Team from '../Team/Team';
import Services from '../Services/Services';
import About from '../About/About';
import Slider from '../Slider/Slider';
import Contact from '../Contact/Contact';
import Testimonial from '../Testimonial/Testimonial';
import PopularProducts from '../PopularProducts/PopularProducts';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <PopularProducts></PopularProducts>
            <Team></Team>
            <Features></Features>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;