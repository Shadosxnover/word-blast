import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function RuleItem({ children, delay }) {
  return (
    <motion.li 
      className="flex items-start mb-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: delay * 0.1, duration: 0.5 }}
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.3 }}
        className="p-1 bg-violet-500/10 rounded-full mr-3 flex-shrink-0"
      >
        <CheckCircle className="text-violet-400" size={20} />
      </motion.div>
      <span className="text-gray-300">{children}</span>
    </motion.li>
  );
}

function RulesPage() {
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <motion.h1 
              className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              How to Play Word Blast
            </motion.h1>

            <motion.div 
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500" />
              <div className="relative backdrop-blur-xl bg-black/20 p-8 rounded-2xl border border-white/10 group-hover:border-violet-500/30 transition-all duration-500">
                <ol className="space-y-6">
                  <RuleItem delay={1}>
                    The game will provide you with a random letter sequence (e.g., "ion" or "ph").
                  </RuleItem>
                  <RuleItem delay={2}>
                    You must type a valid English word containing that sequence before the timer runs out.
                  </RuleItem>
                  <RuleItem delay={3}>
                    A word is valid if:
                    <ul className="list-disc list-inside ml-8 mt-3 space-y-2 text-gray-400">
                      <li>It contains the given sequence</li>
                      <li>It is spelled correctly</li>
                      <li>It has not been used before in the current game session</li>
                    </ul>
                  </RuleItem>
                  <RuleItem delay={4}>
                    You have 10 seconds to enter a valid word for each sequence.
                  </RuleItem>
                  <RuleItem delay={5}>
                    If you fail to respond in time or enter an invalid word, the game ends.
                  </RuleItem>
                  <RuleItem delay={6}>
                    Your score is the number of valid words you enter before the game ends.
                  </RuleItem>
                  <RuleItem delay={7}>
                    Try to beat your best score and improve your average!
                  </RuleItem>
                </ol>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default RulesPage;