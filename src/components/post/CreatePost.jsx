import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import '../../styles/components/team/CreateTeam.css';
import '../../styles/components/post/CreatePost.css';
import Button from '../Button';
import colorCode from '../../utils/color';
import plusPeople from '../../assets/plus_member.png'

const CreatePost = () => {
    const navigate = useNavigate();

    const [writeMention, setWriteMention] = useState('');
    const [mentions, setMentions] = useState(['parkms', 'asdf']);

    const onChangeMention = (e) => {
        setWriteMention(e.target.value);
    }

    const addMention = (e) => {
        if(mentions.includes(e.target.value))return;

        setMentions((prev)=>[...prev, writeMention]);
        setWriteMention('');
    }

    const deleteMention = ({item}) => {

    }

    const onCompleteKeyDown = (e) => {
        if(e.key == 'Enter' || e.key === ' '){
            addMention(e);
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
                    <div className="team_period">
                        언급 |  <div className='post_mention'>
                                    {
                                        mentions.map((item) => (
                                            <div key={item} 
                                                className='mention_item'                                                    
                                            >@{item}</div>
                                        ))
                                    }
                                    <input type="text" value={writeMention} onChange={onChangeMention} onKeyDown={onCompleteKeyDown} /><button className='mention_button'><img src={plusPeople} alt="언급추가" width={18} /></button>
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