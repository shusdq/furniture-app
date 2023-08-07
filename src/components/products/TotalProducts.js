import { Box, Container, Pagination } from '@mui/material';
import React, { useState } from 'react';
import ProductsFilter from './ProductsFilter';
import { useProducts } from '../../hooks/useProducts';
import ProductsList from './ProductsList';

function TotalProducts({ products }) {
    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const [filter, setFilter] = useState({ sort: '', query: '' });

    const sortedAndSearchedProducts = useProducts(products, filter.sort, filter.query);

    const totalPages = Math.ceil(sortedAndSearchedProducts.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedAndSearchedProducts.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <Container>
            <Box>
                <ProductsFilter products={products} filter={filter} setFilter={setFilter} />
                <ProductsList products={currentItems} />
                <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} color="primary" sx={{ display: 'flex', justifyContent: 'center', m: '40px 0 50px' }} />
            </Box>
        </Container>
    );
}

export default TotalProducts;
