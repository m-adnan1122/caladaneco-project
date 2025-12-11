import React from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from 'recharts';

// Watchlist mini chart data
  const miniChartData = Array.from({ length: 20 }, (_, i) => ({
    value: 50 + Math.random() * 50
  }));

function Watchlist() {
  return (
    <div>
      {/* My Watchlist */}
            <h2 className="text-white text-lg lg:text-xl font-bold mb-4">My watchlist</h2>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-6 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { symbol: 'BTH', value: '$2,682.98', change: '+3.99%', positive: true, color: 'bg-indigo-600' },
                  { symbol: 'LTC', value: '$357.82', change: '-0.79%', positive: false, color: 'bg-teal-500' },
                  { symbol: 'COMP', value: '$501.12', change: '+9.54%', positive: true, color: 'bg-green-500' },
                  { symbol: 'GRT', value: '$1.76', change: '-4.15%', positive: false, color: 'bg-purple-500' },
                  { symbol: 'DOGE', value: '$0.1284', change: '+2.27%', positive: true, color: 'bg-yellow-500' },
                  { symbol: 'UNI', value: '$52,423.85', change: '+1.86%', positive: true, color: 'bg-pink-500' }
                ].map((coin, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-5 h-5 lg:w-6 lg:h-6 ${coin.color} rounded-full`}></div>
                      <span className="text-white font-medium text-sm">{coin.symbol}</span>
                    </div>
                    <div className="text-white text-base lg:text-lg font-bold mb-1 truncate">{coin.value}</div>
                    <div className={`text-xs ${coin.positive ? 'text-green-400' : 'text-red-400'}`}>
                      {coin.change}
                    </div>
                    <div className="h-10 mt-2">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={miniChartData}>
                          <Line type="monotone" dataKey="value" stroke={coin.positive ? '#10b981' : '#ef4444'} strokeWidth={1.5} dot={false} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                ))}
              </div>
            </div>
    </div>
  )
}

export default Watchlist
