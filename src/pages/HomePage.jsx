  import React from 'react';
  import { Link } from 'react-router-dom';
  import { motion } from 'framer-motion';
  import { Play, Star, Trophy, Clock, Brain, Zap, Target, Award, BarChart2 } from 'lucide-react';

  function HomePage() {
    return (
      <div className="min-h-screen w-full bg-black">
        <div className="fixed inset-0">
          <div className="absolute inset-0">
            <motion.div 
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full mix-blend-screen filter blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute top-1/3 right-1/4 w-96 h-96 bg-fuchsia-600/30 rounded-full mix-blend-screen filter blur-3xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>

        <div className="relative">
          <motion.div 
            className="max-w-6xl mx-auto py-16 px-4 space-y-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div 
              className="text-center space-y-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 rounded-2xl blur-3xl opacity-20"
                  animate={{ 
                    opacity: [0.2, 0.3, 0.2],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <h1 className="relative text-7xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent pb-4">
                  Word Blast
                </h1>
              </div>
              
              <p className="text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Challenge your vocabulary in this fast-paced word game
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/game">
                  <button className="relative group px-12 py-6 overflow-hidden rounded-2xl">
                    <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 blur-lg opacity-40 group-hover:opacity-60 transition duration-500" />
                    <div className="relative flex items-center justify-center bg-black/50 backdrop-blur-xl px-12 py-6 rounded-xl border border-white/10 group-hover:border-violet-500/30 transition duration-500">
                      <Play className="mr-3 text-violet-400" />
                      <span className="text-xl font-semibold bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                        Start Game
                      </span>
                    </div>
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="relative group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500" />
                <div className="relative backdrop-blur-xl bg-black/20 p-8 rounded-2xl border border-white/10 group-hover:border-violet-500/30 transition-all duration-500">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="p-2 bg-violet-500/10 rounded-lg"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Brain className="w-8 h-8 text-violet-400" />
                      </motion.div>
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                        How to Play
                      </h2>
                    </div>
                    <ul className="space-y-4">
                      {[
                        { icon: Clock, text: "Type words containing the given sequence" },
                        { icon: Target, text: "Beat the timer to score points" },
                        { icon: Zap, text: "Don't repeat words" },
                        { icon: Trophy, text: "Aim for your highest score!" }
                      ].map((item, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-center gap-3 text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          <div className="p-2 bg-violet-500/10 rounded-lg">
                            <item.icon className="w-5 h-5 text-violet-400" />
                          </div>
                          {item.text}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="relative group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500" />
                <div className="relative backdrop-blur-xl bg-black/20 p-8 rounded-2xl border border-white/10 group-hover:border-violet-500/30 transition-all duration-500">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="p-2 bg-violet-500/10 rounded-lg"
                        whileHover={{ rotate: -180 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Star className="w-8 h-8 text-violet-400" />
                      </motion.div>
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                        Features
                      </h2>
                    </div>
                    <ul className="space-y-4">
                      {[
                        { icon: Zap, text: "Challenging sequences" },
                        { icon: Award, text: "Track your best score" },
                        { icon: BarChart2, text: "View detailed statistics" },
                        { icon: Target, text: "Responsive design" }
                      ].map((item, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-center gap-3 text-gray-400"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                        >
                          <div className="p-2 bg-violet-500/10 rounded-lg">
                            <item.icon className="w-5 h-5 text-violet-400" />
                          </div>
                          {item.text}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  export default HomePage;