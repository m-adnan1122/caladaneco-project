import React, { useState } from 'react';

export default function VotingProposals() {
  const [activeFilter, setActiveFilter] = useState('all');

  const proposals = [
    { id: 1, title: 'Voting for Staff Game Workers Purchase | Proposal for Optimizing the Distribution!', date: 'Ended Aug 19th, 2025 11:00' },
    { id: 2, title: 'Voting for Staff Game Workers Purchase | Proposal for Optimizing the Distribution!', date: 'Ended Aug 19th, 2025 11:00' },
    { id: 3, title: 'Voting for Staff Game Workers Purchase | Proposal for Optimizing the Distribution!', date: 'Ended Aug 19th, 2025 11:00' },
    { id: 4, title: 'Voting for Staff Game Workers Purchase | Proposal for Optimizing the Distribution!', date: 'Ended Aug 19th, 2025 11:00' },
    { id: 5, title: 'Voting for Staff Game Workers Purchase | Proposal for Optimizing the Distribution!', date: 'Ended Aug 19th, 2025 11:00' },
    { id: 6, title: 'Voting for Staff Game Workers Purchase | Proposal for Optimizing the Distribution!', date: 'Ended Aug 19th, 2025 11:00' },
    { id: 7, title: 'Voting for Staff Game Workers Purchase | Proposal for Optimizing the Distribution!', date: 'Ended Aug 19th, 2025 11:00' },
    { id: 8, title: 'Voting for Staff Game Workers Purchase | Proposal for Optimizing the Distribution!', date: 'Ended Aug 19th, 2025 11:00' },
  ];

  return (
    <div className="min-h-screen bg-transparent p-3 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Filter Buttons at Top */}
        <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
          <button 
            onClick={() => setActiveFilter('vote-now')}
            className={`px-3 sm:px-5 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
              activeFilter === 'vote-now' 
                ? 'bg-indigo-900 text-white' 
                : 'bg-indigo-800/50 text-white hover:bg-indigo-800/70'
            }`}
          >
            Vote now
          </button>
          <button 
            onClick={() => setActiveFilter('closed')}
            className={`px-3 sm:px-5 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
              activeFilter === 'closed' 
                ? 'bg-blue-700 text-white' 
                : 'bg-blue-600/50 text-white hover:bg-blue-600/70'
            }`}
          >
            Closed
          </button>
        </div>

        {/* Proposals List */}
        <div className="space-y-3 md:space-y-4">
          {proposals.map((proposal) => (
            <div 
              key={proposal.id}
              className="bg-gradient-to-l from-indigo-700/80 to-indigo-900/80 backdrop-blur-md rounded-lg p-3 sm:p-4 md:p-5 hover:from-indigo-700/90 hover:to-indigo-900/90 transition-colors border border-white/10"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                {/* Left Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-normal mb-1 sm:mb-1.5 text-sm sm:text-base break-words">
                    {proposal.title}
                  </h3>
                  <p className="text-indigo-200/80 text-xs sm:text-sm">
                    {proposal.date}
                  </p>
                </div>

                {/* Right Buttons */}
                <div className="flex gap-2 sm:gap-3 flex-shrink-0">
                  <button 
                    className="bg-gray-500/90 text-white rounded hover:bg-gray-600 transition-colors font-medium text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 whitespace-nowrap"
                  >
                    Closed
                  </button>
                  <button 
                    className="bg-gray-500/90 text-white rounded hover:bg-gray-600 transition-colors font-medium text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 whitespace-nowrap"
                  >
                    Core
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}