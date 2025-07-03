import React from 'react'

const Button = ({ label, onClick }) => {
  return (
    <button
      className="bg-teal-500 hover:bg-teal-600 text-white px-3 md:px-4 py-1 md:py-2 rounded transition"
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button