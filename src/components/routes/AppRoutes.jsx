import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../../pages/LoginPage';
import AdminHomePage from '../../pages/AdminHomePage';
import IndustryFormPage from '../../pages/IndustryFormPage';
import PrivateRoute from './PrivateRoute';
import IndustryRoute from './IndustryRoute';
import DrawerBar from '../common/Appbar';
import IndustryDashboard from '../../pages/IndustryDashboard';

const AppRoutes = () => {
    return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={ <LoginPage /> } />
        <Route path='/admin' element={
            <PrivateRoute>
                <DrawerBar 
                SelectedPage={<AdminHomePage />}>
               </DrawerBar>
            </PrivateRoute> } />
        <Route path='/industry' element={
            <IndustryRoute>
                <DrawerBar 
                SelectedPage={<IndustryDashboard />}>
                </DrawerBar>
            </IndustryRoute> } />
            <Route path='/industry/new-form' element={
            <IndustryRoute>
                <DrawerBar 
                SelectedPage={<IndustryFormPage />}>
                </DrawerBar>
            </IndustryRoute> } />
        <Route path='/*' element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
  );
};

export default AppRoutes;