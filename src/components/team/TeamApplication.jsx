import '../../styles/components/team/TeamApplication.css'
import ApplicationItem from './ApplicationItem';
import backButton from '../../assets/Arrow back ios new.png'
import { useNavigate } from 'react-router-dom';

const ItemDto = [
    {
        id:0
    },
    {
        id:1
    },
    {
        id:2
    },
    {
        id:3
    },
    {
        id:4
    },
    {
        id:5
    },
];

const TeamApplication = () => {
    const navigate = useNavigate();
    return(
        <div className="ViewBox">
            <div className="TeamApplication">
                <div className="border">
                    <button 
                        style={{backgroundColor:'white', display:'flex' ,justifyContent:'left', marginBottom: '10px', width:'fit-width',marginLeft:0}} 
                        onClick={()=>{navigate('/community/team')}}>
                        <img src={backButton} alt="뒤로가기" width={25} />
                    </button>
                </div>
                <div className="application_list">
                    {
                        ItemDto.map((item)=>(
                            <ApplicationItem key={item.id}/>
                        ))
                    }
                </div>
                
            </div>
        </div>
    )
}

export default TeamApplication;