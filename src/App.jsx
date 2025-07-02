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
    <div className="lg:w-full bg-gray-100 min-h-screen lg:items-center">
      <header
        className="w-full h-44 bg-teal-900 bg-no-repeat bg-cover bg-top"
        style={{ backgroundImage: `url(${headerBg})` }}
      ></header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <FilterBar filters={filters} setFilters={setFilters} />
        <JobList jobs={jobs} onFilterClick={() => {}} />
      </div>
    </div>
  );
}

export default App;

