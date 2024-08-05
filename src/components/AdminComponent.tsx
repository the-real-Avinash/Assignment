// src/AdminDashboard.tsx
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import "../styles/admindashboard.css";
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../store';
import { useDispatch } from 'react-redux';
import { updateUserRole } from '../reducers/userSlice';

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

const AdminComponent: React.FC = () => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();

    const handleBackClick = () => {
        dispatch(updateUserRole('user'));
        navigate('/user'); 
    };

    return (
        <div className="admin-dashboard">
            <button className="back-button" onClick={handleBackClick}>
                Back to User Role
            </button>
            <h1 className="dashboard-header">Admin Dashboard</h1>
            <div className="dashboard-cards">
                <div className="card product-sales">
                    <h2 className="card-title">Product Sales</h2>
                    <div className="chart-container">
                        <Bar data={productData} options={{ maintainAspectRatio: false }} />
                    </div>
                </div>
                <div className="card sales-report">
                    <h2 className="card-title">Sales Report</h2>
                    <div className="chart-container">
                        <Bar data={salesData} options={{ maintainAspectRatio: false }} />
                    </div>
                </div>
                <div className="card user-management">
                    <h2 className="card-title">User Management</h2>
                    <div className="chart-container">
                        <Pie data={userManagementData} options={{ maintainAspectRatio: false }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminComponent;
