import colorCode from "../utils/color";
import '../styles/Splash.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/login')
        },3000)
    },[]);

    return(
        <div className="Splash" style={{backgroundColor: colorCode.backgroundBlack}}>
            <div className="logo"><img src="/gitmago_logo.png" alt="깃마고 로고" width={450} /></div>
            <p>경북소프트웨어마이스터고등학교</p>
        </div>
    )
}

export default Splash;