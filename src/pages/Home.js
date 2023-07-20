import React from 'react';
import Header from '../components/header/Header';
import DiscoverFurniture from '../components/home/DiscoverFurniture';
import { Box } from '@mui/material';
import Benefits from '../components/home/Benefits';
import Products from '../components/home/Products';

function Home() {
    return (
        <Box>
            <Header />
            <DiscoverFurniture />
            <Benefits />
            <Products />
        </Box>
    );
}

export default Home;
