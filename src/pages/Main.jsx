import '../styles/Main.css';

import MainHeader from "../components/main/MainHeader";
import MainSidePage from '../components/main/MainSidePage';
import MainUserRank from '../components/main/MainUserRank';

const Main = () => {
    return(
        <div className="Main">
            <MainHeader isCommunity={false}/>
            <div className="MainContainer">
                <MainSidePage />
                <div className="Ranking">

                </div>
            </div>
        </div>
    )
}

export default Main;