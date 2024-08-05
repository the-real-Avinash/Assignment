// src/UserComponent.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../api';
import { setUser, updateUserRole } from '../reducers/userSlice';
import { RootState, AppDispatch } from '../store';
import { useNavigate } from 'react-router-dom';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import "../styles/usercomponent.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const productData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
        {
            label: 'Products Sold',
            data: [12, 19, 3, 5],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
    ],
};

const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'Sales',
            data: [1500, 2000, 1800, 2200, 2500],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
        },
    ],
};

const userManagementData = {
    labels: ['Active', 'Inactive'],
    datasets: [
        {
            label: 'Users',
            data: [75, 25],
            backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1,
        },
    ],
};

const UserComponent: React.FC = () => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const { username, role } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        const fetchAndSetUser = async () => {
            try {
                const userData = await fetchUserData();
                dispatch(setUser(userData));
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchAndSetUser();
    }, [dispatch]);

    const handleRoleToggle = () => {
        if (role === 'user') {
            dispatch(updateUserRole('admin'));
            navigate("/admin");
        } else if (role === 'admin') {
            dispatch(updateUserRole('user'));
            navigate("/user");
        }
    };

    return (
        <div className="container">
            <div className="navbar">
                <div className="navbar-title">User Dashboard</div>
                <button className="navbar-button" onClick={handleRoleToggle}>
                    {role === 'user' ? 'Switch to Admin Role' : 'Switch to User Role'}
                </button>
            </div>
            <div className="card">
                <h1 className="title">Welcome, {username}</h1>
                <div className="chart-container">
                    <h2>Product Sales</h2>
                    <Bar data={productData} options={{ maintainAspectRatio: false }} />
                </div>
                <div className="chart-container">
                    <h2>Sales Report</h2>
                    <Bar data={salesData} options={{ maintainAspectRatio: false }} />
                </div>
                <div className="chart-container">
                    <h2>User Management</h2>
                    <Pie data={userManagementData} options={{ maintainAspectRatio: false }} />
                </div>
            </div>
        </div>
    );
};

export default UserComponent;
