import '../../styles/components/auth/AuthInput.css'
import { useState } from "react";
import eyes from '../../assets/eye-close-solid.png';

const AuthInput = ({placeholder, type, handle, data}) => {
    const [showpw, setShowpw] = useState(false);

    return(
        <div className="AuthInput">
            <input type={type==='password' ? showpw ? 'text' : 'password' : type} placeholder={placeholder} value={data} onChange={handle}/>
            {
                type=="password" && <button onClick={()=>setShowpw(!showpw)} style={{display:'flex', justifyContent:'right'}} ><img src={eyes} alt="숨기기" width={22}/></button>
            }
        </div>
    )
}

export default AuthInput;