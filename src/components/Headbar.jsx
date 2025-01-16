import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Play, BarChart2, Book, Info, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Headbar() {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/game', icon: Play, label: 'Play' },
    { path: '/statistics', icon: BarChart2, label: 'Stats' },
    { path: '/rules', icon: Book, label: 'Rules' },
    { path: '/about', icon: Info, label: 'About' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/40 via-purple-900/40 to-fuchsia-900/40 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-400/10 via-transparent to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="md:hidden flex justify-end py-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-violet-100 hover:text-white transition-colors relative"
          >
            <div className="absolute inset-0 bg-white/10 rounded-lg blur-md" />
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          <motion.ul
            layout
            className={`
              md:flex md:h-20 md:items-center md:justify-center
              ${isMenuOpen ? 'block' : 'hidden'}
              md:block backdrop-blur-md
              transition-all duration-300 ease-in-out
              relative z-10 pb-4 md:pb-0
            `}
          >
            {navItems.map((item, index) => {
              const active = isActive(item.path);
              const hovered = hoveredItem === item.path;
              const Icon = item.icon;

              return (
                <motion.li 
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative md:mx-2"
                >
                  <Link
                    to={item.path}
                    className={`
                      flex items-center px-6 py-3 md:py-2 rounded-xl
                      transition-all duration-300 ease-in-out
                      ${active ? 'text-white' : 'text-violet-200'}
                      hover:text-white
                      group w-full md:w-auto
                      relative
                    `}
                    onMouseEnter={() => setHoveredItem(item.path)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div
                      className={`
                        absolute inset-0 rounded-xl
                        transition-all duration-300
                        ${active ? 'bg-white/15 shadow-lg backdrop-blur-sm border border-white/20' : 
                          hovered ? 'bg-white/10 border border-white/10' : 'bg-transparent'}
                      `}
                    />

                    <div
                      className={`
                        absolute inset-0 rounded-xl
                        transition-opacity duration-300
                        ${active || hovered ? 'opacity-100' : 'opacity-0'}
                        bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20
                        blur-sm
                      `}
                    />

                    <motion.div
                      animate={hovered ? {
                        y: [0, -4, 0],
                        transition: { duration: 2, repeat: Infinity }
                      } : {}}
                    >
                      <Icon
                        size={20}
                        className={`
                          mr-3 transition-all duration-300
                          ${hovered ? 'scale-110 text-violet-300' : 'scale-100'}
                          ${active ? 'text-violet-200' : ''}
                        `}
                      />
                    </motion.div>

                    <span className="relative font-medium tracking-wide text-sm">
                      {item.label}
                    </span>

                    {active && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50"
                        animate={{
                          scale: [1, 1.2, 1],
                          transition: { duration: 2, repeat: Infinity }
                        }}
                      />
                    )}

                    <div
                      className={`
                        absolute inset-0 rounded-xl
                        transition-opacity duration-1000
                        ${hovered ? 'opacity-100' : 'opacity-0'}
                        bg-gradient-to-r from-transparent via-white/5 to-transparent
                        bg-[length:200%_100%]
                        animate-shine
                      `}
                    />
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Headbar;