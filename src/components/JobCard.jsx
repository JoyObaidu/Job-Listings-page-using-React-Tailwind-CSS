import React from 'react'

const JobCard = ({ job, onFilterClick }) => {
  return (
     <div className="bg-white p-4 md:p-6 rounded shadow flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="lg:flex lg:items-center lg:gap-6 relative">
        <img src={job.logo} alt={`${job.company} logo`} className="w-16 h-16 absolute bottom-50 rounded-full lg:relative lg:bottom-0" />
        <div className="flex items-start gap-4">
          <p className="text-gray-500 text-sm md:text-2xl">{job.company}</p>
          <div>
           {job.new && <span className="bg-teal-500 text-white text-sm px-3 py-2 rounded-full ml-2 md:text-2xl">NEW!</span>}
          {job.featured && <span className="bg-gray-800 text-white text-sm px-3 py-2 rounded-full ml-2 md:text-2xl">FEATURED</span>}
          </div>
        </div>
    
      </div>
       <h2 className="text-xl md:text-2xl font-bold">{job.position}</h2>
      <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
        {[job.role, job.level, ...(job.languages || []), ...(job.tools || [])].map((item) => (
          <button
            key={item}
            onClick={() => onFilterClick(item)}
            className="bg-teal-50 text-teal-800 px-3 py-1 rounded hover:bg-teal-200 transition"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default JobCard