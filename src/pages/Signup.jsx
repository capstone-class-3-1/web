import '../styles/Login.css'
import LoginHeader from "../components/auth/LoginHeader";
import AuthInput from '../components/auth/AuthInput';
import AuthButton from '../components/auth/AuthButton';
import { useState } from 'react';
import Server from '../utils/API';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [user, setUser] = useState({
        'username': '',
        'password': '',
        'confirmPassword': '' 
    })

    const handleName = (e) => {
        setUser({
            ...user,
            'username': e.target.value
        })
    };
    const handlePwd = (e) => {
        setUser({
            ...user,
            'password': e.target.value
        })
    };
    const handleRePwd = (e) => {
        setUser({
            ...user,
            'confirmPassword': e.target.value
        })
    }

    const sendData = async () => {
        Server.post('/auth/register',{
            'username': user.username,
            'password': user.password,
            'confirmPassword': user.confirmPassword 
        },{
            headers:{
                "Content-Type": 'application/json'
            }
        })
        .then((res)=>{
            console.log(res.data);
            console.log('회원가입 성공');
        })
        .catch((error)=>{
            console.log(error);
            console.log('회원가입 실패');
        })
    }

    const onClickButton = () => {
        if(user.username=='' || user.password==''){
            alert('아이디와 비밀번호를 모두 입력해주세요.');
            return;
        }
        if(user.password!==user.confirmPassword){
            alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
            return;
        }
        sendData();
    }

    return(
        <div className="Login">
            <LoginHeader />
            <div className="login_container">
            <div className="form">
                <AuthInput placeholder={"이름"} type={"text"} data={user.username} handle={handleName}/>
                <AuthInput placeholder={"비밀번호"} type={"password"} data={user.password} handle={handlePwd} />
                <AuthInput placeholder={"비밀번호 확인"} type={"password"} data={user.confirmPassword} handle={handleRePwd} />
                <div style={{marginBottom: '50px'}}/>
                <AuthButton value={"회원가입 하기"} onclick={onClickButton}/>
                <div className="found signup">
                    <span className='found_item'>이미 회원이신가요</span> <Link className='found_item' to={'/login'}>로그인하러가기</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Signup;