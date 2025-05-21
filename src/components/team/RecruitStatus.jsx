import '../../styles/components/team/RecruitStatus.css'
import colorCode from "../../utils/color";

const RecruitStatus = ({status}) => {
    return(
        <div className="RecruitStatus" style={{backgroundColor: status==='모집 중' || status==='언급' ? colorCode.pointBlue : colorCode.grey}}>
            {status}
        </div>
    )
}

export default RecruitStatus;