import '../../styles/components/team/ApplicationItem.css'

import colorCode from "../../utils/color";
import Button from '../Button';
import RecruitStatus from './RecruitStatus';


const ApplicationItem = () => {
    return (
        <div className="ApplicationItem">
            <div className="profile_img"></div>
            <div className="application_detail">
                <div className="application_detail_top">
                    <p style={{color:colorCode.pointBlue}}>jinhyeon-dev</p>
                    <p>님의 모임 참여요청</p>
                </div>
                <div className="application_detail_bottom">
                    <div style={{display:'flex', alignItems:'center'}}>
                        <div><RecruitStatus status={'모집 중'} /></div>
                        <span style={{marginLeft:'6px', fontWeight:600, fontSize:'13px'}}>D-19</span>
                        <span style={{marginLeft:'10px', fontSize:'15px'}}>깃마고팀</span>
                    </div>

                    <div>
                        <Button value={'거절'} onclick={()=>{console.log('요청 거절')}}/>
                        <Button value={'확인'} onclick={()=>{console.log('요청 확인')}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationItem;