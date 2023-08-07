import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import Header from '../components//header/Header';
import Footer from '../components/footer/Footer';
import OurMission from '../components/about/OurMission';
import OurTeam from '../components/about/OurTeam';

function AboutUs() {
    return (
        <Box>
            <Header />
            <Container>
                <Box sx={{ textAlign: 'center', display: { xs: 'none', md: 'flex' }, flexDirection: 'column', justifyContent: 'center', mb: '160px' }}>
                    <Typography variant="h1" sx={{ m: '100px 0 20px' }}>
                        About Us
                    </Typography>
                    <Typography sx={{ mb: '50px', fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                        We display products based on the latest products we have,
                        <br />
                        if you want to see our old products please enter the name of the item
                    </Typography>
                    <video style={{ width: '100%', height: 'auto' }} controls>
                        <source src="https://www.youtube.com/watch?v=F1B9Fk_SgI0&list=RDVrDfSZ_6f4U&index=20" type="text/html" />
                    </video>
                </Box>
                <Box sx={{ textAlign: 'center', display: { xs: 'flex', md: 'none' }, flexDirection: 'column', justifyContent: 'center', mb: '100px' }}>
                    <Typography variant="h3" sx={{ m: '50px 0 20px' }}>
                        About Us
                    </Typography>
                    <Typography sx={{ mb: '30px', fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                        We display products based on the latest products we have, if you want to see our old products please enter the name of the item
                    </Typography>
                    <video style={{ width: '100%', height: 'auto' }} controls>
                        <source src="https://www.youtube.com/watch?v=F1B9Fk_SgI0&list=RDVrDfSZ_6f4U&index=20" type="text/html" />
                    </video>
                </Box>
                <OurMission />
                <OurTeam />
                <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', mb: '80px' }}>
                    <Typography variant="h2" sx={{ maxWidth: '400px' }}>
                        Are you interested work with us?
                    </Typography>
                    <Button variant="contained" sx={{ maxHeight: '50px', fontSize: '18px', color: '#ffffff', borderRadius: '0', textTransform: 'capitalize' }}>
                        let's Talk &#10132;
                    </Button>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', alignItems: 'center', mb: '50px' }}>
                    <Typography variant="h3" sx={{ mb: '20px' }}>
                        Are you interested work with us?
                    </Typography>
                    <Button variant="contained" sx={{ fontSize: '14px', color: '#ffffff', borderRadius: '0', textTransform: 'capitalize' }}>
                        let's Talk &#10132;
                    </Button>
                </Box>
                <Footer />
            </Container>
        </Box>
    );
}

export default AboutUs;
