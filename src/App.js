import { ThemeProvider } from '@emotion/react';
import { theme } from './theme';
import Home from './pages/Home';

function App() {
    return (
        <div className="app">
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider>
        </div>
    );
}

export default App;
