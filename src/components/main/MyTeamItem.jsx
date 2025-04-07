import '../../styles/components/main/MyTeamItem.css'

const MyTeamItem = ({name}) => {
    return(
        <div className="MyTeamItem">
            <div className="team_profile"></div><span>{name}</span>
        </div>
    )
}

export default MyTeamItem;