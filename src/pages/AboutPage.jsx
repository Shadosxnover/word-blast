import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

function AboutPage() {
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
              About Word Blast
            </motion.h1>

            <motion.div 
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500" />
              <div className="relative backdrop-blur-xl bg-black/20 p-8 rounded-2xl border border-white/10 group-hover:border-violet-500/30 transition-all duration-500">
                <motion.p 
                  className="mb-6 text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Word Blast is a fast-paced word game inspired by the popular party game "Bomb Party." It challenges players to quickly think of words containing specific letter sequences, helping to improve vocabulary and quick thinking skills.
                </motion.p>
                
                <motion.p 
                  className="mb-8 text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  This project was created as a single-player version of the game, allowing players to practice and improve their skills on their own time.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    Contact
                  </h2>
                  <p className="text-gray-300 mb-4">
                    If you have any questions, suggestions, or feedback, please feel free to reach out to us at:
                  </p>
                  <motion.div 
                    className="flex items-center"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-2 bg-violet-500/10 rounded-full mr-3">
                      <Mail className="text-violet-400" size={20} />
                    </div>
                    <a 
                      href="mailto:contact@wordblast.com" 
                      className="text-violet-400 hover:text-fuchsia-400 transition-colors duration-300"
                    >
                      contact@wordblast.com
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;