import React from 'react'

function Statics() {
  return (
    <div>
     
        <div className="bg-white/10 w-[410px] backdrop-blur-md rounded-2xl p-4 lg:p-6">
          <h2 className="text-white text-lg lg:text-xl font-bold mb-6">Basic Statistics</h2>

          {/* Arc Chart */}
          <div className="flex justify-center">
            <div className="relative w-40 h-24 lg:w-56 lg:h-32">
              <svg viewBox="0 0 200 100" className="w-full h-full">
                {/* Orange Arc */}
                <path
                  d="M 20 80 A 80 80 0 0 1 180 80"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                {/* Green Arc */}
                <path
                  d="M 40 80 A 60 60 0 0 1 160 80"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                {/* Sky Blue Arc */}
                <path
                  d="M 60 80 A 40 40 0 0 1 140 80"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                {/* Purple Arc */}
                <path
                  d="M 80 80 A 20 20 0 0 1 120 80"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Statistics List */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-orange-400"></span>
                <span className="text-white/80 text-sm">All time Volume</span>
              </div>
              <span className="text-white font-semibold text-sm truncate ml-2">$167,884.21</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-400"></span>
                <span className="text-white/80 text-sm">24 Hour Trade Volume</span>
              </div>
              <span className="text-white font-semibold text-sm truncate ml-2">$56,411.33</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-sky-400"></span>
                <span className="text-white/80 text-sm">Locked Value</span>
              </div>
              <span className="text-white font-semibold text-sm truncate ml-2">$81,981.22</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-400"></span>
                <span className="text-white/80 text-sm">Active Users</span>
              </div>
              <span className="text-white font-semibold text-sm truncate ml-2">45,628</span>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Statics
