import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, Menu, Bell } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('1D');
  const [showMenu, setShowMenu] = useState(false);

  // Market overview data
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
const cryptos = [
  { name: 'ETH', icon: '/vector4.png', value: '$168,331.09', change: '+2.51%', positive: true, color: 'from-teal-400 to-teal-600', bgColor: 'from-teal-700 to-teal-800' },
  { name: 'BTC', icon: '/vector3.png', value: '$24,018', change: '-1.03%', positive: false, color: 'from-yellow-400 to-yellow-600', bgColor: 'from-indigo-700 to-indigo-800' },
  { name: 'LTC', icon: '/vector2.png', value: '$457,224', change: '+3.71%', positive: true, color: 'from-indigo-400 to-indigo-600', bgColor: 'from-slate-700 to-slate-800' },
  { name: 'MATIC', icon: '/vector1.png', value: '$18,763.33', change: '+1.09%', positive: true, color: 'from-orange-400 to-orange-600', bgColor: 'from-purple-700 to-purple-800' }
];

  return (
    <div className="min-h-screen p-4 md:p-6 lg:px-20 overflow-x-hidden">

      {/* Mobile Header
      <div className="flex items-center justify-between mb-6 lg:hidden">
        <button 
          onClick={() => setShowMenu(!showMenu)}
          className="p-2 text-white"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-white text-2xl font-bold">Dashboard</h1>
        <button className="p-2 text-white">
          <Bell size={24} />
        </button>
      </div> */}

     {/* Dashboard Title for Desktop */}
<h1 className="text-white text-2xl lg:text-3xl font-bold mb-8">Dashboard</h1>

{/* Crypto Cards */}
  <div className="">
      <div className="">
        {/* Crypto Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {cryptos.map((crypto, i) => (
            <div key={i} className="relative pt-10">
              {/* Crypto Icon - Positioned at top center, overlapping card edge */}
              <div className="absolute top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${crypto.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white overflow-hidden`}>
                  <img 
                    src={crypto.icon} 
                    alt={`${crypto.name} logo`}
                    className="w-17 h-17 object-contain rounded-full"
                  />
                </div>
              </div>
              <div className={`bg-white/10 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all pt-14`}>
                <div className="text-center">
                  <div className="text-white text-3xl lg:text-4xl font-bold mb-3">{crypto.value}</div>
                  <div className={`flex items-center justify-center gap-2 text-base ${crypto.positive ? 'text-green-400' : 'text-red-400'}`}>
                    {crypto.positive ? 
                      <TrendingUp size={18} /> : 
                      <TrendingDown size={18} />
                    }
                    <span>{crypto.change} This week</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Market Overview */}
        <div className="lg:col-span-2 bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-6">
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

        {/* Basic Statistics */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-6">
          <h2 className="text-white text-lg lg:text-xl font-bold mb-6">Basic Statistics</h2>

          {/* Arc Chart */}
          <div className="flex justify-center mb-6">
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
          <div className="space-y-4">
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

      {/* Portfolio */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-6 mb-6">
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

      {/* My Transactions */}
      <h2 className="text-white text-lg lg:text-xl font-bold mb-4">My transactions</h2>
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-6 overflow-x-auto">
        <div className="min-w-[700px]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-white/60 text-sm font-medium pb-3">Currency</th>
                <th className="text-center text-white/60 text-sm font-medium pb-3">Date & Time</th>
                <th className="text-right text-white/60 text-sm font-medium pb-3">Price</th>
                <th className="text-right text-white/60 text-sm font-medium pb-3">Action</th>
                <th className="text-right text-white/60 text-sm font-medium pb-3">P/L</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Bitcoin', symbol: 'BTC', date: '03/18/21 16:43', price: '$2,309', action: 'Sold', pl: '$23.61', icon: '฿', color: 'bg-yellow-500' },
                { name: 'Ethereum', symbol: 'ETH', date: '07/18/21 09:51', price: '$1,803', action: 'Bought', pl: '$44.01', icon: '◈', color: 'bg-indigo-500' },
                { name: 'Litecoin', symbol: 'LTC', date: '09/24/21 14:38', price: '$3,098', action: 'Sold', pl: '$92,213', icon: 'Ł', color: 'bg-teal-500' },
                { name: 'Uniswap', symbol: 'UNI', date: '07/15/21 20:33', price: '$4,463', action: 'Bought', pl: '$83.31', icon: '🦄', color: 'bg-pink-500' },
                { name: 'Tether', symbol: 'USDT', date: '03/13/21 15:09', price: '$2,006', action: 'Sold', pl: '$23.21', icon: '₮', color: 'bg-green-500' }
              ].map((tx, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 lg:w-8 lg:h-8 ${tx.color} rounded-full flex items-center justify-center text-white text-sm`}>
                        {tx.icon}
                      </div>
                      <div>
                        <div className="text-white text-sm">{tx.name}</div>
                        <div className="text-white/60 text-xs">{tx.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center text-white/80 text-sm whitespace-nowrap">{tx.date}</td>
                  <td className="text-right text-white text-sm">{tx.price}</td>
                  <td className="text-right text-white/80 text-sm">{tx.action}</td>
                  <td className="text-right text-green-400 text-sm whitespace-nowrap">{tx.pl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;