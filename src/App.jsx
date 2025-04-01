import './App.css';
import './fonts/font.css';

import Login from './pages/Login';
import Splash from './pages/Splash';
import Signup from './pages/Signup';

import Main from './pages/Main';

import Community from './pages/Community';
import TeamList from './components/team/TeamList';
import TeamPage from './components/team/TeamPage';
import CreateTeam from './components/team/CreateTeam';
import TeamApplication from './components/team/TeamApplication';
import ViewTeam from './components/team/ViewTeam';

import MyPage from './pages/MyPage';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash/>}/>
      <Route path='login' element={<Login/>} />
      <Route path='signup' element={<Signup/>} />

      <Route path='main' element={<Main/>} />

      <Route path='community' element={<Community/>}>
        <Route path='post'/>
        <Route path='team' element={<TeamList />}/>
          <Route path='team/create' element={<CreateTeam />}/>
          <Route path='team/application/:id' element={<TeamApplication />}/>
          <Route path='team/view/:id' element={<ViewTeam />}/>
          <Route path='team/page/:id' element={<TeamPage />}/>
        <Route path='event'/>
      </Route>
      <Route path='mypage' element={<MyPage/>} />
    </Routes>
  );
}

export default App;
