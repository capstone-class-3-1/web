import '../../styles/components/main/MyTeamList.css'

import MyTeamItem from "./MyTeamItem";
import SearchBox from "../SearchBox";
import { useState } from 'react';

const myTeamDto = [{id:0, name:'깃마고팀'},{id:1, name:'깃마고팀2'},{id:2, name:'깃깃마고팀팀'},{id:3, name:'깃깃마고팀팀'},{id:4, name:'깃깃마고팀팀'},{id:5, name:'깃깃마고팀팀'},{id:6, name:'깃깃마고팀팀'},{id:7, name:'깃깃마고팀팀'}]

const MyTeamList = () => {
    const [teamSearch, setTeamSearch] = useState('');
    const handleTeamSearch = (search) => {
        setTeamSearch(search);
        console.log(teamSearch);
    }
    return(
        <div className="MyTeamList">
            <SearchBox type={'team'} placeholder={'팀 페이지 검색'} onClick={handleTeamSearch}/>
            <div className="my_team_list_container">
                {
                    myTeamDto
                    .filter((item)=>item.name.includes(teamSearch))
                    .map((item)=>(
                        <MyTeamItem key={item.id} name={item.name}/>
                    ))
                }
            </div>
            
        </div>
    )
}

export default MyTeamList;