import '../../styles/components/mypage/GithubPage.css'
import GitHubCalendar from 'react-github-calendar'

const GithubPage = () => {
    return(
        <div className="GithubPage">
            <p>내 칭호</p>
            <GitHubCalendar username='lioba00700'/>
        </div>
    )
}

export default GithubPage;