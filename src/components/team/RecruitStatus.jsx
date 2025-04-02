import '../../styles/components/team/RecruitStatus.css'
import colorCode from "../../utils/color";

const RecruitStatus = ({status}) => {
    return(
        <div className="RecruitStatus" style={{backgroundColor: status==='모집 중' ? colorCode.pointBlue : '#D0D0D0'}}>
            {status}
        </div>
    )
}

export default RecruitStatus;