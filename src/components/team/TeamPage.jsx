import { useNavigate } from 'react-router-dom'
import backButton from '../../assets/Arrow back ios new.png'
import plusMember from '../../assets/plus_member.png'
import edit from '../../assets/edit_pen.png'

import colorCode from '../../utils/color'

import '../../styles/components/team/TeamPage.css'
import { useState } from 'react'

const memberDto = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11}]

const TeamPage = () => {
    const navigate = useNavigate();
    const admin = true;

    const [editLink, setEditLink] = useState(true);
    const [editNotice, setEditNotice] = useState(true);

    const [link, setLink] = useState('https://discode.asdfasd');
    const [notice, setNotice] = useState('asdfasdfasdfasdf');

    return(
        <div className="ViewBox">
            <div className="TeamPage">
                <div className="border">
                    <button 
                        style={{backgroundColor:'white', display:'flex' ,justifyContent:'left', marginBottom: '10px', width:'fit-width',marginLeft:0}} 
                        onClick={()=>{navigate('/community/team')}}>
                        <img src={backButton} alt="뒤로가기" width={25} />
                    </button>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:'30px'}}>
                        <div className="team_title" style={{margin:0}}>깃마고팀 팀페이지</div>
                        {
                            admin && (
                                <div onClick={()=>{navigate('/community/team/application/1')}}><img src={plusMember} alt="멤버추가" /></div>
                            )
                        }
                        
                    </div>
                </div>
                <div className="team_page_detail">
                    <div className="team_page_left">
                        <div className="team_chat">
                            <input type="text" value={link} onChange={(e)=>setLink(e.target.value)} readOnly={editLink ? true : false}/>
                            {
                                admin && (
                                    <div onClick={()=>setEditLink(!editLink)} style={{cursor:'pointer'}}><img src={edit} alt="수정"/></div>
                                )
                            }
                        </div>
                        <div className="team_notice">
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <span style={{color:colorCode.pointBlue, fontWeight:600, fontSize:'18px'}}>공지사항</span>
                                {
                                    admin && (
                                        <div onClick={()=>setEditNotice(!editNotice)} style={{cursor:'pointer'}}><img src={edit} alt="수정"/></div>
                                    )
                                }
                            </div>
                            <textarea value={notice} onChange={(e)=>setNotice(e.target.value)} readOnly={editNotice ? true : false}/>
                            
                        </div>
                    </div>
                    <div className="team_page_right">
                        <div className="team_people" style={{color:colorCode.pointBlue}}>
                            13명의 사람들이 함께 하는 중
                            <div className="team_people_list">
                                {
                                    memberDto.map((item)=>(
                                        <div className="member_name" key={item.id}>
                                            <div className="member_profile"></div><span>jinhyeon-dev</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamPage;