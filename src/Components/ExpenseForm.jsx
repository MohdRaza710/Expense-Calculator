import React, { useState } from 'react'
import { useExpense } from '../Context/ExpenseContext';

function ExpenseForm() {
    const [expense, setExpense] = useState('')
    const [budget, setBudget] = useState('')
    const [amount, setAmount] = useState('');
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
                        placeholder='Add Date'
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
                budget: {budget} <br />
                Total Expense: {budget - amount} <br />
                Amount Left: {amount -Math.floor(budget) }
            </div>
            <div>
                <button className='bg-neutral-700 text-black border border-black rounded-lg font-medium'><a href="IncomeForm.jsx">Income Calculator</a></button>
            </div>

            <div>
                <button className='bg-neutral-700 text-black border border-black rounded-lg font-medium'><a href="ExpenseForm.jsx">Expense Calculator</a></button>
            </div>

        </>
    )
}

export default ExpenseForm
