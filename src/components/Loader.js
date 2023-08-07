import { Box, CircularProgress } from '@mui/material';
import React from 'react';

function Loader() {
    return (
        <Box sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CircularProgress />
        </Box>
    );
}

export default Loader;
