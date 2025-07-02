import React from 'react'
import FilterTag from './FilterTag'
import Button from './Button'

const FilterBar = ({ filters, onRemove, onClear }) => {
  return (
    <div className="bg-white shadow p-4 rounded flex flex-wrap items-center justify-between">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <FilterTag key={filter} label={filter} onRemove={onRemove} />
        ))}
      </div>
      <Button label="Clear" onClick={onClear} />
    </div>
  )
}

export default FilterBar