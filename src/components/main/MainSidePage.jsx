import '../../styles/components/main/MainSidePage.css'
import colorCode from '../../utils/color';

import MyTeamList from "./MyTeamList";

const MainSidePage = () => {
    return(
        <div className="MainSidePage">
            <div className="user_name" style={{color:colorCode.pointBlue}}>
                <div className="user_profile"></div><span>jinhyeon-dev</span>
            </div>
            <MyTeamList />
        </div>
    )
}

export default MainSidePage;