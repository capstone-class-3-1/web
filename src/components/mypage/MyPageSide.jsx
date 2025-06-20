import { Link, useNavigate } from 'react-router-dom';
import '../../styles/components/mypage/MyPageSide.css'
import colorCode from '../../utils/color';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/reducers/authSlice';

const MyPageSide = ({data, pullRequest, issue}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClickLogout = () => {
        alert('로그아웃 되었습니다.');
        dispatch(logout());
    }

    if(!data)return;

    return(
        <div className ="MyPageSide">
            <div className="profile">{data.githubAvatar}</div>
            <h2 className="user_name">{data.username}</h2>
            <p className="intro" style={{color: colorCode.pointBlue}} >이슈해결왕 Lv.5 • <Link to={'badge'} style={{color: colorCode.pointBlue}}>내 칭호보기 {' >'}</Link></p>
            <p className="intro">주사용언어 | Dart</p>
            <p className="intro">소속 | {data.school} </p>

            <div className="user_activity">
                <h4 style={{marginBottom: 10, marginTop: 40}}>내 활동</h4>
                <table className='activity_table'>
                    <tbody>
                        <tr>
                            <td>
                                <p>이슈 횟수</p>
                                <p className='activity_count'>{issue | 0}</p>
                            </td>
                            <td>
                                <p>PR 횟수</p>
                                <p className='activity_count'>{pullRequest | 0}</p>
                            </td>
                            <td>
                                <p>종합 랭킹</p>
                                <p className='activity_count'>1018위</p>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>내 전체 활동<span style={{marginLeft: '150px'}}>{'>'}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='profile_manage'>
                <button className='edit_profile'>프로필 수정</button>
                <button className='logout' onClick={onClickLogout}>로그아웃</button>
            </div>
        </div>
    )
}

export default MyPageSide;