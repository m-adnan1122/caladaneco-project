import { TrendingDown, TrendingUp } from 'lucide-react';
import React, { useState } from 'react';

const cryptos = [
  { name: 'ETH', icon: '/vector4.png', value: '$168,331.09', change: '+2.51%', positive: true, color: 'from-teal-400 to-teal-600', bgColor: 'from-teal-700 to-teal-800' },
  { name: 'BTC', icon: '/vector3.png', value: '$24,018', change: '-1.03%', positive: false, color: 'from-yellow-400 to-yellow-600', bgColor: 'from-indigo-700 to-indigo-800' },
  { name: 'LTC', icon: '/vector2.png', value: '$457,224', change: '+3.71%', positive: true, color: 'from-indigo-400 to-indigo-600', bgColor: 'from-slate-700 to-slate-800' },
  { name: 'MATIC', icon: '/vector1.png', value: '$18,763.33', change: '+1.09%', positive: true, color: 'from-orange-400 to-orange-600', bgColor: 'from-purple-700 to-purple-800' }
];
const Dashboard = () => {
 

  return (
    <>
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
    </>
  );
};

export default Dashboard;