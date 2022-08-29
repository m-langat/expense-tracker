import React, {useContext} from 'react'

import {GlobalContext} from '../Context/GlobalState'

export const TransactionList = () => {
  const {transactions} = useContext(GlobalContext)
  return (
    <div>
        <h4>Transaction History</h4>
        <ul className="list">
          {transactions.map(transction =>())}
            <li className="minus"> 
            Cash <span>-400</span><button className="btn-delete">x</button>
            </li>
        </ul>
    </div>
  )
}
