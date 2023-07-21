import { Box, Container, Typography, Button } from '@mui/material';
import React from 'react';

function Craft() {
    return (
        <Container>
            <Typography variant="h5" sx={{ color: 'secondary.dark', mb: '10px' }}>
                Our Product
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', gap: '10px', mb: '160px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
                    <Typography variant="h2" sx={{ maxWidth: '540px' }}>
                        Crafted by talented and high quality material
                    </Typography>
                    <Typography sx={{ color: '#AFADB5', fontSize: '18px', fontWeight: '500', lineHeight: '180%', maxWidth: '540px' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient. morbi fermentum, vivamus et accumsan dui tincidunt
                        pulvinar
                    </Typography>
                    <Button variant="contained" sx={{ borderRadius: '0', fontWeight: '700', color: '#fff', fontSize: '18px', width: '170px' }}>
                        Learn More
                    </Button>
                    <Box component="img" src="https://picsum.photos/id/10/550/260" sx={{ width: '100%', maxWidth: '595px', height: 'auto' }}></Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', gap: '50px', justifyContent: 'flex-end' }}>
                        <Box>
                            <Typography variant="h2">20+</Typography>
                            <Typography sx={{ color: '#AFADB5', fontSize: '18px', fontWeight: '500', lineHeight: '180%' }}>Years Experience</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h2">483</Typography>
                            <Typography sx={{ color: '#AFADB5', fontSize: '18px', fontWeight: '500', lineHeight: '180%' }}>Happy Client</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h2">150+</Typography>
                            <Typography sx={{ color: '#AFADB5', fontSize: '18px', fontWeight: '500', lineHeight: '180%' }}>Project Finished</Typography>
                        </Box>
                    </Box>
                    <Box component="img" src="https://picsum.photos/id/11/550/510" sx={{ width: '100%', height: 'auto' }}></Box>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexWrap: 'wrap', mb: '100px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Typography variant="h3">Crafted by talented and high quality material</Typography>
                    <Typography sx={{ color: '#AFADB5', fontSize: '14px', fontWeight: '500', lineHeight: '180%' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient. morbi fermentum, vivamus et accumsan dui tincidunt
                        pulvinar
                    </Typography>
                    <Button variant="contained" sx={{ borderRadius: '0', fontWeight: '700', color: '#fff', fontSize: '14px' }}>
                        Learn More
                    </Button>
                    <Box sx={{ display: 'flex', gap: '20px', mb: '50px' }}>
                        <Box>
                            <Typography variant="h4">20+</Typography>
                            <Typography sx={{ color: '#AFADB5', fontSize: '14px', fontWeight: '500', lineHeight: '180%' }}>Years Experience</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h4">483</Typography>
                            <Typography sx={{ color: '#AFADB5', fontSize: '14px', fontWeight: '500', lineHeight: '180%' }}>Happy Client</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h4">150+</Typography>
                            <Typography sx={{ color: '#AFADB5', fontSize: '14px', fontWeight: '500', lineHeight: '180%' }}>Project Finished</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Box component="img" src="https://picsum.photos/id/10/550/260" sx={{ width: '100%', maxWidth: '595px', height: 'auto' }}></Box>
                    <Box component="img" src="https://picsum.photos/id/11/550/510" sx={{ width: '100%', height: 'auto' }}></Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Craft;
