import React, {useState} from 'react'

export const AddTransaction = () => {
const [text, setText] = useState('');
const [amount, setAmount] = useState(0);

  return (
    <div>
        <h4>Add a new Transaction</h4>
        <form id="form">
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text } onChange={(e)=> setText(e.target.value)} placeholder='Enter text..' />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount <br></br> (negative - expense, pisitive - income)</label>
            <input type="number" value={amount } onChange={(e)=> setAmount(e.target.value)} placeholder='Enter amount' />
          </div>
          <button className='btn'>Add Transaction</button>
        </form>
    </div>
  )
}
