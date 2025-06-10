import '../../styles/components/main/MyTeamItem.css'
import { useNavigate } from 'react-router-dom'

const MyTeamItem = ({name}) => {
    const navigate = useNavigate()

    return(
        <div className="MyTeamItem" onClick={()=>navigate('/community/team/page/1')}>
            <div className="team_profile"></div><span>{name}</span>
        </div>
    )
}

export default MyTeamItem;