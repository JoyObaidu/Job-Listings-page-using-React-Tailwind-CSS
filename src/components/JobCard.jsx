import React from 'react'

const JobCard = ({ job, onFilterClick }) => {
  return (
     <div className="bg-white p-6 rounded-lg shadow flex flex-col items-start gap-2 border-l-4 border-teal-500 mt-10 relative">
      <div className="lg:flex lg:items-center lg:gap-6 relative">
        <img src={job.logo} alt={`${job.company} logo`} className="w-16 h-16 absolute bottom-50 rounded-full lg:relative lg:bottom-0" />
        <div className="flex items-start gap-4">
          <p className="text-teal-600 font-bold">{job.company}</p>
          <div>
           {job.new && <span className="bg-teal-500 text-white text-sm px-2 py-1 rounded-full ml-2">NEW!</span>}
          {job.featured && <span className="bg-gray-800 text-white text-sm px-2 py-1 rounded-full ml-2">FEATURED</span>}
          </div>
        </div>
       <h2 className="text-xl mt-3 font-semibold">{job.position}</h2>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
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