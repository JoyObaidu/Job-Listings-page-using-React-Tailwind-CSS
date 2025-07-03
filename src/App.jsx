import React, { useState } from 'react';
import jobsData from './data/data';
import JobList from './components/JobList';
import FilterBar from './components/FilterBar';
import headerBg from './assets/images/bg-header-mobile.svg';
import './App.css';

function App() {
  const [jobs, setJobs] = useState(jobsData);
  const [filters, setFilters] = useState([]);

  return (
    <>
    <div className="max-w-4xl mx-auto p-4 ">
      <header
        className="bg-teal-500 h-32 w-full bg-no-repeat bg-cover bg-top md:h-48 flex items-center justify-center"
        style={{ backgroundImage: `url(${headerBg})` }}
      ></header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <FilterBar filters={filters} setFilters={setFilters} />
        <JobList jobs={jobs} onFilterClick={() => {}} />
      </div>
    </div>
    </>
    
  );
}

export default App;

