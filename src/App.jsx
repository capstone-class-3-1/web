import './App.css';
import './fonts/font.css';

import Login from './pages/Login';
import Splash from './pages/Splash';
import Signup from './pages/Signup';

import Main from './pages/Main';
import Community from './pages/Community';
import MyPage from './pages/MyPage';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash/>}/>
      <Route path='login' element={<Login/>} />
      <Route path='signup' element={<Signup/>} />
      <Route path='main' element={<Main/>} />
      <Route path='community' element={<Community/>} />
      <Route path='mypage' element={<MyPage/>} />
    </Routes>
  );
}

export default App;
