import { useState } from "react";
import TeamListItem from "./TeamListItem";
import '../../styles/components/team/TeamList.css';
import Button from "../Button";
import { useLocation, useNavigate } from "react-router-dom";
import PostListItem from "../post/PostListItem";

const TeamDto = [
    {
        status: '모집 중',
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
        status: '모집 완료',
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
]

const PostDto = [
    {
        ismention: false,
        title: '제 코드 좀 봐주세요 ㅠㅠ' ,
        desc: '저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.',
        people: 13,
        owner: 'jinhyeon-dev'
    },
    {
        ismention: false,
        title: '제 코드 좀 봐주세요 ㅠㅠ' ,
        desc: '저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.',
        people: 13,
        owner: 'jinhyeon-dev'
    },
    {
        ismention: true,
        title: '제 코드 좀 봐주세요 ㅠㅠ' ,
        desc: '저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.',
        people: 13,
        owner: 'jinhyeon-dev'
    },
    {
        ismention: true,
        title: '제 코드 좀 봐주세요 ㅠㅠ' ,
        desc: '저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.',
        people: 13,
        owner: 'jinhyeon-dev'
    },
    {
        ismention: false,
        title: '제 코드 좀 봐주세요 ㅠㅠ' ,
        desc: '저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.',
        people: 13,
        owner: 'jinhyeon-dev'
    },
    {
        ismention: false,
        title: '제 코드 좀 봐주세요 ㅠㅠ' ,
        desc: '저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.',
        people: 13,
        owner: 'jinhyeon-dev'
    },
    {
        ismention: false,
        title: '제 코드 좀 봐주세요 ㅠㅠ' ,
        desc: '저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.',
        people: 13,
        owner: 'jinhyeon-dev'
    },
]


const EntryList = () => {
    const location = useLocation();
    const isPost = location.pathname.includes('post');

    const navigate = useNavigate();
    const [view,setView] = useState(false);
    return(
            <div className="TeamList">
                <div className="view_only_ing">
                    <input type="checkbox" onChange={()=>setView(!view)} /><span>{isPost ? '내가 언급된 글만 보기' : '모집 중인 모임만 보기'}</span>
                </div>
                <div className="team_list">
                    {
                        isPost ? (
                            PostDto
                            .filter((item)=>(view ? item.ismention===true: item))
                            .map((item)=>(
                                <div className="team_item">
                                    <PostListItem ismention={item.ismention} title={item.title} desc={item.desc} people={item.people} owner={item.owner} />
                                </div>
                            ))
                        ) : (
                            TeamDto
                            .filter((item)=>(view ? item.status==='모집 중': item))
                            .map((item)=>(
                                <div className="team_item">
                                    <TeamListItem status={item.status} title={item.title} desc={item.desc} people={item.people} owner={item.owner} />
                                </div>
                            ))
                        )
                    }
                </div>
                <div className="button_container">
                    <Button value={'글쓰기'} onclick={()=>{navigate('create')}}/>
                </div>
            </div>
    )
}

export default EntryList;