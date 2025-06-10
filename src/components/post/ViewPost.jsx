import '../../styles/components/team/ViewTeam.css'
import '../../styles/components/post/ViewPost.css'
import colorCode from '../../utils/color';
import Button from '../Button'
import RecruitStatus from '../team/RecruitStatus';
import backButton from '../../assets/Arrow back ios new.png'
import { useNavigate, Link } from 'react-router-dom';
import { GoThumbsup } from "react-icons/go";
import { GoThumbsdown } from "react-icons/go";
import ReviewItem from './ReviewItem';
import WriteReview from './WriteReview';

const desc = '저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.저와 함께 모임 결성할 사람을 모집합니다.';

const ViewPost = () => {
    const navigate = useNavigate();

    return(
        <div className="ViewBox">
            <div className="ViewTeam">
                <button 
                    style={{backgroundColor:'white', display:'flex' ,justifyContent:'left', marginBottom: '10px', width:'fit-width',marginLeft:0, border:'none'}} 
                    onClick={()=>{navigate('/community/team')}}>
                    <img src={backButton} alt="뒤로가기" width={25} />
                </button>
                <div className="team_title">안녕하세요 깃마고 모임 제목입니다.</div>
                <div className="team_info border">
                    <div className="team_status">
                        <RecruitStatus status='언급' />
                    </div>
                    <div className="owner_name">
                        <span>jinhyeon-dev</span><div className="owner_profile"></div>
                    </div>
                </div>
                <div className="team_info">
                    <div className="team_name">
                        깃허브 링크 | <Link to={"https://github.com/asddf"}>https://github.com/asddf</Link>
                    </div>
                    <div className='post_reaction' style={{display:'flex'}}>
                        <div className="thumb">
                            <button className='none_style_button'><GoThumbsup size={20}/></button>
                            <span>12</span>
                        </div>
                        <div className="thumb">
                            <button className='none_style_button'><GoThumbsdown size={20}/></button>
                            <span>12</span>
                        </div>
                    </div>
                </div>
                <div className="view_desc view">
                    <textarea  cols="112" rows="18" value={desc} />
                </div>
                <div className="border" style={{marginTop: '30px'}}></div>
                <div className='team_title' style={{color: colorCode.grey}}>리뷰</div>
                <WriteReview />
                <ReviewItem />
                <ReviewItem />
            </div>
        </div>
    )
}

export default ViewPost;