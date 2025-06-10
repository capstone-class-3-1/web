import '../../styles/components/auth/AuthInput.css'
import { useState } from "react";
import eyes from '../../assets/eye-close-solid.png';
import colorCode from '../../utils/color';

const AuthInput = ({placeholder, name, type, handle, data, onClick, disabled}) => {
    const [showpw, setShowpw] = useState(false);

    return(
        <div className="AuthInput">
            <input 
                type={type==='password' ? showpw ? 'text' : 'password' : type} 
                placeholder={placeholder} 
                value={data} 
                disabled={disabled}
                onChange={(e)=>handle(name, e.target.value )}/>
            {
                type=="password" && <button onClick={()=>setShowpw(!showpw)} style={{display:'flex', justifyContent:'right'}} ><img src={eyes} alt="숨기기" width={22}/></button>
            }
            {
                type=="email" && <button className='valid_btn' onClick={onClick} style={{backgroundColor: disabled ? colorCode.grey : colorCode.pointBlue}}>인증</button>
            }
            {
                name=="verifiCode" && <button className='valid_btn' onClick={onClick} style={{backgroundColor: disabled ? colorCode.grey : colorCode.pointBlue}}>확인</button>
            }
        </div>
    )
}

export default AuthInput;