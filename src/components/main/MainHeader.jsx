import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

const MainHeader = ({isCommunity}) => {
    return(
        <div className="MainHeader">
            <HeaderLogo isCommunity={isCommunity}/>
            <HeaderNav isCommunity={isCommunity} />
        </div>
    )
}

export default MainHeader;