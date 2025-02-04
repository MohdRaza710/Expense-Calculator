import React, { useState } from 'react';
import { useExpense } from '../Context/ExpenseContext';

function ExpenseItem({ expense }) {
    const [isExpenseEditable, setIsExpenseEditable] = useState(false);
    const [expenseMsg, setExpenseMsg] = useState(expense.expense);
    const [expenseDate, setExpenseDate] = useState(expense.date);
    const [expenseAmount, setExpenseAmount] = useState(expense.amount);
    const {updateExpense, removeExpense, toggleComplete } = useExpense();

    const editExpense = () => {
        updateExpense(expense.id, { ...expense, expense: expenseMsg, date: expenseDate, amount: expenseAmount });
        setIsExpenseEditable(false);
    };

    const toggleCompleted = () => {
        toggleComplete(expense.id);
    };

    return (
        <div className={`flex flex-col border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${expense.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'}`}>
            <div className="flex items-center gap-x-3">
                <input
                    type="checkbox"
                    className="cursor-pointer"
                    checked={expense.completed}
                    onChange={toggleCompleted}
                />
                <h3>Date</h3>
                <input
                    type="date"
                    className={`border outline-none w-full bg-transparent rounded-lg`}
                    value={expenseDate}
                    onChange={(e) => setExpenseDate(e.target.value)}
                    readOnly={isExpenseEditable}
                />
                <h3>Amount</h3>
                <input
                    type="text"
                    className={`border outline-none w-full bg-transparent rounded-lg`}
                    value={expenseAmount}
                    onChange={(e) => setExpenseAmount(e.target.value)}
                    readOnly={isExpenseEditable}
                />
                <h3>Expense Msg</h3>
                <input
                    type="text"
                    className={`border outline-none w-full bg-transparent rounded-lg ${isExpenseEditable ? 'border-black/10 px-2' : 'border-transparent'} ${expense.completed ? 'line-through' : ''}`}
                    value={expenseMsg}
                    onChange={(e) => setExpenseMsg(e.target.value)}
                    readOnly={!isExpenseEditable}
                />
                <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                    onClick={() => {
                        if (expense.completed) return;

                        if (isExpenseEditable) {
                            editExpense();
                        } else setIsExpenseEditable((prev) => !prev);
                    }}
                    disabled={expense.completed}
                >
                    {isExpenseEditable ? '📁' : '✏️'}
                </button>

                <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                    onClick={() => removeExpense(expense.id)}
                >
                    ❌
                </button>
            </div>
            
        </div> 
    );
}

export default ExpenseItem;
