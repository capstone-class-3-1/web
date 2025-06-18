import '../../styles/components/mypage/BadgeItem.css'
import colorCode from '../../utils/color';

const BadgeItem = ({name, level, imageUrl}) => {
    return(
        <div className="BadgeItem">
            <div className="badge_icon"><img src={imageUrl} alt="칭호이미지" /></div>
            <p className="badge_name">{name}</p>
            <p className="badge_level" style={{color:colorCode.pointBlue}}>Lv.{level}</p>
        </div>
    )
}

export default BadgeItem;