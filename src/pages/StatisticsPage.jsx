import React, { useEffect, useState } from 'react';
import { Trophy, Hash, TrendingUp, Award, Crown, Target } from 'lucide-react';
import { motion } from 'framer-motion';

function StatsCard({ icon, title, value, trend, color, delay }) {
  return (
    <motion.div 
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
    >
      <motion.div 
        className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 rounded-xl blur-2xl opacity-0 group-hover:opacity-20 transition duration-500"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative backdrop-blur-xl bg-black/20 p-6 rounded-xl border border-white/10 group-hover:border-violet-500/30 transition-all duration-500">
        <div className="flex items-center space-x-4">
          <motion.div 
            className="p-3 rounded-xl bg-violet-500/10"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            {React.cloneElement(icon, { 
              className: "text-violet-400",
              size: 32
            })}
          </motion.div>
          <div className="flex-1">
            <h3 className="text-lg font-medium text-gray-400 mb-1">{title}</h3>
            <div className="flex items-baseline space-x-2">
              <motion.p 
                className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: delay * 0.1 + 0.3 }}
              >
                {value}
              </motion.p>
              {trend && (
                <span className="text-sm text-gray-500">
                  {trend > 0 ? '+' : ''}{trend}%
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatisticsPage() {
  const [stats, setStats] = useState({
    bestScore: 0,
    gamesPlayed: 0,
    averageScore: 0,
    totalWords: 0,
    accuracy: 0,
    streak: 0
  });

  useEffect(() => {
    const updateStats = () => {
      const bestScore = parseInt(localStorage.getItem('bestScore') || '0');
      const gamesPlayed = parseInt(localStorage.getItem('gamesPlayed') || '0');
      const totalScore = parseInt(localStorage.getItem('totalScore') || '0');
      const totalWords = parseInt(localStorage.getItem('totalWords') || '0');
      const accuracy = parseInt(localStorage.getItem('accuracy') || '0');
      const streak = parseInt(localStorage.getItem('streak') || '0');
      
      const averageScore = gamesPlayed > 0 ? (totalScore / gamesPlayed).toFixed(1) : 0;

      setStats({
        bestScore,
        gamesPlayed,
        averageScore,
        totalWords,
        accuracy,
        streak
      });
    };

    updateStats();

    const interval = setInterval(updateStats, 1000);

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black">
      <div className="fixed inset-0">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full mix-blend-screen filter blur-3xl"
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
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full mix-blend-screen filter blur-3xl"
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
        <div className="max-w-6xl mx-auto py-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
              Statistics
            </h1>
            <p className="text-xl text-gray-400">Track your gaming progress</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatsCard
              icon={<Trophy />}
              title="Best Score"
              value={stats.bestScore}
              delay={0}
            />
            <StatsCard
              icon={<Hash />}
              title="Games Played"
              value={stats.gamesPlayed}
              delay={1}
            />
            <StatsCard
              icon={<TrendingUp />}
              title="Average Score"
              value={stats.averageScore}
              delay={2}
            />
            <StatsCard
              icon={<Target />}
              title="Total Words"
              value={stats.totalWords}
              delay={3}
            />
            <StatsCard
              icon={<Award />}
              title="Accuracy"
              value={`${stats.accuracy}%`}
              delay={4}
            />
            <StatsCard
              icon={<Crown />}
              title="Current Streak"
              value={stats.streak}
              delay={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticsPage;