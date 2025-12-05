import React, { useState } from 'react';
import { Heart, ArrowRight, Phone, TrendingUp, Code, Palette, Lightbulb, Edit, Book, DollarSign, Activity, User, Menu, X } from 'lucide-react';

export default function SocialFeed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      type: 'image',
      image: true,
      mainTitle: 'OnePay - Online Payment Processing Web App - Download from uihut.com',
      tags: ['payment', 'webapp', 'uikit'],
      author: 'Mansurul Haque',
      authorVerified: true,
      timeAgo: '1 week ago',
      views: '601,066',
      likes: '24,753',
      comments: '209'
    },
    {
      id: 2,
      type: 'crypto',
      icon: '₿',
      title: 'BTC',
      subtitle: 'Bitcoin',
      price: '$20,788',
      change: '+0.25%',
      mainTitle: 'Blockchain developer best practices on innovationchain',
      tags: ['finance', 'bitcoin', 'crypto'],
      author: 'Pavel Gvay',
      authorVerified: true,
      timeAgo: '3 weeks ago',
      views: '651,324',
      likes: '36,645',
      comments: '56'
    },
    {
      id: 3,
      type: 'crypto',
      icon: 'Ξ',
      title: 'ETH',
      subtitle: 'Ethereum',
      price: '$1,645',
      change: '+1.82%',
      mainTitle: 'Understanding smart contracts and their impact on decentralized finance',
      tags: ['ethereum', 'DeFi', 'smartcontracts'],
      author: 'Sarah Chen',
      authorVerified: true,
      timeAgo: '2 days ago',
      views: '423,891',
      likes: '28,432',
      comments: '167'
    },
    {
      id: 4,
      type: 'seo',
      mainTitle: 'The 4-step SEO framework that led to a 1000% increase in traffic. Let\'s talk about blogging and SEO...',
      tags: ['SEO', 'blogging', 'traffic'],
      author: 'AR Jakir',
      authorVerified: true,
      timeAgo: '3 days ago',
      views: '244,564',
      likes: '10,920',
      comments: '184'
    },
    {
      id: 5,
      type: 'crypto',
      icon: '◎',
      title: 'SOL',
      subtitle: 'Solana',
      price: '$24.56',
      change: '+3.45%',
      mainTitle: 'Solana\'s high-speed blockchain: A deep dive into performance optimization',
      tags: ['solana', 'blockchain', 'performance'],
      author: 'Mike Johnson',
      authorVerified: true,
      timeAgo: '5 days ago',
      views: '198,234',
      likes: '15,678',
      comments: '92'
    }
  ]);

  const [newPost, setNewPost] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCreatePost = () => {
    if (newPost.trim()) {
      const post = {
        id: Date.now(),
        type: 'text',
        mainTitle: newPost,
        tags: ['new'],
        author: 'You',
        authorVerified: false,
        timeAgo: 'Just now',
        views: '0',
        likes: '0',
        comments: '0'
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="min-h-screen bg-transparent">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 max-w-7xl mx-auto p-4 lg:p-6">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="lg:hidden mb-4 p-2 hover:bg-indigo-800/40 rounded-lg"
        >
          {sidebarOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>

        {/* Left Sidebar */}
        <div className={`${sidebarOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0 space-y-4`}>
          {/* Feed Filter */}
          <div className="bg-indigo-900/50 backdrop-blur-md rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-3 mb-3 bg-indigo-800/60 p-2 rounded-lg">
              <div className="w-6 h-6 bg-green-400 rounded flex items-center justify-center text-xs flex-shrink-0">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-white text-sm font-medium">Newest and Recent</div>
                <div className="text-gray-400 text-xs">Get the hottest topics</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-800/40 cursor-pointer">
              <div className="w-6 h-6 bg-yellow-400 rounded flex items-center justify-center text-xs flex-shrink-0">⭐</div>
              <div className="min-w-0">
                <div className="text-white text-sm">Popular of the day</div>
                <div className="text-gray-400 text-xs">Shots featured today by curators</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-800/40 cursor-pointer">
              <div className="w-6 h-6 bg-purple-400 rounded flex items-center justify-center text-xs flex-shrink-0">👥</div>
              <div className="min-w-0">
                <div className="text-white text-sm">Following <span className="text-xs">24</span></div>
                <div className="text-gray-400 text-xs">Explore from your favorite person</div>
              </div>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="bg-indigo-900/50 backdrop-blur-md rounded-xl p-4 border border-white/10">
            <h3 className="text-white font-semibold mb-3">Popular Tags</h3>
            <div className="space-y-2">
              {[
                { tag: '#javascript', icon: <Code className="w-4 h-4" /> },
                { tag: '#bitcoin', icon: <TrendingUp className="w-4 h-4" /> },
                { tag: '#design', icon: <Palette className="w-4 h-4" /> },
                { tag: '#innovation', icon: <Lightbulb className="w-4 h-4" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded hover:bg-indigo-800/40 cursor-pointer">
                  <div className="w-6 h-6 bg-yellow-500/20 rounded flex items-center justify-center text-yellow-400 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-white text-sm">{item.tag}</div>
                    <div className="text-gray-400 text-xs">12,345 Posted by this tag</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pinned Group */}
          <div className="bg-indigo-900/50 backdrop-blur-md rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-semibold">Pinned Group</h3>
              <ArrowRight className="w-4 h-4 text-white flex-shrink-0" />
            </div>
            <div className="space-y-2">
              {[
                { tag: '#bitcoin', icon: <TrendingUp className="w-4 h-4" /> },
                { tag: '#blogging', icon: <Edit className="w-4 h-4" /> },
                { tag: '#tutorial', icon: <Book className="w-4 h-4" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded hover:bg-indigo-800/40 cursor-pointer">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-indigo-700 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-white text-sm">{item.tag}</div>
                    <div className="text-gray-400 text-xs">20,345 Posted • Trending</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Create Post Section */}
          <div className="bg-indigo-800/40 backdrop-blur-md rounded-2xl p-4 md:p-6 mb-6 border border-white/10">
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-blue-400 rounded-full flex items-center justify-center text-xl md:text-2xl flex-shrink-0">
                
              </div>
              <input
                type="text"
                placeholder="Let's share what going on your mind..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCreatePost()}
                className="flex-1 bg-indigo-900/30 border border-white/20 rounded-lg px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 text-sm md:text-base"
              />
              <button
                onClick={handleCreatePost}
                className="bg-indigo-700 hover:bg-indigo-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors text-sm md:text-base flex-shrink-0"
              >
                Create
              </button>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="space-y-4 md:space-y-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-indigo-800/40 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/10 hover:bg-indigo-800/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-4 md:gap-4">
                  {/* Left Side - Card/Chart */}
                  {post.type === 'image' && (
                    <div className="bg-white rounded-2xl w-full md:w-36 h-36 flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-full h-full flex items-center justify-center">
                        <div className="text-4xl">💳</div>
                      </div>
                    </div>
                  )}

                  {post.type === 'crypto' && (
                    <div className="bg-white rounded-2xl p-4 w-full md:w-36 flex-shrink-0">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                          {post.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-sm">{post.title}</div>
                          <div className="text-xs text-gray-500">{post.subtitle}</div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <svg viewBox="0 0 100 40" className="w-full h-12">
                          <path
                            d="M 0,20 Q 10,10 20,15 T 40,12 Q 50,8 60,18 T 80,15 L 100,20"
                            fill="none"
                            stroke="#6366f1"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-lg">{post.price}</div>
                        <div className="text-green-500 text-sm font-medium">{post.change}</div>
                      </div>
                    </div>
                  )}

                  {post.type === 'seo' && (
                    <div className="bg-white rounded-2xl p-4 w-full md:w-36 flex-shrink-0">
                      <div className="flex flex-col gap-2 h-full justify-around">
                        <div className="flex gap-1 items-end">
                          <div className="w-7 h-16 bg-orange-200 rounded"></div>
                          <div className="w-7 h-24 bg-indigo-700 rounded"></div>
                          <div className="w-7 h-28 bg-indigo-700 rounded"></div>
                          <div className="w-7 h-12 bg-orange-500 rounded"></div>
                        </div>
                        <div className="flex justify-around text-xs text-gray-500">
                          <span>08</span>
                          <span>10</span>
                          <span>11</span>
                          <span>12</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Right Side - Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between gap-3 mb-3">
                      <h3 className="text-white text-base md:text-lg font-medium">{post.mainTitle}</h3>
                      <button className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                        <Heart className="w-5 h-5 text-white" />
                      </button>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-indigo-900/50 text-white text-xs px-3 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author and Stats */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 bg-orange-300 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-5 h-5 text-orange-800" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1">
                            <span className="text-white font-medium text-sm">{post.author}</span>
                            {post.authorVerified && (
                              <span className="text-blue-400">●</span>
                            )}
                          </div>
                          <div className="text-gray-400 text-xs">{post.timeAgo}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 md:gap-6 text-gray-300 text-xs sm:text-sm">
                        <span>{post.views} Views</span>
                        <span>{post.likes} Likes</span>
                        <span>{post.comments} comments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block w-full lg:w-72 flex-shrink-0 space-y-4">
          {/* Meetings */}
          <div className="bg-indigo-900/50 backdrop-blur-md rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-semibold">Meetings</h3>
              <ArrowRight className="w-4 h-4 text-white flex-shrink-0" />
            </div>
            <div className="space-y-3">
              {[
                { date: 'FEB 3', title: 'UIHUT - Crunchbase Company Profile...', time: '3:00 PM' },
                { date: 'FEB 3', title: 'Design Meetup USA | Dribbble', time: '7:00 PM' },
                { date: 'FEB 5', title: 'Meetup Brand Identity Design - Beha...', time: '9:00 AM' }
              ].map((meeting, idx) => (
                <div key={idx} className="bg-indigo-800/40 p-3 rounded-lg">
                  <div className="flex gap-3">
                    <div className="bg-indigo-700 text-white text-center rounded p-1 w-10 flex-shrink-0">
                      <div className="text-xs">{meeting.date.split(' ')[0]}</div>
                      <div className="text-lg font-bold">{meeting.date.split(' ')[1]}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-xs mb-1 line-clamp-2">{meeting.title}</div>
                      <div className="text-gray-400 text-xs">{meeting.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Podcasts */}
          <div className="bg-indigo-900/50 backdrop-blur-md rounded-xl p-4 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white font-semibold">Podcasts</h3>
              <ArrowRight className="w-4 h-4 text-white flex-shrink-0" />
            </div>
            <div className="space-y-3">
              {[
                { icon: <Edit className="w-5 h-5" />, title: 'Letting a Business end trading another Amzds Tragedy...', category: 'BUSINESS' },
                { icon: <Activity className="w-5 h-5" />, title: 'Mental Health as a founder and the Importance of community...', category: 'HEALTH' },
                { icon: <DollarSign className="w-5 h-5" />, title: 'Growing to $3.5k MRR in 1 year Jesse Hanley, TinyLab', category: 'BUSINESS' },
                { icon: <Heart className="w-5 h-5" />, title: 'Mental Health as a founder and the Importance of community', category: 'HEALTH' }
              ].map((podcast, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-800/40 cursor-pointer">
                  <div className="w-10 h-10 bg-white rounded flex items-center justify-center flex-shrink-0 text-indigo-700">
                    {podcast.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-xs mb-1 line-clamp-2">{podcast.title}</div>
                    <span className="bg-indigo-700 text-white text-xs px-2 py-0.5 rounded">{podcast.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ad Space */}
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-2">✕</div>
              <div className="text-gray-600 font-medium">250 x 500</div>
              <div className="text-gray-500 text-sm">Ad Space</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}