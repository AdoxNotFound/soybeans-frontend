import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ApiProvider } from './components/context/ApiContext';
import HomePage from './pages/HomePage';
import AutoLogout from './components/AutoLogout';

function App() {

  const logoutTime = 2 * 60 * 1000;

  return (
    <ApiProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>} />
          </Routes>
        </BrowserRouter>
        <AutoLogout logoutTime={logoutTime}/>
    </ApiProvider>
  );
};

export default App
