import React from 'react'

const Button = ({ label, onClick }) => {
  return (
    <button
      className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button