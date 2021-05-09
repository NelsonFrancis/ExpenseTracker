import React, {useContext} from 'react'
import {MainState} from '../context/InitialState'

function Transactions() {
    const {transactions} = useContext(MainState)
    const {deleteTransaction} = useContext(MainState)
    return (
        <>
            <h3 className="sec-hd">History</h3>
            <ul>
                {
                    transactions.map(transaction => (
                        <li className="transaction-point" key={transaction.id}>
                            <span className="width50">
                                <span className="transaction-txt">{transaction.text}</span>
                            </span>
                            <span className="width50">
                                <span 
                                    className={`transaction-amt
                                        ${transaction.amount > 0 ? 
                                         "color-green": 
                                         "color-red" }
                                    `}>
                                        {transaction.amount}
                                </span>
                            </span>
                            <span className="clear-both"></span>
                            <span className="color-red pointer" onClick={() => deleteTransaction(transaction.id)}>Delete</span>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Transactions
