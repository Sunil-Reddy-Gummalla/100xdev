import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { lazy, startTransition } from 'react';

const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));

function App() {
  return (
    <BrowserRouter>
      <div>
        <AppBar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function AppBar() {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    startTransition(() => {
      navigate(path);
    });
  };

  return (
    <div>
      <button onClick={() => handleNavigation('/')}>Landing Page</button>
      <button onClick={() => handleNavigation('/dashboard')}>Dashboard Page</button>
    </div>
  );
}

export default App;
