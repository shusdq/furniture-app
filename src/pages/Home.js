import React from 'react';
import Header from '../components/header/Header';
import DiscoverFurniture from '../components/home/DiscoverFurniture';
import { Box } from '@mui/material';
function Home() {
    return (
        <Box>
            <Header />
            <DiscoverFurniture />
        </Box>
    );
}

export default Home;
