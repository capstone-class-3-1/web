import '../../styles/components/main/HeaderLogo.css';

import logo_title from '../../assets/gitmago_logo_title.png';
import colorCode from "../../utils/color";
import SearchBox from '../SearchBox';

const HeaderLogo = ({isCommunity}) => {
    return (
        <div className="HeaderLogo" style={{backgroundColor: colorCode.backgroundBlack}}>
            <div className="logo" style={{alignSelf:'center'}}><img src={logo_title} alt="깃마고로고" width={185} /></div>
            {isCommunity && (
                <SearchBox placeholder={'개발 실력을 업그레이드 (예, #Flutter)'} />
            )}
        </div>
    )
}

export default HeaderLogo;