import React from 'react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from 'recharts';

function Myholdings() {
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
      {/* My Holdings */}
            <h2 className="text-white text-lg lg:text-xl font-bold mb-4">My holdings</h2>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-6 mb-6 overflow-x-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <button className="text-white/60 hover:text-white">⋮⋮</button>
                  <button className="text-white/60 hover:text-white">⊞</button>
                </div>
              </div>
              <div className="overflow-x-auto">
        <div className="min-w-[700px] w-full">
      
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-white/60 text-sm font-medium pb-3">Currency</th>
                      <th className="text-right text-white/60 text-sm font-medium pb-3">Price (LTC)</th>
                      <th className="text-right text-white/60 text-sm font-medium pb-3">Price (USD)</th>
                      <th className="text-right text-white/60 text-sm font-medium pb-3">Amount</th>
                      <th className="text-right text-white/60 text-sm font-medium pb-3">P/L</th>
                      <th className="text-right text-white/60 text-sm font-medium pb-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Cardano', symbol: 'ADA', icon: '◉', priceLTC: 0.1467, priceUSD: '$0.812.27', amount: '+1.07%', pl: '+$358.14', chart: miniChartData, color: 'bg-teal-500' },
                      { name: 'Bitcoin', symbol: 'BTC', icon: '฿', priceLTC: 8.5249, priceUSD: '$41316', amount: '-16.16%', pl: '-$1588', chart: miniChartData, color: 'bg-yellow-500' },
                      { name: 'Ether', symbol: 'ETH', icon: '◈', priceLTC: 0.2254, priceUSD: '$38.26', amount: '+2.29%', pl: '+$1145', chart: miniChartData, color: 'bg-indigo-500' },
                      { name: 'Dogecoin', symbol: 'DOGE', icon: 'Ð', priceLTC: 0.00015, priceUSD: '$42.651', amount: '+48.56%', pl: '+$8241', chart: miniChartData, color: 'bg-orange-500' }
                    ].map((holding, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 lg:w-10 lg:h-10 ${holding.color} rounded-full flex items-center justify-center text-white font-bold text-sm lg:text-base`}>
                              {holding.icon}
                            </div>
                            <div>
                              <div className="text-white font-medium text-sm lg:text-base">{holding.name}</div>
                              <div className="text-white/60 text-xs lg:text-sm">{holding.symbol}</div>
                            </div>
                          </div>
                        </td>
                        <td className="text-right text-white text-sm lg:text-base">{holding.priceLTC}</td>
                        <td className="text-right text-white text-sm lg:text-base">{holding.priceUSD}</td>
                        <td className="text-right">
                          <span className={`text-sm lg:text-base ${holding.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                            {holding.amount}
                          </span>
                        </td>
                        <td className="text-right">
                          <span className={`text-sm lg:text-base ${holding.pl.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                            {holding.pl}
                          </span>
                        </td>
                        <td className="text-right">
                          <div className="w-16 lg:w-20 h-8">
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart data={holding.chart}>
                                <Line type="monotone" dataKey="value" stroke={holding.amount.startsWith('+') ? '#10b981' : '#ef4444'} strokeWidth={1.5} dot={false} />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>
                          
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            </div>
    </div>
  )
}

export default Myholdings
