import React from 'react';
import Header from '../components/header/Header';
import DiscoverFurniture from '../components/home/DiscoverFurniture';
import { Box } from '@mui/material';
import Benefits from '../components/home/Benefits';
import Items from '../components/home/Items';
import Craft from '../components/home/Craft';
import Testimonials from '../components/home/Testimonials';
import Footer from '../components/footer/Footer';
import Articles from '../components/home/Articles';

function Home({ products, posts }) {
    return (
        <Box>
            <Header />
            <DiscoverFurniture />
            <Benefits />
            <Items products={products} />
            <Craft />
            <Testimonials />
            <Articles posts={posts} />
            <Footer />
        </Box>
    );
}

export default Home;
