import { Outlet } from 'react-router-dom';
import MainHeader from '../components/main/MainHeader';
import MyPageSide from '../components/mypage/MyPageSide';
import '../styles/MyPage.css';

const MyPage = () => {
    return(
        <div className="Mypage">
            <MainHeader />
            <div className="contents">
                <MyPageSide />
                <Outlet />
            </div>
        </div>
    )
}


export default MyPage;