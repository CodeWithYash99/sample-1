import {BiChevronDown} from 'react-icons/bi'

import './index.css'

const ListItems = (props) => {
    const {tabItem} = props
    const {tabName} = tabItem

  return (
    <li className='list-items-container'>
        <p className='tab-name'>{tabName}</p>
        <BiChevronDown />
    </li>
  )
}

export default ListItems