import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddNewTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState();

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..."
                        value={text} 
                        onChange={(e) => {setText(e.target.value)}}
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" placeholder="Enter amount..." 
                        value={amount}
                        onChange={(e)=> {setAmount(e.target.value)}}
                        required
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
