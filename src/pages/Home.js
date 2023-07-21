import React from 'react';
import Header from '../components/header/Header';
import DiscoverFurniture from '../components/home/DiscoverFurniture';
import { Box } from '@mui/material';
import Benefits from '../components/home/Benefits';
import Products from '../components/home/Products';
import Craft from '../components/home/Craft';
import Testimonials from '../components/home/Testimonials';
import Footer from '../components/footer/Footer';

function Home() {
    return (
        <Box>
            <Header />
            <DiscoverFurniture />
            <Benefits />
            <Products />
            <Craft />
            <Testimonials />
            <Footer />
        </Box>
    );
}

export default Home;
