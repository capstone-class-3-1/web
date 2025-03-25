import '../../styles/components/main/HeaderLogo.css';

import colorCode from "../../utils/color";
import searchIcon from '../../assets/search.png'

const HeaderLogo = ({isCommunity}) => {
    return (
        <div className="HeaderLogo" style={{backgroundColor: colorCode.backgroundBlack}}>
            <div className="logo"><img src="gitmago_logo_title.png" alt="깃마고로고" width={180} /></div>
            {isCommunity && (
                <div className="searchBox">
                    <input type="text" placeholder='개발 실력을 업그레이드 (예, #Flutter)'/>
                    <button><img src={searchIcon} alt="돋보기" /></button>
                </div>
            )}
        </div>
    )
}

export default HeaderLogo;