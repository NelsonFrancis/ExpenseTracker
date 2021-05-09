import React, {useState, useContext} from 'react'
import {MainState} from '../context/InitialState'

function AddTransaction() {
    const {addTransaction, transactions} = useContext(MainState)
    const [reason, setReason] = useState('')
    let [amount, setAmount] = useState(0)
    const [type, setType] = useState('')
    const [reasonError, setReasonError] = useState('')
    const [amountError, setAmountError] = useState('')
    const [typeError, setTypeError] = useState('')

    const setAmountFun = (val) => {
        if(val == ""){
            setAmount(0)
        }else{
            setAmount(parseInt(val))
            setAmountError("")
        }
        
    }

    const setTypeFun = (val) => {
        if(val == ""){
            setType("")
        }else{
            setType(val)
            setTypeError("")
        }
    }

    const setReasonFun = (val) => {
        if(val != ""){
            setReasonError("")
        }
        setReason(val)
    }

    const validate = () => {
        if(reason==""){
            setReasonError("Reason is required")
            return false
        }
        if(amount == 0){
            setAmountError("Amount is required")
            return false
        }
        if(type == ""){
            setTypeError("Type is required")
            return false
        }
        return true
    }
    
    const submitCall = (e) => {
        e.preventDefault();
        const valid = validate();
        console.log("valid = ",valid)
        if(valid){
            
            const length = transactions.length + 1
            if(type == 'Expense'){
                amount = amount * -1
            }
            const fullState = {
                id: length,
                text: reason, 
                amount: amount
            }
            addTransaction(fullState)
            setReasonError('')
            setReason("")
            setAmountError("")
            setAmount(0)
            setTypeError("")
            setType("")
        }
        
    }
    return (
        <form onSubmit={submitCall}>
            <h3 className="sec-hd">Add Transactions</h3>
                <div className="form-group mb-20">
                    <label className="form-label">Reason</label>
                    <input type="text" className="form-input" value={reason} onChange={(e) => setReasonFun(e.target.value)} />
                    <span style={{color:'red', fontSize:'12'}}>{reasonError}</span>
                </div>
                <div className="form-group mb-20">
                    <label className="form-label">Amount</label>
                    <input type="text" className="form-input" value={amount} onChange={(e) => setAmountFun(e.target.value)} />
                    <span style={{color:'red', fontSize:'12'}}>{amountError}</span>
                </div>
                <div className="form-group mb-20">
                    <label className="form-label">Type</label>
                    <select className="form-input" value={type} onChange={(e) => setTypeFun(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Expense">Expense</option>
                        <option value="Income">Income</option>
                    </select>
                    <span style={{color:'red', fontSize:'12'}}>{typeError}</span>
                </div>
                <button type="submit" className="add-btn">Add</button>
        </form>
    )
}

export default AddTransaction
