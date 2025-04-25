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
    'confirmPassword': '',
    'school': '',
    'email':''
}

const signReducer = (state,action) => {
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

const Signup = () => {
    const [form, dispath] = useReducer(signReducer, userform);

    const handleForm = (name, value) => {
        dispath({type:signup.CHANGE, name, value});
    }

    const sendData = async () => {
        Server.post('/auth/register',{
            'username': form.username,
            'password': form.password,
            'confirmPassword': form.confirmPassword,
            "school": form.school,
            'email': form.email
        },{
            headers:{
                "Content-Type": 'application/json'
            }
        })
        .then((res)=>{
            console.log(res);
            console.log('회원가입 성공');
            dispath({type:signup.RESET})
        })
        .catch((error)=>{
            console.log(error);
            alert(error.response.data);
            console.log('회원가입 실패');
        })
    }

    const onClickButton = () => {
        if(form.username=='' || form.password==''){
            alert('이름과 비밀번호를 모두 입력해주세요.');
            return;
        }
        if(form.password!==form.confirmPassword){
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
                    <AuthInput placeholder={"이름"} type={"text"} name={'username'} data={form.username} handle={handleForm}/>
                    <AuthInput placeholder={"비밀번호"} type={"password"} name={'password'} data={form.password} handle={handleForm} />
                    <AuthInput placeholder={"비밀번호 확인"} type={"password"} name={'confirmPassword'} data={form.confirmPassword} handle={handleForm} />
                    <AuthInput placeholder={"학교"} type={"text"} name={'school'} data={form.school} handle={handleForm}/>
                    <AuthInput placeholder={"이메일"} type={"email"} name={'email'} data={form.email} handle={handleForm}/>
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