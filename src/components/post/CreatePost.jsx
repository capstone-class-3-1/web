import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import '../../styles/components/team/CreateTeam.css';
import '../../styles/components/post/CreatePost.css';
import Button from '../Button';
import plusPeople from '../../assets/plus_member.png'

const CreatePost = () => {
    const navigate = useNavigate();

    const [writeMention, setWriteMention] = useState('');
    const [mentions, setMentions] = useState(['parkms', 'asdf']);

    const onChangeMention = (e) => {
        setWriteMention(e.target.value);
        //공백 제거
        setWriteMention((prev) => prev.replace(" ", ""));
    }

    const addMention = () => {
        //입력이 없을 경우
        if(writeMention == "")return;

        if(mentions.includes(writeMention))return;
        if(mentions.length === 5){
            //추후 커스텀 모달로 알림창 구현
            alert('언급은 최대 5명까지 가능합니다.')
            //입력값 초기화
            setWriteMention('');
            return
        }

        setMentions((prev)=>[...prev, writeMention]);
        setWriteMention('');
    }

    const deleteMention = (deleteItem) => {
        setMentions((prev) => (prev.filter((item) => item !== deleteItem)))
    }

    const onCompleteKeyDown = (e) => {
        if(e.key == 'Enter' || e.key === ' '){
            addMention();
        }
    }

    return(
        <div className="ViewBox">
            <div className="CreateTeam">
                <div className="title">
                    <input type="text" placeholder="제목을 입력해주세요." />
                </div>
                <div className="team_info">
                    <div className="team_name">
                        깃허브 주소 |  <input type="url" placeholder='https://'/>
                    </div>
                    <div className="post_period">
                        <div className='post_write_mention'>
                            <span>언급 |</span> 
                            <input type="text" value={writeMention} onChange={onChangeMention} onKeyDown={onCompleteKeyDown} />
                            <button className='mention_button' onClick={addMention}><img src={plusPeople} alt="언급추가" width={18} /></button>
                        </div>
                        <div className='post_mention'>
                            {
                                mentions.map((item) => (
                                    <div key={item} 
                                        className='mention_item'
                                        onClick={() => deleteMention(item)}                                              
                                    >@{item}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="create_desc">
                    <textarea  cols="112" rows="18" placeholder="내용을 작성해주세요." />
                </div>
                <div className="button_container">
                    <Button value={'취소하기'} onclick={()=>{navigate('/community/post')}}/>
                    <Button value={'글쓰기'} onclick={()=>{navigate('/community/post')}}/>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;