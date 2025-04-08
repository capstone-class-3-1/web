import '../styles/Main.css';

import MainHeader from "../components/main/MainHeader";
import MainSidePage from '../components/main/MainSidePage';
import MainUserRank from '../components/main/MainUserRank';
import { useState } from 'react';
import RankingHead from '../components/main/RankingHead';

const Main = () => {
    const [isCommit, setIsCommit] = useState(true);
    const changeCategory = () => {
        setIsCommit(!isCommit);
    }

    return(
        <div className="Main">
            <MainHeader isCommunity={false}/>
            <div className="main_container">
                <MainSidePage />
                <div className="ranking">
                    <RankingHead handleToggle={changeCategory} isCommit={isCommit}/>
                    <MainUserRank isCommit={isCommit}/>
                </div>
            </div>
        </div>
    )
}

export default Main;