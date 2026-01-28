import React from 'react'
import { useForm } from 'react-hook-form'

const ExpenseForm = ({addExpense}) => {
    const {register, handleSubmit,reset,formState:{errors}} = useForm()
    const onSubmit = (data) => {
        addExpense({
            id: Date.now(),
            ...data,
            amount: parseFloat(data.amount)
        })
        reset()
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-white rounded-lg mx-15 shadow-mg p-6 mb-6 flex flex-col mt-6 '>
        <h2 className='text-xl font-semibold mb-4'>Add Expense</h2>
        <div className='mb-4'>
            <label>Description</label>
            <input 
                {
                    ...register("description", {required: "Description is required"})
                }
                type='text'
                className='w-full p-2 border rounded-lg'
                placeholder='Enter description'
            />
            {errors.description && <p>{errors.description.message}</p>}
        </div>
        <div className='mb-4'>
            <label>Amount</label>
            <input 
                {
                    ...register("amount", 
                        {
                            required: "Amount is required",
                            min: {
                                value: 0.01, message:'Amount must be greater then 0'
                            }
                        })
                    }
                    className='w-full p-2 border rounded-lg'
                    placeholder='Enter amount'
                />
                {errors.amount && <p>{errors.amount.message}</p>}
        </div>
        <div>
            <label>Category</label>
            <select
                {
                    ...register("category", {required: "Category is required"})
                }
                className='w-full p-2 border rounded-lg mb-4'
            >
                <option value="">Select a category</option>
                <option value="food">Food</option>
                <option value="transportation">Transportation</option>
                <option value="entertainment">Entertainment</option>
                <option value="other">Other</option>
            </select>
            {errors.category && <p>{errors.category.message}</p>}
        </div>
        <button 
        type="submit"
        className='bg-blue-500 text-white px-4 py-2 rounded-lg'
        >Add Expense</button>
    </form>
  )
}

export default ExpenseForm