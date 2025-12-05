"use client"

import { useState } from "react"
import { Heart, Share2, Search } from "lucide-react"
import type { JSX } from "react/jsx-runtime" // Import JSX to fix the lint error

interface TabType {
  name: string
}

interface NFTItem {
  id: number
  owner: string
  views: string
  price: string
  change: string
}

interface Seller {
  id: number
  name: string
  verified: boolean
}

export default function NFTMarketplace(): JSX.Element {
  const [followedUsers, setFollowedUsers] = useState<Set<number>>(new Set())
  const [likedNFTs, setLikedNFTs] = useState<Set<number>>(new Set())
  const [activeTab, setActiveTab] = useState<string>("All")

  const tabs: string[] = ["All", "TOP NFTs", "Celebrities", "Gaming", "Sport", "Music", "Crypto"]

  const nfts: NFTItem[] = [
    { id: 1, owner: "ArtCrypto", views: "0.2K ERA", price: "0.5bn-0.1bn", change: "-22.50%" },
    { id: 2, owner: "ArtCrypto", views: "0.2K ERA", price: "0.5bn-0.1bn", change: "-22.50%" },
    { id: 3, owner: "ArtCrypto", views: "0.2K ERA", price: "0.5bn-0.1bn", change: "-22.50%" },
    { id: 4, owner: "ArtCrypto", views: "0.2K ERA", price: "0.5bn-0.1bn", change: "-22.50%" },
    { id: 5, owner: "ArtCrypto", views: "0.2K ERA", price: "0.3bn", change: "" },
    { id: 6, owner: "ArtCrypto", views: "0.2K ERA", price: "0.3bn", change: "" },
    { id: 7, owner: "ArtCrypto", views: "0.2K ERA", price: "0.3bn", change: "" },
    { id: 8, owner: "ArtCrypto", views: "0.2K ERA", price: "0.3bn", change: "" },
  ]

  const topSellers: Seller[] = [
    { id: 1, name: "Sam Lee", verified: true },
    { id: 2, name: "Jami Donald", verified: false },
    { id: 3, name: "Iris Lane", verified: false },
    { id: 4, name: "Barry Allen", verified: false },
    { id: 5, name: "Jennifer Foster", verified: false },
    { id: 6, name: "Sam Lee", verified: false },
    { id: 7, name: "Jami Donald", verified: false },
    { id: 8, name: "Iris Lane", verified: false },
    { id: 9, name: "Barry Allen", verified: false },
    { id: 10, name: "Jennifer Foster", verified: false },
  ]

  const toggleFollow = (userId: number): void => {
    setFollowedUsers((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(userId)) {
        newSet.delete(userId)
      } else {
        newSet.add(userId)
      }
      return newSet
    })
  }

  const toggleLike = (nftId: number): void => {
    setLikedNFTs((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(nftId)) {
        newSet.delete(nftId)
      } else {
        newSet.add(nftId)
      }
      return newSet
    })
  }

  return (
    <div className="min-h-screen bg-transparent p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with Tabs */}
        <div className="bg-transparent rounded-xl p-4 md:p-5 mb-8 border border-transparent">
          <div className="flex items-center justify-between gap-2 md:gap-4 flex-wrap">
            <div className="flex items-center gap-2 md:gap-3 flex-wrap">
              {tabs.map((tab: string) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-indigo-900 text-white border border-indigo-400/50"
                      : "bg-indigo-800/70 text-white hover:bg-indigo-700/70 border border-indigo-600/50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search and Buttons */}
            <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:flex-initial md:w-56">
                <input
                  type="text"
                  placeholder="Search items here..."
                  className="w-full bg-indigo-900/50 border border-indigo-400/30 rounded-lg px-3 md:px-4 py-2 text-white placeholder-indigo-300/60 text-xs md:text-sm focus:outline-none focus:border-indigo-400/60"
                />
                <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-300/60" />
              </div>
              <button className="bg-indigo-800 hover:bg-indigo-700 text-white px-4 md:px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition border border-indigo-600/50">
                Search
              </button>
            </div>

            {/* Right Side Buttons */}
            <div className="flex gap-2 md:gap-3">
              <button className="bg-indigo-800 hover:bg-indigo-700 text-white px-4 md:px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition border border-indigo-600/50">
                My NFTs
              </button>
              <button className="bg-indigo-800 hover:bg-indigo-700 text-white px-4 md:px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition border border-indigo-600/50">
                Collections
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* NFT Gallery */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
              {nfts.map((nft: NFTItem) => (
                <div key={nft.id} className="group cursor-pointer">
                  {/* NFT Card Container */}
                  <div className="bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    {/* NFT Card Image */}
                    <div className="relative overflow-hidden rounded-xl mb-4 bg-gradient-to-br from-orange-300 via-purple-500 to-cyan-500 aspect-square hover:scale-105 transition-transform duration-300 shadow-lg">
                      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                        {/* Orange to Pink wave */}
                        <path d="M0,30 Q25,10 50,20 T100,30 L100,0 L0,0 Z" fill="#ff8c42" opacity="0.8" />
                        {/* Purple wave */}
                        <path d="M0,50 Q25,40 50,50 T100,50 L100,30 Q50,40 0,30 Z" fill="#a855f7" opacity="0.8" />
                        {/* Cyan wave */}
                        <path d="M0,100 Q25,70 50,80 T100,100 L100,50 Q50,60 0,50 Z" fill="#06b6d4" opacity="0.9" />
                      </svg>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        <button
                          onClick={() => toggleLike(nft.id)}
                          className="bg-white/20 backdrop-blur-sm rounded-full p-2.5 hover:bg-white/30 transition border border-white/30"
                        >
                          <Heart
                            size={18}
                            className={likedNFTs.has(nft.id) ? "fill-red-500 text-red-500" : "text-white"}
                          />
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm rounded-full p-2.5 hover:bg-white/30 transition border border-white/30">
                          <Share2 size={18} className="text-white" />
                        </button>
                      </div>

                      {/* Avatars Strip */}
                      <div className="absolute bottom-3 left-3 flex gap-1">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red-400 to-pink-400 border-2 border-white flex items-center justify-center text-xs overflow-hidden font-bold text-white">
                          S
                        </div>
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white flex items-center justify-center text-xs overflow-hidden font-bold text-white">
                          T
                        </div>
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 border-2 border-white flex items-center justify-center text-xs overflow-hidden font-bold text-white">
                          J
                        </div>
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 border-2 border-white flex items-center justify-center text-xs overflow-hidden font-bold text-white">
                          M
                        </div>
                      </div>
                    </div>

                    {/* NFT Info */}
                    <div className="space-y-2">
                      <h3 className="text-white font-bold text-base">{nft.owner}</h3>

                      <div className="flex items-center gap-1.5">
                        <span className="text-yellow-300 font-semibold text-xs">◆</span>
                        <span className="text-yellow-300 font-semibold text-sm">{nft.price}</span>
                        <span className="text-gray-400 text-xs ml-auto">1 of 321</span>
                      </div>

                      <div className="pt-2 border-t border-white/20">
                        <div className="flex items-center justify-between">
                          <button className="bg-white text-slate-800 px-4 py-1.5 rounded-full text-xs font-bold hover:bg-gray-100 transition">
                            3h 50m 2s left
                          </button>
                          <span className="text-red-400 font-bold text-sm">Place a bid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Sellers Sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-transparent rounded-3xl p-4 border border-indigo-400/20 sticky top-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-white font-bold text-lg">Top Sellers</h2>
                <span className="text-red-400 font-bold text-xs">View all</span>
              </div>

              <div className="space-y-2 max-h-screen overflow-y-auto">
                {topSellers.map((seller: Seller) => {
                  const avatarColors = [
                    "from-green-400 to-emerald-500",
                    "from-yellow-400 to-amber-500",
                    "from-pink-400 to-rose-500",
                    "from-purple-400 to-indigo-500",
                    "from-blue-400 to-cyan-500",
                  ]
                  const colorIndex = seller.id % avatarColors.length

                  return (
                    <div
                      key={seller.id}
                      className="flex items-center justify-between group hover:bg-indigo-600/30 p-2 rounded-lg transition-all duration-200"
                    >
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <div
                          className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatarColors[colorIndex]} flex items-center justify-center text-sm flex-shrink-0 border-2 border-white/30 shadow-lg font-bold text-white`}
                        >
                          {seller.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <p className="text-white text-xs font-bold truncate">{seller.name}</p>
                          <p className="text-indigo-200 text-xs truncate">
                            @{seller.name.toLowerCase().replace(" ", "")}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleFollow(seller.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 whitespace-nowrap flex-shrink-0 border ${
                          followedUsers.has(seller.id)
                            ? "bg-indigo-600/40 text-indigo-200 border-indigo-400/40 hover:bg-indigo-600/60"
                            : "bg-indigo-900 text-white border-indigo-700 hover:bg-indigo-800"
                        }`}
                      >
                        {followedUsers.has(seller.id) ? "Following" : "Follow"}
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
