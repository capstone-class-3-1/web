import '../../styles/components/mypage/BadgePage.css'
import { useNavigate } from "react-router-dom";
import backButton from '../../assets/Arrow back ios new.png'
import BadgeItem from './BadgeItem';
import { useEffect, useState } from 'react';
import PrivateServer from '../../utils/PrivateAPI';

const BadgePage = () => {
    const navigate = useNavigate();

    const [badgeList, setBadgeList] = useState([]);

    useEffect(()=>{
        const viewBadge = () => {
            PrivateServer.get('/api/title/my')
            .then((res) => {
                setBadgeList(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
        }
        viewBadge();
    },[]);

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
                                {
                                    badgeList.map((item)=>(
                                        <BadgeItem key={item.name} name={item.name} imageUrl={item.imageUrl} level={item.level}/>
                                    ))
                                }
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BadgePage;