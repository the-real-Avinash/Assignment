import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../reducers/userSlice';
import { useNavigate } from 'react-router-dom';
import "../styles/loginpage.css"
import { RootState } from '../store';

const Login: React.FC = () => {
    const [role, setRole] = useState('user');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { username } = useSelector((state: RootState) => state.user);

    const handleLogin = () => {
        dispatch(setUser({username,role}));
        if (role === 'admin') {
            navigate('/admin');
        } else {
            navigate('/user');
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-header">Login</h1>
            <div className="login-form">
                <label className="form-label">Role</label>
                <select
                    className="form-select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <button className="login-button" onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
