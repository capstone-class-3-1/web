import '../../styles/components/mypage/BadgeItem.css'
import colorCode from '../../utils/color';

const BadgeItem = () => {
    return(
        <div className="BadgeItem">
            <div className="badge_icon"></div>
            <p className="badge_name">이슈해결왕</p>
            <p className="badge_level" style={{color:colorCode.pointBlue}}>Lv.5</p>
        </div>
    )
}

export default BadgeItem;