import '../styles/Signup.css'
import LoginHeader from "../components/auth/LoginHeader";
import AuthInput from '../components/auth/AuthInput';
import AuthButton from '../components/auth/AuthButton';
import { useReducer, useState } from 'react';
import Server from '../utils/API';
import { Link } from 'react-router-dom';
import { signup } from '../utils/actionType';
import SelectSchool from '../components/auth/SelectSchool';

const userform = {
    'username': '',
    'password': '',
    'confirmPassword': '',
    'school': '경북소프트웨어마이스터고등학교',
    'email':'',
    'verifiCode': ''
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
    const [verifiCode , setVerifiCode] = useState(false);

    console.log(form)

    const handleForm = (name, value) => {
        dispath({type:signup.CHANGE, name, value});
    }

    const sendEmail = async () => {
        if(form.email == ''){
            alert('이메일을 입력해주세요');
            return;
        }

        console.log(form.email)

        Server.post('/mail/send', {
            'email': form.email
        },{
            headers:{
                "Content-Type": 'application/json'
            }
        })
        .then((res) => {
            alert(res.data.message);
            console.log('인증 코드 전송');
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
            console.log('인증 코드 전송 실패')
        })
    }

    const sendCode =  async () => {
        Server.post('/mail/verify', {
            'email': form.email,
            'code': form.verifiCode
        }, {
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then((res) => {
            setVerifiCode(true);
            console.log(res)
            alert('인증되었습니다.');
        })
        .catch((error) => {
            console.log(error);
            setVerifiCode(false)
            alert('인증이 실패했습니다.')
        })
    }

    const sendData = async () => {
        Server.post('/api/auth/register',{
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
        <div className="Signup">
            <LoginHeader />
            <div className="signup_container">
            <div className="form">
                    <AuthInput placeholder={"이름"} type={"text"} name={'username'} data={form.username} handle={handleForm}/>
                    <AuthInput placeholder={"이메일"} type={"email"} name={'email'} data={form.email} handle={handleForm} onClick={sendEmail} disabled={verifiCode}/>
                    <AuthInput placeholder={"인증번호"} type={"text"} name={'verifiCode'} data={form.verifiCode} handle={handleForm} onClick={sendCode}  disabled={verifiCode}/>
                    <AuthInput placeholder={"비밀번호"} type={"password"} name={'password'} data={form.password} handle={handleForm} />
                    <AuthInput placeholder={"비밀번호 확인"} type={"password"} name={'confirmPassword'} data={form.confirmPassword} handle={handleForm} />
                    <SelectSchool data={form.school} handle={handleForm}/>
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