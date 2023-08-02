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

function App() {
    return (
        <div className="app">
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductById />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/article" element={<Article />} />
                    <Route path="/posts/:id" element={<PostById />} />
                    <Route path="/about" element={<AboutUs />} />
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
