import React from 'react'
import JobCard from './JobCard'

const JobList = ({ jobs, onFilterClick }) => {
  return (
    <div>
      {jobs.map(job => (
        <JobCard 
        key={job.id} 
        job={job} 
        onFilterClick={onFilterClick} />
      ))}
    </div>
  )
}

export default JobList
