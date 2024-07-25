import React from 'react';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
    const { login } = useAuth();

    const handleLogin = () => {
        login();
    };

    return (
        <div className="page login">
            <h2>Login</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
