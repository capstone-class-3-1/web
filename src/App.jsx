import './App.css';
import './fonts/font.css';

import Login from './pages/Login';
import Splash from './pages/Splash';
import Signup from './pages/Signup';

import Main from './pages/Main';

import Community from './pages/Community';
import EntryList from './components/team/EntryList';
import TeamPage from './components/team/TeamPage';
import CreateTeam from './components/team/CreateTeam';
import TeamApplication from './components/team/TeamApplication';
import ViewTeam from './components/team/ViewTeam';

import MyPage from './pages/MyPage';

import { Route, Routes } from 'react-router-dom';
import GithubPage from './components/mypage/GithubPage';
import BadgePage from './components/mypage/BadgePage';
import CreatePost from './components/post/CreatePost';
import ViewPost from './components/post/ViewPost';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash/>}/>
      <Route path='login' element={<Login/>} />
      <Route path='signup' element={<Signup/>} />

      <Route path='main' element={<Main/>}/>

      <Route path='community' element={<Community/>}>
        <Route path='post' element={<EntryList />}/>{/*게시글*/}
          <Route path='post/create' element={<CreatePost />} />
          <Route path='post/view/:id' element={<ViewPost />}/>

        <Route path='team' element={<EntryList />}/>{/*모임*/}
          <Route path='team/create' element={<CreateTeam />}/>
          <Route path='team/application/:teamCode' element={<TeamApplication />}/>
          <Route path='team/view/:id' element={<ViewTeam />}/>
          <Route path='team/page/:teamCode' element={<TeamPage />}/>

      </Route>
      <Route path='mypage' element={<MyPage/>} >
        <Route index element={<GithubPage />} />
        <Route path='badge' element={<BadgePage />} />
      </Route>
    </Routes>
  );
}

export default App;
