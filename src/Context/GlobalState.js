import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//initial state
const initialState = {
    transactions: [
        {id:1, text:'rent', amount:-20000},
        {id:2, text: 'salary', amount: 100000},
        {id:3, text: 'Lunch', amount: -1000},
        {id:4, text: 'Web Dev Freelance', amount: 20000}
    ]
}


//create context
export const GlobalContext = createContext(initialState)

//provider component
export const GlobalProvider = ({children}) => {
      const [state, dispatch] = useReducer(AppReducer, initialState)

      return (<GlobalContext.Provider vlaue={{transactions: state.transactions}}>
        {children}
      </GlobalContext.Provider>)
}