import React, {useState, useContext} from 'react'
import { GlobalContext } from '../expenseTracker/Context';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
      <div className="inputtext"><h3>Description</h3></div>
        <div className="input">
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text" />
        </div>
        <div className="inputtext"><h3>Amount</h3></div>
        <div className="input">
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
        </div>
        <button className="btn">Submit & Save</button>
      </form>
    </>
  )
}
