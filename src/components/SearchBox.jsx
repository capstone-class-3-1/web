import '../styles/components/SearchBox.css'
import searchIcon from '../assets/search.png'
import { useState } from 'react'

const SearchBox = ({placeholder, type, onClick}) => {
    const [search, setSearch] = useState('');

    return(
        <div className={`searchBox ${type}`}>
            <input type="text" placeholder={placeholder} onChange={(e)=>{setSearch(e.target.value)}} value={search} />
            <button onClick={()=>{onClick(search)}}><img src={searchIcon} alt="돋보기" width={14}/></button>
        </div>
    )
}

export default SearchBox;