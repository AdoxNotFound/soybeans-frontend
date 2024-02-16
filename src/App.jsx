import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApiProvider } from './components/context/ApiContext';
import HomePage from './pages/HomePage';
import AutoLogout from './components/AutoLogout';
import LoginPage from './pages/LoginPage';
import AdminHomePage from './pages/AdminHomePage';
import IndustryHomePage from './pages/IndustryHomePage';

function App() {

  const logoutTime = 2 * 60 * 1000;

  return (
    <ApiProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage/>} />
            <Route path='/admin' element={<AdminHomePage/>} />
            <Route path='/industry' element={<IndustryHomePage/>} />
            <Route path='/*' element={<LoginPage/>} />
          </Routes>
        </BrowserRouter>
        <AutoLogout logoutTime={logoutTime}/>
    </ApiProvider>
  );
};

export default App
