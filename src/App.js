import React from 'react';
import './App.css';

// Import Components
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionHistory } from './components/TransactionHistory';
import { AddNewTransaction } from './components/AddNewTransaction';


// Import Provider
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionHistory />
        <AddNewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
