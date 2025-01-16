import React from 'react';
import { Clock, Trophy, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

function GameCard({ sequence, score, bestScore, timeLeft }) {
  const scorePercentage = Math.min((score / bestScore) * 100, 100) || 0;
  
  const getTimeColor = (time) => {
    if (time > 10) return 'text-green-400';
    if (time > 5) return 'text-amber-400';
    return 'text-rose-400';
  };

  return (
    <motion.div 
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500" />
      
      <div className="relative backdrop-blur-xl bg-black/20 p-8 rounded-2xl shadow-2xl transition-all duration-500 border border-white/10 hover:border-violet-500/30">
        <div className="relative mb-10">
          <motion.div 
            className="absolute -top-4 left-0 text-xs font-medium text-violet-300/70 uppercase tracking-wider flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-1 bg-violet-500/10 rounded-lg">
              <Zap size={12} className="text-violet-400" />
            </div>
            Current Sequence
          </motion.div>
          
          <motion.div 
            className="text-6xl font-bold text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent filter drop-shadow-lg">
              {sequence}
            </span>
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div 
            className="relative group/card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-xl blur-md" />
            <div className="relative backdrop-blur-xl bg-black/20 p-6 rounded-xl border border-white/10 group-hover/card:border-violet-500/30 transition-colors duration-300">
              <div className="flex justify-between items-center">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="p-2 bg-violet-500/10 rounded-lg"
                      whileHover={{ scale: 1.1, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Target size={22} className="text-violet-400" />
                    </motion.div>
                    <span className="text-2xl font-semibold bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
                      Score: {score}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="p-2 bg-amber-500/10 rounded-lg"
                      whileHover={{ scale: 1.1, rotate: -180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Trophy size={20} className="text-amber-400" />
                    </motion.div>
                    <span className="text-sm text-gray-400">Best Score: {bestScore}</span>
                  </div>
                </div>

                <motion.div 
                  className="w-32 h-32 relative"
                  initial={{ rotate: -90 }}
                  animate={{ rotate: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="48"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-gray-800/30"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="48"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 48}`}
                      strokeDashoffset={`${2 * Math.PI * 48 * (1 - scorePercentage / 100)}`}
                      className="text-violet-500"
                      initial={{ strokeDashoffset: 2 * Math.PI * 48 }}
                      animate={{ strokeDashoffset: `${2 * Math.PI * 48 * (1 - scorePercentage / 100)}` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.span 
                      className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      {Math.round(scorePercentage)}%
                    </motion.span>
                    <span className="text-xs text-gray-400">progress</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative group/timer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 rounded-xl blur-md" />
            <div className="relative backdrop-blur-xl bg-black/20 p-6 rounded-xl border border-white/10 group-hover/timer:border-violet-500/30 transition-colors duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="p-2 bg-violet-500/10 rounded-lg"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Clock className="text-violet-400" size={22} />
                  </motion.div>
                  <span className="text-base text-gray-400 font-medium">Time Remaining</span>
                </div>
                <div className={`text-5xl font-bold tabular-nums tracking-tight ${getTimeColor(timeLeft)}`}>
                  {timeLeft}
                  <span className="text-base ml-1 text-gray-400 font-normal">sec</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default GameCard;