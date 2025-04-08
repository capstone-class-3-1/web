import '../../styles/components/main/MainUserRank.css'
import SearchBox from '../SearchBox';
import RankCard from './RankCard';
import RankItem from './RankItem';

import { useState } from 'react';

const rankDto = [
    {
        id:0,
        name: 'asdf',
        commit: 1234,
        issues:423
    },
    {
        id:1,
        name: 'asdf',
        commit: 321,
        issues:23
    },
    {
        id:2,
        name: 'asdf',
        commit: 654,
        issues:134
    },
    {
        id:3,
        name: 'asdf',
        commit: 864,
        issues:12
    },
    {
        id:4,
        name: 'asdf',
        commit: 1234,
        issues:423
    },
    {
        id:5,
        name: 'asdf',
        commit: 1234,
        issues:423
    },
    {
        id:6,
        name: 'asdf',
        commit: 1234,
        issues:423
    }
]

const MainUserRank = ({isCommit}) => {
    const [RankSearch, setRankSearch] = useState('');
    const handleRankSearch = (search) => {
        setRankSearch(search);
    }

    const rankSort = rankDto.sort((a,b)=>{
        if(isCommit){
            return b.commit - a.commit
        }
        else return b.issues - a.issues
    });
    return(
        <div className="MainUserRank">
            <div className="top3">
                <RankCard rank={1} name={'asdf'} value={423} isCommit={isCommit}/>
                <RankCard rank={2} name={'박민서'} value={23} isCommit={isCommit}/>
                <RankCard rank={3} name={'하이'} value={124} isCommit={isCommit}/>
            </div>
            <div className="rank_filter">
                <SearchBox type={'team'} placeholder={'이름 검색'} onClick={handleRankSearch}/>
            </div>
            <div className="rank_container">
                {
                    rankSort
                    .filter((item)=>item.name.includes(RankSearch))
                    .map((item, index)=>(
                        <RankItem key={item.id} rank={index+1} name={item.name} value={isCommit ? item.commit : item.issues} isCommit={isCommit}/>
                    ))
                }
            </div>
        </div>
    )
}

export default MainUserRank;