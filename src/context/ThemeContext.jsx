import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a Context for the theme
const ThemeContext = createContext();

// Provider component
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light-mode'); // Default theme

    // Function to toggle the theme
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light-mode' ? 'dark-mode' : 'light-mode'));
    };

    // Apply the theme to the body element
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the ThemeContext
const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export { ThemeProvider, useTheme };
