import { createContext, useContext } from 'react';

export const ExpenseContext= createContext({
    expenses: [
        {
            id: 1,
            expense: "Expense msg",
            complete: false
        }
    ],
    addExpense: (expense) => {},
    removeExpense: (id) => {},
})


export const useExpense = () => {
    return useContext(ExpenseContext);
}

export const ExpenseProvider = ExpenseContext.Provider