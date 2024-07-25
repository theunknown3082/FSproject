import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="header-content">
                <h1>My Blog</h1>
                <div className="header-controls">
                    <button className="theme-toggle" onClick={toggleTheme}>
                        {theme === 'dark' ? '🌞' : '🌜'}
                    </button>
                    <button className="menu-toggle" onClick={handleMenuToggle}>
                        ☰
                    </button>
                </div>
            </div>
            <nav className={`menu ${menuOpen ? 'active' : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/new-post">New Post</Link>
            </nav>
        </header>
    );
};

export default Header;
