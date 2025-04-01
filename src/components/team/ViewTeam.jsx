import '../../styles/components/team/ViewTeam.css'
import colorCode from '../../utils/color';
import Button from '../Button'
import RecruitStatus from './RecruitStatus'

const desc = '저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.';

const ViewTeam = () => {
    return(
        <div className="ViewBox">
            <div className="ViewTeam">
                <div className="team_title">안녕하세요 깃마고 모임 제목입니다.</div>
                <div className="team_info border">
                    <div className="team_status">
                        <RecruitStatus status='모집 중' /> <span>D-13</span>
                    </div>
                    <div className="owner_name">
                        <span>jinhyeon-dev</span><div className="owner_profile"></div>
                    </div>
                </div>
                <div className="team_info">
                    <div className="team_period">
                        모집일 | 2025-03-31 ~ 2025-03-31
                    </div>
                    <div className="team_name">
                        팀명 | 깃마고팀
                    </div>
                    <div className="team_people" style={{color:colorCode.pointBlue}}>
                        13명의 사람들이 함께 하는 중
                    </div>
                </div>
                <div className="craete_desc view">
                    <textarea  cols="112" rows="18" value={desc} />
                </div>
                <div className="button_container">
                    <Button value={'모임 참여신청하기'} onclick={()=>{alert('참여신청이 완료되었습니다.')}}/>
                </div>
            </div>
        </div>
    )
}

export default ViewTeam;