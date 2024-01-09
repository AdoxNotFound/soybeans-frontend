import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*import SignInSide from './components/SignInSide';*/
import Dashboard from './pages/Dashboard';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      {/* <SignInSide/> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/Dashboard' element={<Dashboard/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App
