import '../../styles/components/main/HeaderNav.css'

import { Link, NavLink } from "react-router-dom";
import comment from  '../../assets/comment-alt-solid.png';
import home from '../../assets/home-solid.png';
import person from '../../assets/person-solid.png';

const pageNavList = [
    {icon: comment, title: '커뮤니티', to: '/community'},
    {icon: home, title: '홈', to: '/main'},
    {icon: person, title: '마이', to: '/mypage'}
];

const HeaderNav = ({isCommunity}) => {
    return(
        <div className="HeaderNav">
            <div className="commuNav">
                {
                    isCommunity && (
                        <>
                        <NavLink className={({isActive}) => isActive ? 'nav-item active-nav' : 'nav-item '}>게시물</NavLink>
                        <NavLink className={({isActive}) => isActive ? 'nav-item active-nav' : 'nav-item '}>모임</NavLink>
                        <NavLink className={({isActive}) => isActive ? 'nav-item active-nav' : 'nav-item '}>행사</NavLink>
                        </>
                    )
                }
            </div>
            <div className="nav">
                {
                    pageNavList.map((item)=>(
                        <Link className="nav-item" to={item.to}><img src={item.icon} alt="icon" width={15}/>{item.title}</Link>
                    ))
                }
                
            </div>
        </div>
    )
}

export default HeaderNav;