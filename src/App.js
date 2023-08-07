import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import ProductById from './pages/ProductById';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Article from './pages/Article';
import PostById from './pages/PostById';
import { useGetPostsQuery, useGetProductsQuery } from './store/features/databaseApi';
import ScrollToTop from './utils/ScrollToTop';
import Cart from './pages/Cart';
import Loader from './components/Loader';

function App() {
    const { data: products = [], isLoading: isProductLoading } = useGetProductsQuery();
    const { data: posts = [], isLoading: isPostLoading } = useGetPostsQuery();

    if (isProductLoading || isPostLoading) {
        return <Loader />;
    }

    return (
        <div className="app">
            <ThemeProvider theme={theme}>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home products={products} posts={posts} />} />
                    <Route path="/products" element={<Products products={products} />} />
                    <Route path="/products/:id" element={<ProductById products={products} />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/article" element={<Article posts={posts} />} />
                    <Route path="/posts/:id" element={<PostById posts={posts} />} />
                    <Route path="/about" element={<AboutUs />} />
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
