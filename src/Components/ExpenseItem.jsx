import React, { useState } from 'react'
import { useExpense } from '../Context/ExpenseContext'

function ExpenseItem({ expense }) {
    const { removeExpense } = useExpense();
    const [expenseMsg, setExpenseMsg] = useState(expense.expense);
    const [expenseDate, setExpenseDate] = useState(expense.date);
    const [expenseAmount, setExpenseAmount] = useState(expense.amount);

    return (
        <div>
            <h3>Date</h3>
            <input
                type="date"
                className={`border outline-none w-full bg-transparent rounded-lg `}
                value={expenseDate}
                onChange={(e) => setExpenseDate(e.target.value)}
                readOnly
            />
            <h3>Amount</h3>
            <input type="text"
                className={`border outline-none w-full bg-transparent rounded-lg `}
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
                readOnly
            />
            <h3>Expense Msg</h3>
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg `}
                value={expenseMsg}
                onChange={(e) => setExpenseMsg(e.target.value)}
                readOnly
            />
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => removeExpense(expense.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default ExpenseItem;
