import React, {useContext} from 'react'
import {MainState} from '../context/InitialState'

function Balance() {
    const {transactions} = useContext(MainState)
    console.log("transactons length =", transactions.length)
    let amount
    let total
    if(transactions.length){
        amount = transactions.map(transaction => transaction.amount);
        total = amount.reduce((amt1, amt2) => (amt1 += amt2));
    }
    return (
        <div className="balance-box">
            <p className="balance-txt">Balance</p>
            <p className={`balance-amt ${total < 0 ? 'color-red' : 'color-green'}`}>&#8377; {total}</p>
        </div>
    )
}

export default Balance
