import React from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from 'recharts';

function Portfolio() {
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

  // Portfolio data
  const portfolioData = [
    { date: '17/02', value: 50000 },
    { date: '12/04', value: 52000 },
    { date: '15/05', value: 48000 },
    { date: '21/06', value: 53000 },
    { date: '07/07', value: 51000 },
    { date: '14/08', value: 55000 },
    { date: '22/09', value: 54000 },
    { date: '08/10', value: 57660 },
    { date: '11/11', value: 57660 }
  ];

  // Watchlist mini chart data
  const miniChartData = Array.from({ length: 20 }, (_, i) => ({
    value: 50 + Math.random() * 50
  }));
  return (
    <div>
    
            <div className="bg-white/10 backdrop-blur-md rounded-2xl  lg:p-6 ">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                <div className="mb-4 lg:mb-0">
                  <h2 className="text-white text-lg lg:text-xl font-bold mb-1">Portfolio</h2>
                  <div className="text-white text-2xl lg:text-3xl font-bold">
                    $57,660.35 <span className="text-green-400 text-base lg:text-lg ml-2">+258%</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 lg:gap-2">
                  {['1 min', '15 min', '30 min', '1H', '4H', '1D', '1W', '1M'].map(t => (
                    <button key={t} className={`px-2 lg:px-3 py-1 rounded-lg text-xs font-medium ${t === '1D' ? 'bg-white text-indigo-600' : 'text-white/60 hover:text-white'}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-48 lg:h-56 xl:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={portfolioData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#818cf8" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#818cf8" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" stroke="#fff" opacity={0.3} fontSize={12} />
                    <YAxis stroke="#fff" opacity={0.3} fontSize={12} />
                    <Area type="monotone" dataKey="value" stroke="#818cf8" strokeWidth={2} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
    </div>
  )
}

export default Portfolio
