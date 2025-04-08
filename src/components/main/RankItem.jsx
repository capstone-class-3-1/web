import '../../styles/components/main/RankItem.css'

const RankItem = ({rank, name, value, isCommit}) => {
    return (
        <div className="RankItem">
            <p className='rank_order item'>{rank}</p>
            <div className="rank_name item">
                <div className="rank_profile"></div><span>{name}</span>
            </div>
            <p className='rank_element item'>{isCommit ? 'commit  |' : 'issues  |'}<span>{value}</span></p>
        </div>
    )
}

export default RankItem;