import React from 'react'
import FilterTag from './FilterTag'
import Button from './Button'

const FilterBar = ({ filters, onRemove, onClear }) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded shadow mb-4 flex items-center justify-between flex-wrap gap-2">
      <div className="flex flex-wrap gap-2 text-2xl md:text-xl">
        {filters.map((filter) => (
          <FilterTag key={filter} label={filter} onRemove={onRemove} />
        ))}
      </div>
      <Button label="Clear" onClick={onClear} />
    </div>
  )
}

export default FilterBar