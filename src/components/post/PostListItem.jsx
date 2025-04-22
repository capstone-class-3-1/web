import { useNavigate } from 'react-router-dom';
import '../../styles/components/post/PostListItem.css'
import colorCode from '../../utils/color';
import { GoThumbsup } from "react-icons/go";
import { GoThumbsdown } from "react-icons/go";
import RecruitStatus from "../team/RecruitStatus";

const PostListItem = ({ ismention, title, desc, people, owner}) => {
    const navigate = useNavigate();
    const id = 1; //예시

    return(
        <div className="TeamListItem" onClick={()=>{navigate(`view/${id}`)}}>
            <div className="right_item">
                <div className="top">
                    <h4>{title}</h4>
                    { ismention && <RecruitStatus status={ismention ? '언급' : null} />}
                </div>
                <p className='desc desc_post'>{desc}</p>
                <div className="bottom bottom_post">
                    <div  style={{display:'flex'}}>
                        <div className="thumb">
                            <GoThumbsup size={17}/>
                            <span>12</span>
                        </div>
                        <div className="thumb">
                            <GoThumbsdown size={17}/>
                            <span>12</span>
                        </div>
                    </div>
                    <p className='people'>작성자 | {owner}</p>  
                </div>

            </div>
        </div>
    )
}

export default PostListItem;