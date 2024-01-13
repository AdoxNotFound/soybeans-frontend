import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AutoLogout from './components/AutoLogout';

function App() {

  const logoutTime = 2 * 60 * 1000;

  return (
    <div>
      {/* <SignInSide/> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>} />
          </Routes>
        </BrowserRouter>
        <AutoLogout logoutTime={logoutTime}/>
    </div>
  );
};

export default App
