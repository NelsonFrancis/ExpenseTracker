import React, {useReducer, createContext} from 'react'

const reducerFunction = (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':{
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        }
        case 'ADD_TRANSACTION': {
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        }
        default: return state;
    }
}

const initialState = {
    transactions : 
    [
        {id: 1, text: 'Added salary', amount: 30000},
        {id: 2, text: 'Paid Gas bill', amount: -650},
        {id: 3, text: 'Added bonus', amount: 500},
        {id: 4, text: 'Paid rent', amount: -10000}
    ]
}

export const MainState = createContext(initialState)

export const GlobalContext = ({children}) => {
    const [state, dispatch] = useReducer(reducerFunction, initialState)
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    return (
        <MainState.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </MainState.Provider>
    )
}
    

