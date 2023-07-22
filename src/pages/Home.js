import React from 'react';
import Header from '../components/header/Header';
import DiscoverFurniture from '../components/home/DiscoverFurniture';
import { Box } from '@mui/material';
import Benefits from '../components/home/Benefits';
import Products from '../components/home/Products';
import Craft from '../components/home/Craft';
import Testimonials from '../components/home/Testimonials';
import Footer from '../components/footer/Footer';
import Articles from '../components/home/Articles';

function Home() {
    return (
        <Box>
            <Header />
            <DiscoverFurniture />
            <Benefits />
            <Products />
            <Craft />
            <Testimonials />
            <Articles />
            <Footer />
        </Box>
    );
}

export default Home;
