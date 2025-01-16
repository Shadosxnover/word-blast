import React, { useState, useEffect } from 'react';
import GameCard from '../components/GameCard';
import { getRandomSequence, validateWord } from '../utils/wordUtils';
import { motion, AnimatePresence } from 'framer-motion';

const GAME_DURATION = 10;

function GamePage() {
  const [sequence, setSequence] = useState('');
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [isGameActive, setIsGameActive] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [usedWords, setUsedWords] = useState(new Set());
  const [isInvalid, setIsInvalid] = useState(false);

  // ... (keep all the existing state management and game logic functions) ...
  const startNewGame = () => {
    const newSequence = getRandomSequence();
    setSequence(newSequence);
    setInput('');
    setScore(0);
    setTimeLeft(GAME_DURATION);
    setIsGameActive(true);
    setGameStarted(false);
    setUsedWords(new Set());
    setIsInvalid(false);
  };

  useEffect(() => {
    startNewGame();
    const savedBestScore = localStorage.getItem('bestScore');
    if (savedBestScore) setBestScore(parseInt(savedBestScore));
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && isGameActive && gameStarted) {
      const timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && isGameActive) {
      endGame();
    }
  }, [timeLeft, isGameActive, gameStarted]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (!gameStarted && value.length > 0) {
      setGameStarted(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isGameActive || !input.trim()) return;

    const word = input.trim().toLowerCase();

    if (usedWords.has(word)) {
      setIsInvalid(true);
      setInput('');
      return;
    }

    const isValid = validateWord(word, sequence);

    if (isValid) {
      setScore(prev => prev + 1);
      setUsedWords(prev => new Set([...prev, word]));
      const newSequence = getRandomSequence();
      setSequence(newSequence);
      setInput('');
      setIsInvalid(false);
      setTimeLeft(GAME_DURATION);
    } else {
      setInput('');
      setIsInvalid(true);
    }
  };

  const endGame = () => {
    setIsGameActive(false);
    setGameStarted(false);

    // Update all statistics
    const currentBestScore = parseInt(localStorage.getItem('bestScore') || '0');
    const currentGamesPlayed = parseInt(localStorage.getItem('gamesPlayed') || '0');
    const currentTotalScore = parseInt(localStorage.getItem('totalScore') || '0');
    const currentTotalWords = parseInt(localStorage.getItem('totalWords') || '0');

    if (score > currentBestScore) {
      localStorage.setItem('bestScore', score.toString());
    }
    localStorage.setItem('gamesPlayed', (currentGamesPlayed + 1).toString());
    localStorage.setItem('totalScore', (currentTotalScore + score).toString());
    localStorage.setItem('totalWords', (currentTotalWords + score).toString());
    
    const accuracy = Math.round((score / (usedWords.size + (input ? 1 : 0))) * 100);
    localStorage.setItem('accuracy', accuracy.toString());
    
    const currentStreak = parseInt(localStorage.getItem('streak') || '0');
    const newStreak = score > 0 ? currentStreak + 1 : 0;
    localStorage.setItem('streak', newStreak.toString());
  };

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
            className="w-full max-w-lg mx-auto"
          >
            <div className="backdrop-blur-xl bg-black/20 rounded-2xl border border-white/10 shadow-2xl p-6 space-y-6">
              <GameCard
                sequence={sequence}
                score={score}
                bestScore={bestScore}
                timeLeft={timeLeft}
              />

              <motion.form
                onSubmit={handleSubmit}
                layout
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-xl blur-md" />
                <motion.input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  className={`
                    w-full p-4 rounded-xl
                    bg-black/30 backdrop-blur-sm
                    text-gray-100 placeholder-gray-400
                    border focus:outline-none
                    focus:ring-2 focus:ring-violet-500/50
                    transition-all duration-300
                    relative z-10 text-lg
                    ${isInvalid ? 'border-red-500' : 'border-violet-500/30'}
                  `}
                  placeholder="Type your word here"
                  disabled={!isGameActive}
                  autoFocus
                  animate={isInvalid ? { x: [-10, 10, -10, 10, 0] } : {}}
                  onAnimationComplete={() => setIsInvalid(false)}
                />
              </motion.form>

              <AnimatePresence>
                {!isGameActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-xl blur-md" />
                    <div className="relative backdrop-blur-sm bg-black/30 p-8 rounded-xl border border-white/10">
                      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                        Game Over!
                      </h2>
                      <p className="mb-6 text-xl text-gray-300">
                        Final Score: {' '}
                        <span className="font-bold text-violet-400">{score}</span>
                      </p>
                      <motion.button
                        onClick={startNewGame}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="
                          w-full px-6 py-3 
                          bg-gradient-to-r from-violet-600 to-fuchsia-600
                          hover:from-violet-500 hover:to-fuchsia-500
                          text-white font-medium rounded-lg 
                          shadow-lg shadow-violet-500/25
                          transition-all duration-200
                          relative group
                        "
                      >
                        <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative">Play Again</span>
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default GamePage;