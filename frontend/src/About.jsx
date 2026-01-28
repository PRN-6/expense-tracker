import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">About Expense Tracker</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-lg mb-4">
            This is a simple expense tracking application built with React and Tailwind CSS.
          </p>
          <p className="text-lg">
            Track your daily expenses, categorize them, and keep a running total of your spending.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
