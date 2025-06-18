import '../../styles/components/auth/SelectSchool.css'

const SelectSchool = ({handle, data}) => {
    return(
        <div className="SelectSchool">
            <select value={data} onChange={(e) => handle('school', e.target.value)}>
                <option value={'경북소프트웨어마이스터고'}>경북소프트웨어마이스터고등학교</option>
                <option value={'대구소프트웨어마이스터고'}>대구소프트웨어마이스터고등학교</option>
                <option value={'대덕소프트웨어마이스터고'}>대덕소프트웨어마이스터고등학교</option>
                <option value={'부산소프트웨어마이스터고'}>부산소프트웨어마이스터고등학교</option>
                <option value={'광주소프트웨어마이스터고'}>광주소프트웨어마이스터고등학교</option>
            </select>
        </div>
    )
}

export default SelectSchool;