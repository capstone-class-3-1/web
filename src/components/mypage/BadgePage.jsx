import { useNavigate } from "react-router-dom";
import backButton from '../../assets/Arrow back ios new.png'

const BadgePage = () => {
    const navigate = useNavigate();
    return(
        <div className="BadgePage">
            <button 
                style={{backgroundColor:'white', display:'flex' ,justifyContent:'left', marginBottom: '10px', width:'fit-width',marginLeft:0, border:'none'}} 
                onClick={()=>{navigate('/community/team/page/1')}}>
                <img src={backButton} alt="뒤로가기" width={25} />
            </button>
            아니러아ㅣㅈ딜
        </div>
    )
}

export default BadgePage;