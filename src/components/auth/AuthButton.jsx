import '../../styles/components/auth/AuthButton.css';
import colorCode from '../../utils/color';
import github from '../../assets/github.png';

const AuthButton = ({value, onclick, type}) => {
    return(
        <div className="AuthButton">
            <button style={{backgroundColor:colorCode.backgroundBlack}} onClick={onclick}>{type && <img className="github" src={github} alt="깃허브" width={30}/>}{value}</button>
        </div>
    )
}

export default AuthButton;