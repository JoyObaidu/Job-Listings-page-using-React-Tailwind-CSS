import React from 'react'

const FilterTag = ({ label, onRemove }) => {
  return (
    <span className="bg-teal-100 text-teal-800 px-3 md:px-4 py-1 md:py-2 rounded inline-flex items-center gap-2">
      {label}
      <button
        className="text-teal-500 hover:text-teal-700"
        onClick={() => onRemove(label)}
      >
        ✕
      </button>
    </span>
  )
}

export default FilterTag