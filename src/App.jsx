import { useState, useEffect } from 'react'
import { ExpenseProvider } from './Context'
import  ExpenseForm  from './Components/ExpenseForm'
import  ExpenseItem  from './Components/ExpenseItem'
function App() {
    console.log(import.meta.env.VITE_EXAMPLE)
    const [expenses, setExpenses] = useState([])

    const addExpense = (expense) => {
        setExpenses((prev) => [{id: Date.now(), ...expense}, ...prev]);
    };

    const removeExpense = (id) => {
        setExpenses((prev) => prev.filter((expense) => expense.id !== id));
        
    };

    useEffect(() => {
        const expenses = JSON.parse(localStorage.getItem('expenses'));

        if (expenses && expenses.length > 0){
            setExpenses(expenses);
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expenses));

    },[expenses]);

    return (
        <ExpenseProvider value={{expenses, addExpense, removeExpense}}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Expenses</h1>
                    <div className="mb-4">
                        <ExpenseForm addExpense={addExpense} />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {expenses.map((expense)=> (
                            <div key={expense.id} className="w-full">
                                <ExpenseItem expense={expense}
                                removeExpense={removeExpense}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ExpenseProvider>
    );
}

export default App
