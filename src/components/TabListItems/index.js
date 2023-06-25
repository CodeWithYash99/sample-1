import {AiFillCaretDown} from "react-icons/ai"

import './index.css'

const TabListItems = (props) => {
    const {tabItemName} = props
    const {id, quoteName, opportunityName, expiryDate, subtotal, totalPrice} = tabItemName

  return (
    <li className='tab-list-items-container'>
        <div className='tab-id-name-container'>
          <p className='tab-item-id'>{id}</p>
          <p className='tab-quote-name'>{quoteName}</p>
        </div>
        <div className='tab-opp-div'>
          <p className='tab-opportunity-name'>{opportunityName}</p>
        </div>
        <div className='tab-checkbox-div'>
          <input type="checkbox" />
        </div>
        <div className='tab-expiry-div'>
          <p>{expiryDate}</p>
        </div>
        <div className='tab-sub-total-div'>
          <p>{subtotal}</p>
        </div>
        <div className='tab-total-div'>
          <p>{totalPrice}</p>
        </div>
        <div className="tab-arrow">
          <AiFillCaretDown />
        </div>
    </li>
  )
}

export default TabListItems