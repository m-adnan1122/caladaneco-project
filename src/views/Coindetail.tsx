import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { ChevronDown, MoreVertical, TrendingUp, TrendingDown, ChevronUp } from 'lucide-react';

export default function CryptoDashboard() {
  const [selectedCoin, setSelectedCoin] = useState('ethereum');
  interface Trade {
    type: 'BUY' | 'SELL';
    amount: string;
    price: string;
    fee: string;
    total: string;
    timestamp: string;
  }

  interface TradeConfirm {
    type: 'BUY' | 'SELL';
    amount: string;
    price: string;
    fee: string;
    total: string;
  }

  const [expandedSections, setExpandedSections] = useState({
    about: false,
    quickTrade: false,
    sellOrder: false,
    buyOrder: false
  });
  const [amountBTC, setAmountBTC] = useState('52.5');
  const [priceBPL, setPriceBPL] = useState('0.000000');
  const [feePct, setFeePct] = useState('0.000000');
  const [totalBPL, setTotalBPL] = useState('0.000000');
  const [trades, setTrades] = useState<Trade[]>([]);
  const [showTradeModal, setShowTradeModal] = useState(false);
  const [tradeConfirm, setTradeConfirm] = useState<TradeConfirm | null>(null);
  
  const coins = [
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', color: '#F7931A' },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', color: '#627EEA' },
    { id: 'monero', name: 'Monero', symbol: 'XMR', color: '#FF6600' },
    { id: 'litecoin', name: 'Litecoin', symbol: 'LTC', color: '#345D9D' }
  ];

  const chartData = [
    { week: 'Week 01', value: 300 },
    { week: 'Week 02', value: 350 },
    { week: 'Week 03', value: 280 },
    { week: 'Week 04', value: 400 },
    { week: 'Week 05', value: 500 },
    { week: 'Week 06', value: 450 },
    { week: 'Week 07', value: 380 },
    { week: 'Week 08', value: 420 },
    { week: 'Week 09', value: 550 },
    { week: 'Week 10', value: 600 }
  ];

  const sellOrders = [
    { price: 92.3, amount: 0.13, total: '$134.12' },
    { price: 93.9, amount: 0.18, total: '$237.31' },
    { price: 94.2, amount: 0.25, total: '$232.58' },
    { price: 96.2, amount: 0.35, total: '$126.78' },
    { price: 91.6, amount: 0.75, total: '$46.92' },
    { price: 92.6, amount: 0.21, total: '$133.27' },
    { price: 93.8, amount: 0.55, total: '$212.56' },
    { price: 94.2, amount: 0.18, total: '$125.36' }
  ];

  const buyOrders = [
    { price: 86.2, amount: 0.35, total: '$125.36' },
    { price: 93.9, amount: 0.55, total: '$222.56' },
    { price: 94.2, amount: 0.25, total: '$232.58' },
    { price: 91.6, amount: 0.75, total: '$46.92' },
    { price: 93.9, amount: 0.18, total: '$237.31' },
    { price: 92.3, amount: 0.15, total: '$134.12' },
    { price: 92.6, amount: 0.21, total: '$123.27' },
    { price: 94.2, amount: 0.18, total: '$125.36' }
  ];

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };

  const handleBuy = () => {
    if (!amountBTC || amountBTC === '0') {
      alert('Please enter a valid amount');
      return;
    }
    setTradeConfirm({
      type: 'BUY',
      amount: amountBTC,
      price: priceBPL,
      fee: feePct,
      total: totalBPL
    });
    setShowTradeModal(true);
  };

  const handleSell = () => {
    if (!amountBTC || amountBTC === '0') {
      alert('Please enter a valid amount');
      return;
    }
    setTradeConfirm({
      type: 'SELL',
      amount: amountBTC,
      price: priceBPL,
      fee: feePct,
      total: totalBPL
    });
    setShowTradeModal(true);
  };

  const confirmTrade = () => {
    if (tradeConfirm) {
      const newTrade: Trade = {
        ...tradeConfirm,
        timestamp: new Date().toLocaleTimeString()
      };
      setTrades([...trades, newTrade]);
      setShowTradeModal(false);
      setAmountBTC('52.5');
      setPriceBPL('0.000000');
      setFeePct('0.000000');
      setTotalBPL('0.000000');
      alert(`✓ ${tradeConfirm.type} order confirmed!\n\nAmount: ${tradeConfirm.amount} BTC\nPrice: ${tradeConfirm.price} BPL\nTotal: ${tradeConfirm.total}`);
    }
  };

  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
          <h1 className="text-white text-2xl md:text-3xl font-bold">Coin Details</h1>
          
          {/* Coin Tabs */}
          <div className="flex gap-2 md:gap-4 flex-wrap">
            {coins.map((coin) => (
              <button
                key={coin.id}
                onClick={() => setSelectedCoin(coin.id)}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all text-xs md:text-sm ${
                  selectedCoin === coin.id
                    ? 'bg-white/20 border-b-2 border-white'
                    : 'bg-transparent hover:bg-white/10'
                }`}
              >
                <div 
                  className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: coin.color }}
                >
                  {coin.symbol[0]}
                </div>
                <span className="text-white hidden sm:inline">{coin.name}</span>
                <span className="text-white sm:hidden">{coin.symbol}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Left - About Section */}
          <div className="bg-indigo-800/60 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-base md:text-lg font-semibold">About</h2>
              <button className="text-white hover:text-gray-300">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {expandedSections.about && (
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl font-bold">$</span>
                  </div>
                  <div>
                    <h3 className="text-white text-lg md:text-xl font-bold">Ethereum</h3>
                    <p className="text-gray-300 text-sm">ETH</p>
                    <p className="text-gray-400 text-xs">1 ETH = 282.41 USD</p>
                  </div>
                </div>

                <div className="text-gray-300 text-xs md:text-sm leading-relaxed mb-6">
                  <p className="mb-4">
                    Launched in 2015, Ethereum is an open-source, blockchain-based, decentralized software platform used for its own cryptocurrency, ether. It enables SmartContracts and Distributed Applications (DApps) to be built and run without any downtime, fraud, control, or interference from a third party.
                  </p>
                  <p>
                    Ethereum is not just a platform but also a programming language (Turing complete) running on a blockchain, helping developers to build and publish distributed applications.
                  </p>
                </div>
              </div>
            )}

            <button 
              onClick={() => toggleSection('about')}
              className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto hover:bg-red-600 transition-colors"
            >
              {expandedSections.about ? (
                <ChevronUp className="w-6 h-6 text-white" />
              ) : (
                <ChevronDown className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Center - Chart Section */}
          <div className="lg:col-span-2 bg-indigo-800/60 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
              <div>
                <h2 className="text-white text-base md:text-lg font-semibold mb-1">Coin Chart</h2>
                <p className="text-gray-400 text-xs">Lorem ipsum sit amet, consectetur</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-4 w-full md:w-auto">
                <button className="flex items-center gap-2 bg-indigo-700/60 px-3 md:px-4 py-2 rounded-lg text-white text-xs md:text-sm hover:bg-indigo-600/60 transition-colors">
                  <span>📅</span>
                  <span className="hidden sm:inline">4 June 2020 - 17 June 2020</span>
                  <span className="sm:hidden">4-17 Jun 2020</span>
                </button>
                <button className="flex items-center gap-2 bg-indigo-700/60 px-3 md:px-4 py-2 rounded-lg text-white text-xs md:text-sm hover:bg-indigo-600/60 transition-colors">
                  USD ($ US Dollar)
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Price Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-6">
              <div>
                <p className="text-gray-400 text-xs mb-1">Price</p>
                <p className="text-white text-lg md:text-2xl font-bold">$11,898.15</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">24h% change</p>
                <p className="text-green-400 text-lg md:text-xl font-bold flex items-center gap-1">
                  1.64% <TrendingUp className="w-4 h-4" />
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">Volume (24h)</p>
                <p className="text-white text-lg md:text-xl font-semibold">$47.22B</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">Market Cap</p>
                <p className="text-white text-lg md:text-xl font-semibold">$219.24B</p>
              </div>
            </div>

            {/* Chart */}
            <div className="h-48 md:h-64 relative">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <XAxis 
                    dataKey="week" 
                    stroke="#666"
                    tick={{ fill: '#999', fontSize: 12 }}
                  />
                  <YAxis 
                    stroke="#666"
                    tick={{ fill: '#999', fontSize: 12 }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#EF4444',
                      border: 'none',
                      borderRadius: '8px',
                      color: 'white'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#06D6A0" 
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bottom Section - Trading */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
          {/* Quick Trade */}
          <div className="bg-indigo-800/60 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/10">
            <h2 className="text-white text-base md:text-lg font-semibold mb-1">Quick Trade</h2>
            <p className="text-gray-400 text-xs mb-4">Lorem ipsum dolor sit amet, consectetur</p>

            <div className="flex items-center justify-between gap-2 bg-indigo-700/60 p-3 rounded-lg mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 md:w-8 h-6 md:h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs md:text-sm">₿</span>
                </div>
                <span className="text-white font-semibold text-sm md:text-base">224.55 Btc</span>
              </div>
              <button className="text-white hover:text-gray-300">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 mb-4">
              <div className="bg-indigo-900/60 p-3 rounded-lg">
                <label className="text-gray-400 text-xs mb-1 block">Amount BTC</label>
                <input 
                  type="text" 
                  value={amountBTC}
                  onChange={(e) => setAmountBTC(e.target.value)}
                  className="bg-transparent text-white text-base md:text-lg font-semibold w-full outline-none"
                />
              </div>

              <div className="bg-indigo-900/60 p-3 rounded-lg">
                <label className="text-gray-400 text-xs mb-1 block">Price BPL</label>
                <input 
                  type="text" 
                  value={priceBPL}
                  onChange={(e) => setPriceBPL(e.target.value)}
                  className="bg-transparent text-white text-base md:text-lg font-semibold w-full outline-none"
                />
              </div>

              <div className="bg-indigo-900/60 p-3 rounded-lg">
                <label className="text-gray-400 text-xs mb-1 block">Fee (%)</label>
                <input 
                  type="text" 
                  value={feePct}
                  onChange={(e) => setFeePct(e.target.value)}
                  className="bg-transparent text-white text-base md:text-lg font-semibold w-full outline-none"
                />
              </div>

              <div className="bg-indigo-900/60 p-3 rounded-lg">
                <label className="text-gray-400 text-xs mb-1 block">Total BPL</label>
                <input 
                  type="text" 
                  value={totalBPL}
                  onChange={(e) => setTotalBPL(e.target.value)}
                  className="bg-transparent text-white text-base md:text-lg font-semibold w-full outline-none"
                />
              </div>
            </div>

            <p className="text-gray-400 text-xs mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>

            <div className="flex gap-3">
              <button 
                onClick={handleBuy}
                className="flex-1 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base flex items-center justify-center gap-2 transition-colors"
              >
                BUY <TrendingUp className="w-4 md:w-5 h-4 md:h-5" />
              </button>
              <button 
                onClick={handleSell}
                className="flex-1 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base flex items-center justify-center gap-2 transition-colors"
              >
                SELL <TrendingDown className="w-4 md:w-5 h-4 md:h-5" />
              </button>
            </div>

            <button 
              onClick={() => toggleSection('quickTrade')}
              className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mt-4 hover:bg-red-600 transition-colors"
            >
              {expandedSections.quickTrade ? (
                <ChevronUp className="w-6 h-6 text-white" />
              ) : (
                <ChevronDown className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Sell Order */}
          <div className="bg-indigo-800/60 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-base md:text-lg font-semibold">Sell Order</h2>
              <button className="text-white hover:text-gray-300">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {expandedSections.sellOrder && (
              <div>
                <div className="grid grid-cols-3 gap-2 text-gray-400 text-xs mb-2">
                  <div>Price</div>
                  <div>Amount</div>
                  <div>Total</div>
                </div>

                <div className="space-y-1 mb-4 max-h-64 overflow-y-auto">
                  {sellOrders.map((order, idx) => (
                    <div 
                      key={idx}
                      className={`grid grid-cols-3 gap-2 p-2 rounded text-xs md:text-sm cursor-pointer transition-colors hover:bg-indigo-600/40 ${
                        idx === 1 ? 'bg-teal-500/20 text-teal-400 font-semibold' : 'text-white'
                      }`}
                      onClick={() => {
                        setAmountBTC(order.amount.toString());
                        setPriceBPL(order.price.toString());
                      }}
                    >
                      <div>${order.price}</div>
                      <div>{order.amount}</div>
                      <div>{order.total}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button 
              onClick={() => toggleSection('sellOrder')}
              className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto hover:bg-red-600 transition-colors"
            >
              {expandedSections.sellOrder ? (
                <ChevronUp className="w-6 h-6 text-white" />
              ) : (
                <ChevronDown className="w-6 h-6 text-white" />
              )}
            </button>
          </div>

          {/* Buy Order */}
          <div className="bg-indigo-800/60 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-base md:text-lg font-semibold">Buy Order</h2>
              <button className="text-white hover:text-gray-300">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            {expandedSections.buyOrder && (
              <div>
                <div className="grid grid-cols-3 gap-2 text-gray-400 text-xs mb-2">
                  <div>Price</div>
                  <div>Amount</div>
                  <div>Total</div>
                </div>

                <div className="space-y-1 mb-4 max-h-64 overflow-y-auto">
                  {buyOrders.map((order, idx) => (
                    <div 
                      key={idx}
                      className={`grid grid-cols-3 gap-2 p-2 rounded text-xs md:text-sm cursor-pointer transition-colors hover:bg-indigo-600/40 ${
                        idx === 4 ? 'bg-teal-500/20 text-teal-400 font-semibold' : 'text-white'
                      }`}
                      onClick={() => {
                        setAmountBTC(order.amount.toString());
                        setPriceBPL(order.price.toString());
                      }}
                    >
                      <div>${order.price}</div>
                      <div>{order.amount}</div>
                      <div>{order.total}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button 
              onClick={() => toggleSection('buyOrder')}
              className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto hover:bg-red-600 transition-colors"
            >
              {expandedSections.buyOrder ? (
                <ChevronUp className="w-6 h-6 text-white" />
              ) : (
                <ChevronDown className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Trade Confirmation Modal */}
      {showTradeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-indigo-800 rounded-2xl p-6 max-w-md w-full border border-white/20">
            <h3 className="text-white text-xl font-bold mb-4">
              {tradeConfirm?.type} Order Confirmation
            </h3>
            
            <div className="space-y-3 mb-6 bg-indigo-900/60 p-4 rounded-lg">
              <div className="flex justify-between">
                <span className="text-gray-400">Type:</span>
                <span className={`font-bold ${tradeConfirm?.type === 'BUY' ? 'text-green-400' : 'text-red-400'}`}>
                  {tradeConfirm?.type}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Amount:</span>
                <span className="text-white font-semibold">{tradeConfirm?.amount} BTC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Price:</span>
                <span className="text-white font-semibold">{tradeConfirm?.price} BPL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Fee:</span>
                <span className="text-white font-semibold">{tradeConfirm?.fee}%</span>
              </div>
              <div className="border-t border-white/10 pt-3 flex justify-between">
                <span className="text-gray-300 font-semibold">Total:</span>
                <span className="text-white font-bold">{tradeConfirm?.total}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowTradeModal(false)}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmTrade}
                className={`flex-1 py-2 rounded-lg font-semibold text-white transition-colors ${
                  tradeConfirm?.type === 'BUY'
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-red-500 hover:bg-red-600'
                }`}
              >
                Confirm {tradeConfirm?.type}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Trade History */}
      {trades.length > 0 && (
        <div className="max-w-7xl mx-auto p-4 md:p-6 mt-4">
          <div className="bg-indigo-800/60 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/10">
            <h2 className="text-white text-lg md:text-xl font-bold mb-4">Trade History</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-gray-400 py-2 px-2">Type</th>
                    <th className="text-left text-gray-400 py-2 px-2">Amount</th>
                    <th className="text-left text-gray-400 py-2 px-2">Price</th>
                    <th className="text-left text-gray-400 py-2 px-2">Total</th>
                    <th className="text-left text-gray-400 py-2 px-2">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {trades.map((trade, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-indigo-700/30 transition-colors">
                      <td className="py-3 px-2">
                        <span className={`font-bold ${trade.type === 'BUY' ? 'text-green-400' : 'text-red-400'}`}>
                          {trade.type}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-white">{trade.amount} BTC</td>
                      <td className="py-3 px-2 text-white">{trade.price} BPL</td>
                      <td className="py-3 px-2 text-white font-semibold">{trade.total}</td>
                      <td className="py-3 px-2 text-gray-400">{trade.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}