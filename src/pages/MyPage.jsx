import { Outlet } from 'react-router-dom';
import MainHeader from '../components/main/MainHeader';
import MyPageSide from '../components/mypage/MyPageSide';
import '../styles/MyPage.css';
import { useEffect, useState } from 'react';
import PrivateServer from '../utils/PrivateAPI';

const MyPage = () => {
    const [data, setData] = useState();
    const [userPr, setUserPr] = useState('');
    const [useIssue, setUserIssue] = useState('');
    
    useEffect(()=>{
        const getProfile = () => {
            PrivateServer.get('/api/profile')
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
        }
        getProfile();
    },[])

    useEffect(()=>{
        if(!data || !data.githubUsername) return;
        const getUserAct = () => {
            PrivateServer.get(`/api/github/pullrequests/${data.githubUsername}`)
            .then((res)=>{
                setUserPr(res.data);
                console.log(res.data);
            })
            .catch((error)=> {
                console.log(error);
            })

            PrivateServer.get(`/api/github/issues/${data.githubUsername}`)
            .then((res) => {
                setUserIssue(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
        }
        getUserAct();
    }, [data])

    return(
        <div className="Mypage">
            <MainHeader />
            <div className="contents">
                <MyPageSide data={data} pullRequest={userPr} issue={useIssue} />
                <Outlet />
            </div>
        </div>
    )
}


export default MyPage;