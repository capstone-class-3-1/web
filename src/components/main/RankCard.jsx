import '../../styles/components/main/RankCard.css'

const RankCard = ({rank, name, value, isCommit}) => {
    console.log(isCommit);
    const rankText = [
        {order:'st', color:'#C2BF00'},
        {order:'nd', color:'#B8B8B8'},
        {order:'rd', color:'#BC5800'}
    ]
    return(
        <div className={`RankCard`} style={{border: `1px solid ${rankText[rank-1].color}`}}>
            <p className='rank_order'>{rank}{rankText[rank-1].order}</p>
            <div className="rank_name card">
                <div className="rank_profile"></div><span>{name}</span>
            </div>
            <p className='rank_element'>{isCommit ? 'commit  |' : 'issues  |'}<span>{value}</span></p>
        </div>
    )
}

export default RankCard;