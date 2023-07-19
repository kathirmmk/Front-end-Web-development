import React from 'react';
import{Balance} from './expenseTracker/BalanceAmount';
import {IncomeExpenses} from './expenseTracker/IncomeExpenses';
import {TransactionList} from './expenseTracker/List';
import{AddTransaction} from './expenseTracker/AddTrans';
import{GlobalProvider} from './expenseTracker/Context';
import './App.css';

function App() {
  return (
    <>
    <div className='expensetracker'><h1>Expense Tracker</h1></div>
    <GlobalProvider>
    <div className="container">
     <Balance/>
     <IncomeExpenses/> 
     <AddTransaction/>
     <TransactionList/>
    </div>
    </GlobalProvider>
    </>
  );
}

export default App;
