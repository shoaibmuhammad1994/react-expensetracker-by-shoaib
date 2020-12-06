import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {

    const sign = transaction.amount < 0? '-' : '+';

    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className={transaction.amount < 0? "minus" : "plus"}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={(e) => 
                {if (window.confirm('Are your sure you want to delete this transaction?')) 
                deleteTransaction(transaction.id)}}>x</button>
        </li>
    )
}

//onClick={() => deleteTransaction(transaction.id)}