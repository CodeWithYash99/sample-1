import {AiFillTag, AiFillCaretDown} from "react-icons/ai"
import {BiSolidPin} from "react-icons/bi"

import "./index.css"

const RecentlyViewed = props => {
  return (
    <div className='recently-viewed-container'> 
        <AiFillTag className="cross-tag" />
        <div className="title-container">
            <p className="sub-title">Quotes</p>
                <div className="main-title-container">
                    <h1 className="main-title">Recently Viewed</h1>
                    <AiFillCaretDown className="down-arrow" />
                    <BiSolidPin className="solid-pin" />
                </div>
        </div>
    </div>
  )
}

export default RecentlyViewed