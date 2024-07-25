import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext'; // Ensure both providers are included
import './styles/darkTheme.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </AuthProvider>
);
