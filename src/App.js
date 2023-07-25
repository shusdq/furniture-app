import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';

function App() {
    return (
        <div className="app">
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
