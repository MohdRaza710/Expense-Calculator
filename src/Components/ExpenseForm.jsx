import React, { useState } from 'react'
import { useExpense } from '../Context/ExpenseContext';

function ExpenseForm() {
    const [expense, setExpense] = useState('')
    const [budget, setBudget] = useState('')
    const [ amount, setAmount ] = useState(0);
    const [date, setDate] = useState('');
    const { addExpense } = useExpense();

    const add = (e) => {
        e.preventDefault();

        if (!expense || !date) return;

        addExpense({ expense, date, amount, completed: false });
        setExpense('');
        setAmount('');
        setDate('');
    };
    return (
        <>
            <div>
                <h1>Expense Calculator</h1>
                <form onSubmit={add}>
                    <input
                        type="date"
                        className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <input
                        onChange={(e) => setExpense(e.target.value)}
                        value={expense}
                        placeholder='Enter Expense'
                        className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                        type="text"
                        name='expense'
                        required />
                    <input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)} 
                        className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                        placeholder='Enter Amount'
                        type="number"
                        name='amount'
                        required />
                    <button type="submit" className="rounded-lg px-3 py-1 bg-green-600 text-white shrink-0">
                        Add
                    </button>
                </form>
            </div>

            <div>
                <input
                placeholder='Enter Budget'
                    className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                    type="number"
                    name='budget'
                    onChange={(e) => setBudget(e.target.value)}
                    required />
                budget:{amount} <br />
                Total Expense: {budget - amount} <br />
                Amount Left: {amount - budget}
            </div>

        </>
    )
}

export default ExpenseForm
