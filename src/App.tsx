import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AdminDashboard from './AdminDashboard';
// import UserComponent from './UserComponent';
// import LoginPage from './LoginPage';
import AdminComponent from './components/AdminComponent';
import UserComponent from './components/UserComponent';
import Login from './components/Login';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/admin" element={<AdminComponent />} />
                <Route path="/user" element={<UserComponent />} />
            </Routes>
        </Router>
    );
};

export default App;
