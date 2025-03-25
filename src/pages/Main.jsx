import '../styles/Main.css';

import MainHeader from "../components/main/MainHeader";

const Main = () => {
    return(
        <div className="Main">
            <MainHeader isCommunity={false}/>
        </div>
    )
}

export default Main;