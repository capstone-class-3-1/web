import '../../styles/components/main/HeaderLogo.css';

import logo_title from '../../assets/gitmago_logo_title.png';
import colorCode from "../../utils/color";
import searchIcon from '../../assets/search.png'

const HeaderLogo = ({isCommunity}) => {
    return (
        <div className="HeaderLogo" style={{backgroundColor: colorCode.backgroundBlack}}>
            <div className="logo" style={{alignSelf:'center'}}><img src={logo_title} alt="깃마고로고" width={185} /></div>
            {isCommunity && (
                <div className="searchBox">
                    <input type="text" placeholder='개발 실력을 업그레이드 (예, #Flutter)'/>
                    <button><img src={searchIcon} alt="돋보기" width={14}/></button>
                </div>
            )}
        </div>
    )
}

export default HeaderLogo;