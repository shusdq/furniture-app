import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import ThreeSquare from '../../svg/3square.svg';
import CalendarTick from '../../svg/calendar-tick.svg';
import MoneyTick from '../../svg/money-tick.svg';

const smallSvg = {
    width: '25px',
    height: '25px',
};

const largeSvg = {
    width: '35px',
    height: '35px',
};

function Benefits() {
    return (
        <Container>
            <Typography variant="h5" sx={{ display: { xs: 'none', md: 'flex' }, color: 'secondary.dark', mb: '10px' }}>
                Benefits
            </Typography>
            <Typography variant="h6Plus" sx={{ display: { xs: 'flex', md: 'none' }, color: 'secondary.dark', mb: '10px' }}>
                Benefits
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, flex: '1', mb: '70px', justifyContent: 'space-between' }}>
                <Typography variant="h2" sx={{ flex: '0.4' }}>
                    Benefits when using our services
                </Typography>
                <Typography variant="p1" sx={{ flex: '0.44', color: '#AFADB5' }}>
                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
                </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '33px', mb: '180px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <img src={ThreeSquare} alt="Three Square" style={largeSvg} />
                    <Typography variant="h3">Many Choices</Typography>
                    <Typography variant="p1" sx={{ color: '#AFADB5' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <img src={CalendarTick} alt="Calendar Tick" style={largeSvg} />
                    <Typography variant="h3">Fast and On Time</Typography>
                    <Typography variant="p1" sx={{ color: '#AFADB5' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <img src={MoneyTick} alt="Money Tick" style={largeSvg} />
                    <Typography variant="h3">Affordable Price</Typography>
                    <Typography variant="p1" sx={{ color: '#AFADB5' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexWrap: 'wrap', gap: '20px', mb: '50px', justifyContent: 'space-between' }}>
                <Typography variant="h3">Benefits when using our services</Typography>
                <Typography variant="p3" sx={{ color: '#AFADB5' }}>
                    Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient.
                </Typography>
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexWrap: 'wrap', gap: '20px', mb: '100px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <img src={ThreeSquare} alt="Three Square" style={smallSvg} />
                    <Typography variant="h6">Many Choices</Typography>
                    <Typography variant="p3" sx={{ color: '#AFADB5' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <img src={CalendarTick} alt="Calendar Tick" style={smallSvg} />
                    <Typography variant="h6">Fast and On Time</Typography>
                    <Typography variant="p3" sx={{ color: '#AFADB5' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <img src={MoneyTick} alt="Money Tick" style={smallSvg} />
                    <Typography variant="h6">Affordable Price</Typography>
                    <Typography variant="p3" sx={{ color: '#AFADB5' }}>
                        Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}

export default Benefits;
