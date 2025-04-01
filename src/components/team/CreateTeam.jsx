import { useNavigate } from 'react-router-dom';
import '../../styles/components/team/CreateTeam.css';
import Button from '../Button';

const CreateTeam = () => {
    const navigate = useNavigate();

    return(
        <div className="ViewBox">
            <div className="CreateTeam">
                <div className="title">
                    <input type="text" placeholder="모임 제목을 입력해주세요." />
                </div>
                <div className="team_info">
                    <div className="team_name">
                        팀명 |  <input type="text" />
                    </div>
                    <div className="team_period">
                        모집일 | <input type="date" /> ~ <input type="date" />
                    </div>
                </div>
                <div className="create_desc">
                    <textarea  cols="112" rows="18" placeholder="모임에 대한 설명을 작성해주세요." />
                </div>
                <div className="button_container">
                    <Button value={'취소하기'} onclick={()=>{navigate('/community/team')}}/>
                    <Button value={'글쓰기'} onclick={()=>{navigate('/community/team')}}/>
                </div>
            </div>
        </div>
    )
}

export default CreateTeam;