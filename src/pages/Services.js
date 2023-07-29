import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Portfolio from '../components/services/Portfolio';

function Services() {
    return (
        <Box>
            <Header />
            <Container>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', m: '100px 0 160px' }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h1" sx={{ mb: '20px' }}>
                            Services
                        </Typography>
                        <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5', mb: '50px' }}>
                            The product crafted by talented crafter and using high quality material with love inside
                        </Typography>
                        <Box component="img" src="/images/rectangle5.png" sx={{ height: 'auto', width: '100%', mb: '100px' }}></Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '360px' }}>
                            <Typography variant="h1" sx={{ color: 'primary.dark', mb: '25px' }}>
                                01
                            </Typography>
                            <Typography variant="h3" sx={{ mb: '5px' }}>
                                Furniture
                            </Typography>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                                At the ultimate smart home, you're met with technology before you even step through the front door.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '360px' }}>
                            <Typography variant="h1" sx={{ color: 'primary.dark', mb: '25px' }}>
                                02
                            </Typography>
                            <Typography variant="h3" sx={{ mb: '5px' }}>
                                Home Decoration
                            </Typography>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                                Create A Calming Summer Escape With Our Luxurious Home Accessories For The Balmy Evenings.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '360px' }}>
                            <Typography variant="h1" sx={{ color: 'primary.dark', mb: '25px' }}>
                                03
                            </Typography>
                            <Typography variant="h3" sx={{ mb: '5px' }}>
                                Kitchen Cabinet
                            </Typography>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                                Introducing the modular kitchen cabinet system. Start with our huge selection of base and wall cabinets.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '360px' }}>
                            <Typography variant="h1" sx={{ color: 'primary.dark', mb: '25px' }}>
                                04
                            </Typography>
                            <Typography variant="h3" sx={{ mb: '5px' }}>
                                Interior Design
                            </Typography>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                                Innovative products often feature innovative designs that play with the patterns we are familiar.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '360px' }}>
                            <Typography variant="h1" sx={{ color: 'primary.dark', mb: '25px' }}>
                                05
                            </Typography>
                            <Typography variant="h3" sx={{ mb: '5px' }}>
                                Exterior Design
                            </Typography>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                                These stylish and resilient products provide up-to-date options for roofing, siding, decking, and outdoor spaces.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '360px' }}>
                            <Typography variant="h1" sx={{ color: 'primary.dark', mb: '25px' }}>
                                06
                            </Typography>
                            <Typography variant="h3" sx={{ mb: '5px' }}>
                                Custom Furniture
                            </Typography>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                                With Quality Materials and Modern Designs, we have Designs for all Tastes. we bring you World Class Designs.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', m: '50px 0 100px' }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h3" sx={{ mb: '20px' }}>
                            Services
                        </Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5', mb: '50px' }}>
                            The product crafted by talented crafter and using high quality material with love inside
                        </Typography>
                        <Box component="img" src="/images/rectangle5.png" sx={{ height: 'auto', width: '100%', mb: '100px' }}></Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '360px' }}>
                            <Typography variant="h2" sx={{ color: 'primary.dark', mb: '20px' }}>
                                01
                            </Typography>
                            <Typography variant="h6" sx={{ mb: '5px' }}>
                                Furniture
                            </Typography>
                            <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                                At the ultimate smart home, you're met with technology before you even step through the front door.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '360px' }}>
                            <Typography variant="h2" sx={{ color: 'primary.dark', mb: '20px' }}>
                                02
                            </Typography>
                            <Typography variant="h6" sx={{ mb: '5px' }}>
                                Home Decoration
                            </Typography>
                            <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                                Create A Calming Summer Escape With Our Luxurious Home Accessories For The Balmy Evenings.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '360px' }}>
                            <Typography variant="h2" sx={{ color: 'primary.dark', mb: '20px' }}>
                                03
                            </Typography>
                            <Typography variant="h6" sx={{ mb: '5px' }}>
                                Kitchen Cabinet
                            </Typography>
                            <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                                Introducing the modular kitchen cabinet system. Start with our huge selection of base and wall cabinets.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '360px' }}>
                            <Typography variant="h2" sx={{ color: 'primary.dark', mb: '20px' }}>
                                04
                            </Typography>
                            <Typography variant="h6" sx={{ mb: '5px' }}>
                                Interior Design
                            </Typography>
                            <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                                Innovative products often feature innovative designs that play with the patterns we are familiar.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '360px' }}>
                            <Typography variant="h2" sx={{ color: 'primary.dark', mb: '20px' }}>
                                05
                            </Typography>
                            <Typography variant="h6" sx={{ mb: '5px' }}>
                                Exterior Design
                            </Typography>
                            <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                                These stylish and resilient products provide up-to-date options for roofing, siding, decking, and outdoor spaces.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '360px' }}>
                            <Typography variant="h2" sx={{ color: 'primary.dark', mb: '20px' }}>
                                06
                            </Typography>
                            <Typography variant="h6" sx={{ mb: '5px' }}>
                                Custom Furniture
                            </Typography>
                            <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5' }}>
                                With Quality Materials and Modern Designs, we have Designs for all Tastes. we bring you World Class Designs.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Portfolio />
                <Footer />
            </Container>
        </Box>
    );
}

export default Services;
