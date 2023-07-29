import { Box, Button, Typography } from '@mui/material';
import React from 'react';

function Portfolio() {
    return (
        <Box>
            <Typography variant="5" sx={{ mb: '10px', color: 'secondary.dark' }}>
                Portofolio
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', mb: '50px' }}>
                <Typography variant="h2" sx={{ maxWidth: '450px' }}>
                    Amazing project we have done before
                </Typography>
                <Box>
                    <Typography sx={{ maxWidth: '450px', fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5', mb: '20px' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
                    </Typography>
                    <Button sx={{ fontSize: '18px', textTransform: 'capitalize' }}>View Portofolio</Button>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexWrap: 'wrap', mb: '40px' }}>
                <Typography variant="h3" sx={{ mb: '15px' }}>
                    Amazing project we have done before
                </Typography>
                <Box>
                    <Typography sx={{ fontSize: '14px', fontWeight: '500', lineHeight: '180%', color: '#AFADB5', mb: '15px' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
                    </Typography>
                    <Button sx={{ fontSize: '14px', textTransform: 'capitalize', textDecoration: 'underline', p: '0' }}>View Portofolio</Button>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '30px', mb: '160px' }}>
                <Box sx={{ position: 'relative' }}>
                    <Box component="img" src="/images/rectangle6.png" sx={{ width: '100%', height: 'auto' }}></Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', left: '0', m: '6%' }}>
                        <Typography variant="h3" sx={{ color: '#fff' }}>
                            Siska Kohl`s Bedroom
                        </Typography>
                        <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#fff', opacity: '0.7', mb: '10px' }}>
                            We start renovating her bedroom with minimalist...
                        </Typography>
                        <Button sx={{ justifyContent: 'flex-start', fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#fff', textTransform: 'capitalize' }}>See Detail</Button>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <Box sx={{ position: 'relative' }}>
                        <Box component="img" src="/images/rectangle9.png" sx={{ width: '100%', height: 'auto' }}></Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', left: '0', m: '6%' }}>
                            <Typography variant="h3" sx={{ color: '#fff' }}>
                                Jeruk Veldevana Living Room Design
                            </Typography>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#fff', opacity: '0.7', mb: '10px' }}>
                                We start renovating her bedroom with minimalist...
                            </Typography>
                            <Button sx={{ justifyContent: 'flex-start', fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#fff', textTransform: 'capitalize' }}>See Detail</Button>
                        </Box>
                    </Box>
                    <Box sx={{ position: 'relative' }}>
                        <Box component="img" src="/images/rectangle10.png" sx={{ width: '100%', height: 'auto' }}></Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', left: '0', m: '6%' }}>
                            <Typography variant="h3" sx={{ color: '#fff' }}>
                                Cozy Co-working space
                            </Typography>
                            <Typography sx={{ fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#fff', opacity: '0.7', mb: '10px' }}>
                                We start renovating her bedroom with minimalist...
                            </Typography>
                            <Button sx={{ justifyContent: 'flex-start', fontSize: '18px', fontWeight: '500', lineHeight: '180%', color: '#fff', textTransform: 'capitalize' }}>See Detail</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', gap: '20px', mb: '80px' }}>
                <Box sx={{ position: 'relative' }}>
                    <Box component="img" src="/images/rectangle6.png" sx={{ width: '100%', height: 'auto', maxWidth: '400px' }}></Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', left: '0', m: '6%' }}>
                        <Typography variant="h6" sx={{ color: '#fff' }}>
                            Siska Kohl`s Bedroom
                        </Typography>
                        <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#fff', opacity: '0.7', mb: '10px' }}>
                            We start renovating her bedroom with minimalist...
                        </Typography>
                        <Button sx={{ justifyContent: 'flex-start', fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#fff', textTransform: 'capitalize' }}>See Detail</Button>
                    </Box>
                </Box>

                <Box sx={{ position: 'relative' }}>
                    <Box component="img" src="/images/rectangle7.png" sx={{ width: '100%', height: 'auto', maxWidth: '400px' }}></Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', left: '0', m: '6%' }}>
                        <Typography variant="h6" sx={{ color: '#fff' }}>
                            Jeruk Veldevana Living Room Design
                        </Typography>
                        <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#fff', opacity: '0.7', mb: '10px' }}>
                            We start renovating her bedroom with minimalist...
                        </Typography>
                        <Button sx={{ justifyContent: 'flex-start', fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#fff', textTransform: 'capitalize' }}>See Detail</Button>
                    </Box>
                </Box>
                <Box sx={{ position: 'relative' }}>
                    <Box component="img" src="/images/rectangle8.png" sx={{ width: '100%', height: 'auto', maxWidth: '400px' }}></Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', bottom: '0', left: '0', m: '6%' }}>
                        <Typography variant="h6" sx={{ color: '#fff' }}>
                            Cozy Co-working space
                        </Typography>
                        <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#fff', opacity: '0.7', mb: '10px' }}>
                            We start renovating her bedroom with minimalist...
                        </Typography>
                        <Button sx={{ justifyContent: 'flex-start', fontSize: '12px', fontWeight: '500', lineHeight: '180%', color: '#fff', textTransform: 'capitalize' }}>See Detail</Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center', mb: '80px' }}>
                <Typography variant="h2" sx={{ maxWidth: '400px' }}>
                    Are you interested work with us?
                </Typography>
                <Button variant="contained" sx={{ maxHeight: '50px', fontSize: '18px', color: '#ffffff', borderRadius: '0', textTransform: 'capitalize' }}>
                    Let`s Talk &#10132;
                </Button>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', alignItems: 'center', mb: '50px' }}>
                <Typography variant="h3" sx={{ mb: '20px' }}>
                    Are you interested work with us?
                </Typography>
                <Button variant="contained" sx={{ fontSize: '14px', color: '#ffffff', borderRadius: '0', textTransform: 'capitalize' }}>
                    Let`s Talk &#10132;
                </Button>
            </Box>
        </Box>
    );
}

export default Portfolio;
