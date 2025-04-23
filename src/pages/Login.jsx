import '../styles/Login.css'
import LoginHeader from "../components/auth/LoginHeader";
import AuthInput from '../components/auth/AuthInput';
import AuthButton from '../components/auth/AuthButton';
import { useReducer, useState } from 'react';
import Server from '../utils/API';
import { Link } from 'react-router-dom';
import { signup } from '../utils/actionType';

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
    const [form, dispath] = useReducer(loginReducer, userform);

    const handleForm = (name, value) => {
        dispath({type:signup.CHANGE, name, value});
    }

    const sendData = async () => {
        Server.post('/auth/login',form,{
            headers:{
                "Content-Type": 'application/json'
            }
        })
        .then((res)=>{
            console.log(res.data);
            console.log('로그인 성공');
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
                <AuthButton value={"깃허브로 바로 로그인"} type={"git"} onclick={()=>console.log("안녕")}/>
                <div className="found signup">
                    <span className='found_item'>회원이 아니신가요?</span> <Link className='found_item' to={'/signup'}>회원가입하러가기</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Login;