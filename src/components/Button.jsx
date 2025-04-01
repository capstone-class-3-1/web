import '../styles/components/Button.css'
import colorCode from "../utils/color";

const Button = ({value, onclick}) => {
    return(
        <>
            <button
                style={{backgroundColor: value==="취소하기" ? '#D0D0D0': colorCode.pointBlue}}
                onClick={onclick}>{value}</button>
        </>
    )
}

export default Button;