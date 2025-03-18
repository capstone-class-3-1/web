import './App.css';
import Login from './pages/Login';
import Splash from './pages/Splash';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash/>}/>
      <Route path='login' element={<Login/>} />
    </Routes>
  );
}

export default App;
