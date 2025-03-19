import './App.css';
import Login from './pages/Login';
import Splash from './pages/Splash';
import Signup from './pages/Signup';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash/>}/>
      <Route path='login' element={<Login/>} />
      <Route path='signup' element={<Signup/>} />
    </Routes>
  );
}

export default App;
