import {BiSearch} from 'react-icons/bi'
import {TbReload} from 'react-icons/tb'
import {FiEdit2} from 'react-icons/fi'
import {LuFilter} from 'react-icons/lu'

import "./index.css"

const UpdateAndSearch = () => {
  return (
    <div className="Update-and-search-container">
        <div className="update-container">
            <p className="update-info">50+ Items - Updated a minute ago</p>
        </div>
        
        <div className="search-container">
            <div className='search-box'>
                <BiSearch className='search-icon' />
                <input className="search-input" type='text' value="" placeholder="Search this list..." />
            </div>
            
            <TbReload className='reload-icon' />
            <FiEdit2 className='edit-icon' />
            <LuFilter className='filter-icon' />
        </div>
    </div>
  )
}

export default UpdateAndSearch