import React from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import "../../css/Header.css"
const Search = () => {
  return (
    <>

      <div className="sidebar_search">
        <div className="sidebar_serachContainer">
          <SearchOutlinedIcon className="search_bar" />
          <input type="text" placeholder="type here and chat more" />

        </div>

      </div>



    </>
  )
}

export default Search;
