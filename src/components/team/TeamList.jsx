import { useState } from "react";
import TeamListItem from "./TeamListItem";
import '../../styles/components/team/TeamList.css';

const TeamDto = [
    {
        status: '모집 중',
        title: '안녕하세요 깃마고 모임 제목입니다.' ,
        desc: '저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.',
        people: 13,
        owner: 'jinhyeon-dev'
    },
    {
        status: '모집 완료',
        title: '안녕하세요 깃마고 모임 제목입니다.' ,
        desc: '저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.',
        people: 13,
        owner: 'jinhyeon-dev'
    },
    {
        status: '모집 전',
        title: '안녕하세요 깃마고 모임 제목입니다.' ,
        desc: '저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.',
        people: 13,
        owner: 'jinhyeon-dev'
    },
    {
        status: '모집 중',
        title: '안녕하세요 깃마고 모임 제목입니다.' ,
        desc: '저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.',
        people: 13,
        owner: 'jinhyeon-dev'
    },
    {
        status: '모집 중',
        title: '안녕하세요 깃마고 모임 제목입니다.' ,
        desc: '저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.',
        people: 13,
        owner: 'jinhyeon-dev'
    },
    {
        status: '모집 중',
        title: '안녕하세요 깃마고 모임 제목입니다.' ,
        desc: '저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.',
        people: 13,
        owner: 'jinhyeon-dev'
    },
    {
        status: '모집 중',
        title: '안녕하세요 깃마고 모임 제목입니다.' ,
        desc: '저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.',
        people: 13,
        owner: 'jinhyeon-dev'
    },
]

const TeamList = () => {
    const [view,setView] = useState(false);
    return(
        <div className="ViewBox">
            <div className="TeamList">
                <div className="view_only_ing">
                    <input type="checkbox" onChange={()=>setView(!view)} /><span>모집 중인 모임만 보기</span>
                </div>
                <div className="team_list">
                    {
                        TeamDto
                        .filter((item)=>(view ? item.status==='모집 중': item))
                        .map((item)=>(
                            <div className="team_item">
                                <TeamListItem status={item.status} title={item.title} desc={item.desc} people={item.people} owner={item.owner} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TeamList;