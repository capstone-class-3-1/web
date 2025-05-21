import '../../styles/components/mypage/BadgePage.css'
import { useNavigate } from "react-router-dom";
import backButton from '../../assets/Arrow back ios new.png'
import BadgeItem from './BadgeItem';

const BadgePage = () => {
    const navigate = useNavigate();
    return(
        <div className="BadgePage">
            <button 
                style={{backgroundColor:'white', display:'flex' ,justifyContent:'left', marginBottom: '10px', width:'fit-width',marginLeft:0, border:'none'}} 
                onClick={()=>{navigate('/mypage')}}>
                <img src={backButton} alt="뒤로가기" width={25} />
            </button>
            <p>내 칭호</p>
            <table className='badge_table'>
                <tbody>
                    <tr>
                        <td>
                            획득한 칭호 
                        </td>
                    </tr>
                    <tr>
                        <td className='badge_wrapper'>
                            <div className='badge_container'>
                                <BadgeItem />
                                <BadgeItem />
                                <BadgeItem />
                                <BadgeItem />
                                <BadgeItem />
                                <BadgeItem />
                                <BadgeItem />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BadgePage;