import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import NewPostPage from './pages/NewPostPage';
import NotFoundPage from './pages/NotFoundPage';
import PostDetailPage from './pages/PostDetailPage';
import { useTheme } from './context/ThemeContext';

const App = () => {
    const { theme } = useTheme();

    return (
        <Router>
            <div className={`app ${theme}`}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/new-post" element={<NewPostPage />} />
                    <Route path="/post/:id" element={<PostDetailPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
