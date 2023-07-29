import { useMemo } from 'react';

export const useSortedProduct = (products, sort) => {
    const sortedProducts = useMemo(() => {
        if (sort) {
            return [...products].sort((a, b) => a[sort]?.localeCompare(b[sort]));
        }
        return products;
    }, [sort, products]);
    return sortedProducts;
};

export const useProducts = (products, sort, query) => {
    const sortedProducts = useSortedProduct(products, sort);
    const sortedAndSearchedProducts = useMemo(() => {
        return sortedProducts.filter(product => product.title.toLowerCase().includes(query));
    }, [query, sortedProducts]);
    return sortedAndSearchedProducts;
};
