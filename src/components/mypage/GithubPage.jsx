import React, { useEffect, useState } from 'react'
import '../../styles/components/mypage/GithubPage.css'
import GitHubCalendar from 'react-github-calendar'
import { Tooltip } from 'react-tooltip'

const GithubPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    return(
        <div className="GithubPage">
            <p>내 칭호</p>
            <GitHubCalendar 
                username='lioba00700'
                fontSize={12}
                colorScheme='light'
                renderBlock={(block, activity) => React.cloneElement(block, {
                    "data-tooltip-id":"tooltip",
                    "data-tooltip-html": `${activity.date}<br />${activity.count} commits`,
                    "data-tooltip-variant": "dark",
                })}
            />
            <Tooltip id="tooltip" className='github_tooltip'/>
        </div>
    )
}

export default GithubPage;