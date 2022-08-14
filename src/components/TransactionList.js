import React from 'react'

export const TransactionList = () => {
  return (
    <div>
        <h4>Transaction History</h4>
        <ul className="list">
            <li className="minus"> 
            Cash <span>-400</span><button className="btn-delete">x</button>
            </li>
        </ul>
    </div>
  )
}
