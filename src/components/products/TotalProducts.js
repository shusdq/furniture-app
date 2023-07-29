import { Box, Container, Pagination, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductsFilter from './ProductsFilter';
import { useProducts } from '../../hooks/useProducts';
import ProductsList from './ProductsList';
import PostService from '../../API/PostService';
import { getPageCount } from '../../utils/pages';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../store/features/dataSlice';

function TotalProducts() {
    const dispatch = useDispatch();
    const [slicedProducts, setSlicedProducts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [isProductsLoading, setIsProductsLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(9);
    const [page, setPage] = useState(1);

    const sortedAndSearchedProducts = useProducts(slicedProducts, filter.sort, filter.query);

    async function fetchProducts() {
        setIsProductsLoading(true);
        const response = await PostService.getAll(limit, page);
        dispatch(setProducts(response.data));
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const sliced = response.data.slice(startIndex, endIndex);
        const totalCount = response.data.length;
        setSlicedProducts(sliced);
        setTotalPages(getPageCount(totalCount, limit));
        setIsProductsLoading(false);
    }

    useEffect(() => {
        setIsProductsLoading(true);
        fetchProducts(limit, page);
    }, [limit, page]);

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <Container>
            <Box>
                <ProductsFilter filter={filter} setFilter={setFilter} />
                {isProductsLoading ? <Typography>LOADING...</Typography> : <ProductsList products={sortedAndSearchedProducts} />}
                <Pagination count={totalPages} page={page} onChange={handlePageChange} color="primary" sx={{ display: 'flex', justifyContent: 'center', m: '40px 0 50px' }} />
            </Box>
        </Container>
    );
}

export default TotalProducts;
