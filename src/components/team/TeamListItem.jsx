import '../../styles/components/team/TeamListItem.css'
import colorCode from '../../utils/color';
import RecruitStatus from "./RecruitStatus";

const TeamListItem = ({status, title, desc, people, owner}) => {
    return(
        <div className="TeamListItem">
            <div className="left_item">
                <RecruitStatus status={status}/>
            </div>
            <div className="right_item">
                <div className="top">
                    <h4>{title}</h4>
                    <p>작성자 | {owner}</p>
                </div>
                <p className='desc'>{desc}</p>
                <p className='people' style={{color: colorCode.pointBlue}}>{people}의 사람들이 함께 하는 중</p>

            </div>
        </div>
    )
}

export default TeamListItem;