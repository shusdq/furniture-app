import { Box, MenuItem, Select, SvgIcon, TextField, Typography } from '@mui/material';
import React from 'react';

function ProductsFilter({ products, filter, setFilter }) {
    const handleSortChange = event => {
        const selectedSort = event.target.value;
        if (['', 'title', 'description'].includes(selectedSort)) {
            setFilter({ ...filter, sort: selectedSort });
        }
    };
    return (
        <Box>
            <TextField
                label="Search property"
                id="outlined-start-adornment"
                fullWidth
                variant="filled"
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                sx={{ m: 1, background: '#FFFFFF', border: 'none', mb: '50px' }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '50px' }}>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '26px' }}>
                    <Typography variant="h2">Total Product</Typography>
                    <Typography variant="h6" sx={{ color: '#518581' }}>
                        {products.length}
                    </Typography>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: '16px' }}>
                    <Typography variant="h5">Total Product</Typography>
                    <Typography variant="l4" sx={{ color: '#518581' }}>
                        {products.length}
                    </Typography>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '12px' }}>
                    <SvgIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3 7H21" stroke="#151411" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M6 12H18" stroke="#151411" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M10 17H14" stroke="#151411" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </SvgIcon>
                    <Select value={filter.sort} onChange={handleSortChange} displayEmpty>
                        <MenuItem value="">
                            <em>Sort By</em>
                        </MenuItem>
                        <MenuItem value="title">By name</MenuItem>
                        <MenuItem value="description">By description</MenuItem>
                    </Select>
                </Box>
            </Box>
        </Box>
    );
}

export default ProductsFilter;
