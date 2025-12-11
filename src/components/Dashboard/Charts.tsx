import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import React, { useState } from 'react';

function Charts() {
  const [activeTab, setActiveTab] = useState('1D');

  const marketData = [
    { date: 'June 11', val1: 62, val2: 58, val3: 55 },
    { date: 'June 14', val1: 70, val2: 52, val3: 68 },
    { date: 'June 17', val1: 55, val2: 75, val3: 50 },
    { date: 'June 21', val1: 68, val2: 48, val3: 72 },
    { date: 'June 24', val1: 52, val2: 70, val3: 45 },
    { date: 'June 27', val1: 75, val2: 55, val3: 78 },
    { date: 'July 01', val1: 58, val2: 68, val3: 52 },
    { date: 'Aug 04', val1: 72, val2: 45, val3: 75 },
    { date: 'Sept 12', val1: 48, val2: 78, val3: 58 },
    { date: 'Nov 21', val1: 80, val2: 52, val3: 68 }
  ];

  return (
    <div>
      <div className="lg:col-span-2 bg-white/10 backdrop-blur-md rounded-2xl  p-4 lg:p-8">

        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
          <h2 className="text-white text-lg lg:text-xl font-bold mb-3 lg:mb-0">Market Overview</h2>
          <div className="flex flex-col lg:flex-row lg:items-center gap-2">
            <span className="text-white/60 text-sm mb-2 lg:mb-0">View chart data from</span>
            <div className="flex flex-wrap gap-1">
              {['1D', '1H', '1W', '1M', 'Past Years', 'Predict High', 'All'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-2 py-1 lg:px-3 rounded-lg text-xs font-medium transition-all ${
                    activeTab === tab ? 'bg-blue-600 text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="h-48 lg:h-56 xl:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={marketData}>
              <XAxis dataKey="date" stroke="#fff" opacity={0.3} fontSize={12} />
              <YAxis stroke="#fff" opacity={0.3} fontSize={12} />
              <Line type="monotone" dataKey="val1" stroke="#fbbf24" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="val2" stroke="#a78bfa" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="val3" stroke="#34d399" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Charts;
