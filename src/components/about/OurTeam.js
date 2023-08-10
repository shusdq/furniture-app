import { Box, Typography } from '@mui/material';
import React from 'react';

function OurTeam() {
    return (
        <Box sx={{ mb: '160px' }}>
            <Typography variant="h5" sx={{ color: 'secondary.dark', mb: '15px' }}>
                Our Team
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', mb: '50px' }}>
                <Typography variant="h2" sx={{ maxWidth: '500px' }}>
                    Meet our leading and strong team
                </Typography>
                <Typography sx={{ maxWidth: '450px', color: '#AFADB5' }}>
                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
                </Typography>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', flexWrap: 'wrap', mb: '30px' }}>
                <Typography variant="h3" sx={{ mb: '20px' }}>
                    Meet our leading and strong team
                </Typography>
                <Typography variant="p3" sx={{ maxWidth: '400px', color: '#AFADB5' }}>
                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
                </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: '30px', flexWrap: 'wrap', mb: '160px' }}>
                <Box>
                    <Box component="img" src="/team/1.png" sx={{ mb: '25px', width: '100%', height: 'auto', maxWidth: '364px' }}></Box>
                    <Typography variant="h3" sx={{ mb: '5px' }}>
                        Jesse Depp
                    </Typography>
                    <Typography variant="p1" sx={{ color: '#AFADB5' }}>
                        Founder & CEO
                    </Typography>
                </Box>
                <Box>
                    <Box component="img" src="/team/2.png" sx={{ mb: '25px', width: '100%', height: 'auto', maxWidth: '364px' }}></Box>
                    <Typography variant="h3" sx={{ mb: '5px' }}>
                        Margareth Carter
                    </Typography>
                    <Typography variant="p1" sx={{ color: '#AFADB5' }}>
                        COO
                    </Typography>
                </Box>
                <Box>
                    <Box component="img" src="/team/3.png" sx={{ mb: '25px', width: '100%', height: 'auto', maxWidth: '364px' }}></Box>
                    <Typography variant="h3" sx={{ mb: '5px' }}>
                        Andrew Taggart
                    </Typography>
                    <Typography variant="p1" sx={{ color: '#AFADB5' }}>
                        Developer
                    </Typography>
                </Box>
                <Box>
                    <Box component="img" src="/team/4.png" sx={{ mb: '25px', width: '100%', height: 'auto', maxWidth: '364px' }}></Box>
                    <Typography variant="h3" sx={{ mb: '5px' }}>
                        Grace Marie
                    </Typography>
                    <Typography variant="p1" sx={{ color: '#AFADB5' }}>
                        Manager
                    </Typography>
                </Box>
                <Box>
                    <Box component="img" src="/team/5.png" sx={{ mb: '25px', width: '100%', height: 'auto', maxWidth: '364px' }}></Box>
                    <Typography variant="h3" sx={{ mb: '5px' }}>
                        Conter Spell
                    </Typography>
                    <Typography variant="p1" sx={{ color: '#AFADB5' }}>
                        Senior Designer
                    </Typography>
                </Box>
                <Box>
                    <Box component="img" src="/team/6.png" sx={{ mb: '25px', width: '100%', height: 'auto', maxWidth: '364px' }}></Box>
                    <Typography variant="h3" sx={{ mb: '5px' }}>
                        Messi Muerto
                    </Typography>
                    <Typography variant="p1" sx={{ color: '#AFADB5' }}>
                        Marketer
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', gap: '20px', flexWrap: 'wrap', mb: '100px' }}>
                <Box>
                    <Box component="img" src="/team/1.png" sx={{ mb: '15px', width: '100%', height: 'auto', maxWidth: '364px' }}></Box>
                    <Typography variant="h6" sx={{ mb: '5px' }}>
                        Jesse Depp
                    </Typography>
                    <Typography variant="p4" sx={{ color: '#AFADB5' }}>
                        Founder & CEO
                    </Typography>
                </Box>
                <Box>
                    <Box component="img" src="/team/2.png" sx={{ mb: '15px', width: '100%', height: 'auto', maxWidth: '364px' }}></Box>
                    <Typography variant="h6" sx={{ mb: '5px' }}>
                        Margareth Carter
                    </Typography>
                    <Typography variant="p4" sx={{ color: '#AFADB5' }}>
                        COO
                    </Typography>
                </Box>
                <Box>
                    <Box component="img" src="/team/3.png" sx={{ mb: '15px', width: '100%', height: 'auto', maxWidth: '364px' }}></Box>
                    <Typography variant="h6" sx={{ mb: '5px' }}>
                        Andrew Taggart
                    </Typography>
                    <Typography variant="p4" sx={{ color: '#AFADB5' }}>
                        Developer
                    </Typography>
                </Box>
                <Box>
                    <Box component="img" src="/team/4.png" sx={{ mb: '15px', width: '100%', height: 'auto', maxWidth: '364px' }}></Box>
                    <Typography variant="h6" sx={{ mb: '5px' }}>
                        Grace Marie
                    </Typography>
                    <Typography variant="p4" sx={{ color: '#AFADB5' }}>
                        Manager
                    </Typography>
                </Box>
                <Box>
                    <Box component="img" src="/team/5.png" sx={{ mb: '15px', width: '100%', height: 'auto', maxWidth: '364px' }}></Box>
                    <Typography variant="h6" sx={{ mb: '5px' }}>
                        Conter Spell
                    </Typography>
                    <Typography variant="p4" sx={{ color: '#AFADB5' }}>
                        Senior Designer
                    </Typography>
                </Box>
                <Box>
                    <Box component="img" src="/team/6.png" sx={{ mb: '15px', width: '100%', height: 'auto', maxWidth: '364px' }}></Box>
                    <Typography variant="h6" sx={{ mb: '5px' }}>
                        Messi Muerto
                    </Typography>
                    <Typography variant="p4" sx={{ color: '#AFADB5' }}>
                        Marketer
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default OurTeam;
