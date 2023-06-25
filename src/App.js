import RecentlyViewed from "./components/RecentlyViewed"
import UpdateAndSearch from "./components/UpdateAndSearch"
import ListItems from './components/ListItems'
import TabListItems from "./components/TabListItems";

import './App.css';

const tabNamesList = [
  {id: 1, tabName: "Quote Name"},
  {id: 2, tabName: "Opportunity Name"},
  {id: 3, tabName: "Syncing"},
  {id: 4, tabName: "Expiration Date"},
  {id: 5, tabName: "Subtotal"},
  {id: 6, tabName: "Total Price"}
]

const tabListItems = [
  {id: 1, quoteName: "Muti Auto", opportunityName: "Opp_1", syncing: "", expiryDate: '', subtotal: "$0.00", totalPrice: "$0.00"},
  {id: 2, quoteName: "Muti Auto", opportunityName: "Opp_1", syncing: "", expiryDate: '', subtotal: "$0.00", totalPrice: "$0.00"},
  {id: 3, quoteName: "Muti Auto", opportunityName: "Opp_1", syncing: "", expiryDate: '', subtotal: "$0.00", totalPrice: "$0.00"},
  {id: 4, quoteName: "Muti Auto", opportunityName: "RRF_testOpp1", syncing: "", expiryDate: '', subtotal: "$37804.80", totalPrice: "$37804.80"},
  {id: 5, quoteName: "Muti Auto", opportunityName: "RRF_testOpp1", syncing: "", expiryDate: '', subtotal: "$37804.80", totalPrice: "$37804.80"},
  {id: 6, quoteName: "Muti Auto", opportunityName: "RRF_testOpp1", syncing: "", expiryDate: '', subtotal: "$37804.80", totalPrice: "$37804.80"},
  {id: 7, quoteName: "Muti Auto", opportunityName: "RRF_testOpp1", syncing: "", expiryDate: '', subtotal: "$37804.80", totalPrice: "$37804.80"},
  {id: 8, quoteName: "Muti Auto", opportunityName: "RRF_testOpp1", syncing: "", expiryDate: '', subtotal: "$37804.80", totalPrice: "$37804.80"},
  {id: 9, quoteName: "Muti Auto", opportunityName: "RRF_testOpp1", syncing: "", expiryDate: '', subtotal: "$37804.80", totalPrice: "$37804.80"},
  {id: 10, quoteName: "Muti Auto", opportunityName: "RRF_testOpp1", syncing: "", expiryDate: '', subtotal: "$37804.80", totalPrice: "$37804.80"},
]

console.log(tabListItems)

const App = () => (
  <div className='app-container'>
    <RecentlyViewed />
    <UpdateAndSearch />

    <ul className="tab-name-container">
      {tabNamesList.map(each => (<ListItems key={each.id} tabItem={each} />))}
    </ul>

    <ul className="tab-items-container">
      {tabListItems.map(each => (<TabListItems key={each.id} tabItemName={each} />))}
    </ul>
  </div>
)

export default App;
