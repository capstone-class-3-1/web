import '../styles/Login.css'
import LoginHeader from "../components/auth/LoginHeader";
import AuthInput from '../components/auth/AuthInput';
import AuthButton from '../components/auth/AuthButton';
import { useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import Server from '../utils/PublicAPI';
import { Link, href, useNavigate } from 'react-router-dom';
import { signup } from '../utils/actionType';
import { login } from '../store/reducers/authSlice';

const userform = {
    'username': '',
    'password': '',
}

const loginReducer = (state,action) => {
    switch(action.type){
        case signup.CHANGE:
            console.log(state);
            return {
                ...state,
                [action.name]:action.value
            };
        case signup.RESET:
            return userform;

    }
}

const Login = () => {
    const navigate = useNavigate();

    const [form, formDispatch] = useReducer(loginReducer, userform);
    const dispatch = useDispatch();

    const handleForm = (name, value) => {
        formDispatch({type:signup.CHANGE, name, value});
    }

    const sendData = async () => {
        Server.post('/api/login',form,{
            headers:{
                "Content-Type": 'application/json'
            }
        })
        .then((res)=>{
            console.log(res);
            console.log('로그인 성공');
            dispatch(login({email:form.email, token: res.data.token}));
            formDispatch({type:signup.RESET}); 
            navigate('/main')

        })
        .catch((error)=>{
            console.log(error);
            console.log('로그인 실패');
        })
    }

    const onClickButton = () => {
        if(form.username=='' || form.password==''){
            alert('이름과 비밀번호를 모두 입력해주세요.');
            return;
        }
        sendData();
    }

    const loginGithub = () => {
        window.open('https://github.com/login/oauth/authorize?client_id=Ov23liG2nzd77CtuJ9cZ&redirect_uri=https://www.gitmago.com/auth/github/callback&scope=read:user')
    }

    return(
        <div className="Login">
            <LoginHeader />
            <div className="login_container">
            <div className="form">
                <AuthInput placeholder={"이름"} type={"text"} name={'username'} data={form.username} handle={handleForm}/>
                <AuthInput placeholder={"비밀번호"} type={"password"} name={'password'} data={form.password} handle={handleForm} />
                <AuthButton value={"로그인"} onclick={onClickButton}/>
                <div className="found">
                    <Link className='found_item'>아이디 찾기</Link> | <Link className='found_item'>비밀번호 찾기</Link>
                </div>
                <AuthButton value={"깃허브로 바로 로그인"} type={"git"} onclick={loginGithub}/>
                <div className="found signup">
                    <span className='found_item'>회원이 아니신가요?</span> <Link className='found_item' to={'/signup'}>회원가입하러가기</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login;