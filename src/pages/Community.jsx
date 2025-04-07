import '../styles/Community.css';

import MainHeader from "../components/main/MainHeader";
import { Outlet } from 'react-router-dom';

const Community = () => {
    return(
        <div className="Community">
            <MainHeader isCommunity={true}/>
            <Outlet />
        </div>
    )
}

export default Community;