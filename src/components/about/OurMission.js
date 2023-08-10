import { Box, Typography } from '@mui/material';
import React from 'react';
import CallReceived from '../../svg/call-received.svg';
import Messages from '../../svg/messages.svg';
import Award from '../../svg/award.svg';

const smallSvg = {
    width: '25px',
    height: '25px',
};

const largeSvg = {
    width: '35px',
    height: '35px',
};
function OurMission() {
    return (
        <Box>
            <Typography variant="h5" sx={{ display: { xs: 'none', md: 'flex' }, color: 'secondary.dark', mb: '10px' }}>
                Our mision
            </Typography>
            <Typography variant="h6Plus" sx={{ display: { xs: 'flex', md: 'none' }, color: 'secondary.dark', mb: '10px' }}>
                Our mision
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mb: '160px' }}>
                <Box sx={{ flex: '0.5' }}>
                    <Typography variant="h2" sx={{ mb: '50px' }}>
                        Our team dedicated to help find smart home product
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '50px' }}>
                        <Box>
                            <Typography variant="h2">20+</Typography>
                            <Typography variant="p1" sx={{ color: '#AFADB5' }}>
                                Years Experience
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h2">483</Typography>
                            <Typography variant="p1" sx={{ color: '#AFADB5' }}>
                                Happy Client
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h2">150+</Typography>
                            <Typography variant="p1" sx={{ color: '#AFADB5' }}>
                                Project Finished
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: '0.5', gap: '15px' }}>
                    <Box sx={{ display: 'flex', gap: '30px', justifyContent: 'flex-end' }}>
                        <img src={CallReceived} alt="Call Received" style={largeSvg} />
                        <Box>
                            <Typography variant="h3" sx={{ mb: '15px' }}>
                                24/7 Supports
                            </Typography>
                            <Typography
                                variant="p1"
                                sx={{
                                    color: '#AFADB5',
                                    maxWidth: '500px',
                                    mb: '30px',
                                }}
                            >
                                24/7 support means a support service that is provided 24 hours a day and 7 days a week.{' '}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '30px', justifyContent: 'flex-end' }}>
                        <img src={Messages} alt="Messages" style={largeSvg} />
                        <Box>
                            <Typography variant="h3" sx={{ mb: '15px' }}>
                                Free Consultation
                            </Typography>
                            <Typography
                                variant="p1"
                                sx={{
                                    color: '#AFADB5',
                                    maxWidth: '500px',
                                    mb: '30px',
                                }}
                            >
                                A free consultation is a one-on-one interaction or conversation given freely to share one's thoughts and discuss possible
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '30px', justifyContent: 'flex-end' }}>
                        <img src={Award} alt="Award" style={largeSvg} />
                        <Box>
                            <Typography variant="h3" sx={{ mb: '15px' }}>
                                Overall Guarantee
                            </Typography>
                            <Typography
                                variant="p1"
                                sx={{
                                    color: '#AFADB5',
                                    maxWidth: '500px',
                                    mb: '30px',
                                }}
                            >
                                The comprehensive guarantee is required for import, warehousing, transit, processing and specific use.{' '}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', mb: '60px' }}>
                <Box sx={{ flex: '0.5' }}>
                    <Typography variant="h3" sx={{ mb: '30px' }}>
                        Our team dedicated to help find smart home product
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '30px', mb: '20px' }}>
                        <Box>
                            <Typography variant="h3">20+</Typography>
                            <Typography variant="p3" sx={{ color: '#AFADB5' }}>
                                Years Experience
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3">483</Typography>
                            <Typography variant="p3" sx={{ color: '#AFADB5' }}>
                                Happy Client
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h3">150+</Typography>
                            <Typography variant="p3" sx={{ color: '#AFADB5' }}>
                                Project Finished
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '10px' }}>
                    <Box sx={{ display: 'flex', gap: '30px' }}>
                        <img src={CallReceived} alt="Call Received" style={smallSvg} />
                        <Box>
                            <Typography variant="h6" sx={{ mb: '15px' }}>
                                24/7 Supports
                            </Typography>
                            <Typography
                                variant="p3"
                                sx={{
                                    color: '#AFADB5',
                                    maxWidth: '500px',
                                    mb: '25px',
                                }}
                            >
                                24/7 support means a support service that is provided 24 hours a day and 7 days a week.
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '30px' }}>
                        <img src={Messages} alt="Messages" style={smallSvg} />
                        <Box>
                            <Typography variant="h6" sx={{ mb: '15px' }}>
                                Free Consultation
                            </Typography>
                            <Typography
                                variant="p3"
                                sx={{
                                    color: '#AFADB5',
                                    maxWidth: '500px',
                                    mb: '25px',
                                }}
                            >
                                A free consultation is a one-on-one interaction or conversation given freely to share one's thoughts and discuss possible
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: '30px' }}>
                        <img src={Award} alt="Award" style={smallSvg} />
                        <Box>
                            <Typography variant="h6" sx={{ mb: '15px' }}>
                                Overall Guarantee
                            </Typography>
                            <Typography
                                variant="p3"
                                sx={{
                                    color: '#AFADB5',
                                    maxWidth: '500px',
                                    mb: '25px',
                                }}
                            >
                                The comprehensive guarantee is required for import, warehousing, transit, processing and specific use.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default OurMission;
