/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Category from '../../components/Category/Category';
import Gallery from '../../components/Gallery/Gallery';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Category />
            <Gallery />
            <Footer />
        </div>
    );
};

export default HomePage;