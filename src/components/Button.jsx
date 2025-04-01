import '../styles/components/Button.css'
import colorCode from "../utils/color";

const Button = ({value, onclick}) => {
    return(
        <>
            <button
                style={{backgroundColor:colorCode.pointBlue}}
                onClick={onclick}>{value}</button>
        </>
    )
}

export default Button;