import '../../styles/LoginHeader.css';
import colorCode from '../../utils/color';

const LoginHeader = () => {
    return(
        <div className="LoginHeader" style={{backgroundColor:colorCode.backgroundBlack}}>
            <div className="logo"><img src="gitmago_logo.png" alt="깃마고 로고" width={250} /></div>
        </div>
    )
}

export default LoginHeader;