import '../../styles/components/mypage/MyPageSide.css'
import colorCode from '../../utils/color';

const MyPageSide = () => {
    return(
        <div className ="MyPageSide">
            <div className="profile"></div>
            <h2 className="user_name">jinhyeon-dev</h2>
            <p className="intro" style={{color: colorCode.pointBlue}} >이슈해결왕 Lv.5 • <span style={{textDecoration: `underline ${colorCode.pointBlue}`}}>내 칭호보기</span>{'>'}</p>
            <p className="intro">주사용언어 | Dart</p>
            <p className="intro">소속 | 경북소프트웨어마이스터고등학교 </p>

            <div className="user_activity">
                <h4 style={{marginBottom: 10, marginTop: 40}}>내 활동</h4>
                <table className='activity_table'>
                    <tr>
                        <td>
                            <p>리뷰 횟수</p>
                            <p className='activity_count'>10</p>
                        </td>
                        <td>
                            <p>PR 횟수</p>
                            <p className='activity_count'>16</p>
                        </td>
                        <td>
                            <p>종합 랭킹</p>
                            <p className='activity_count'>1018위</p>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={3}>내 전체 활동<span style={{marginLeft: '150px'}}>{'>'}</span></td>
                    </tr>
                </table>
            </div>
            <div className='profile_manage'>
                <button className='edit_profile'>프로필 수정</button>
                <p style={{color:'red', fontSize: '13px', margin:0}}>로그아웃</p>
            </div>
        </div>
    )
}

export default MyPageSide;