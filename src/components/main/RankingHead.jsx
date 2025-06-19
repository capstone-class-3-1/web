import '../../styles/components/main/RankingHead.css'

const RankingHead = ({handleToggle, isCommit}) => {
    return(
        <div className="RankingHead">
            <h2 style={{margin:0}}>월간 랭킹</h2>
            <div className="rank_toggle">
                <button className={isCommit && `focus`} onClick={()=>handleToggle()}>commit</button>
                <button className={isCommit || `focus`} onClick={()=>handleToggle()}>issues</button>
            </div>
        </div>
    )
}

export default RankingHead