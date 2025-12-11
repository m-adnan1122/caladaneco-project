import React from 'react'

function Mytransection() {
  return (
    <div>
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
  )
}

export default Mytransection
