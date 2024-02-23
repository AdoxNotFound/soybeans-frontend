import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';
import AdminHomePage from '../../pages/AdminHomePage';
import IndustryFormPage from '../../pages/IndustryFormPage';
import PrivateRoute from './PrivateRoute';
import IndustryRoute from './IndustryRoute';
import HomePage from '../../pages/HomePage';

const AppRoutes = () => {
    return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={ <LoginPage /> } />
        <Route path='/home' element={
            <PrivateRoute>
                <HomePage />
            </PrivateRoute> } />
        <Route path='/admin' element={
            <PrivateRoute>
                <AdminHomePage />
            </PrivateRoute> } />
        <Route path='/industry' element={
            <IndustryRoute>
                <IndustryFormPage />
            </IndustryRoute> } />
        <Route path='/*' element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
  );
};

export default AppRoutes;