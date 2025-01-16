import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Headbar from './components/Headbar';
import GamePage from './pages/GamePage';
import StatisticsPage from './pages/StatisticsPage';
import RulesPage from './pages/RulesPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 -left-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-gray-900/0 pointer-events-none" />

        {/* Content */}
        <div className="relative">
          <Headbar />
          <main className="w-full min-h-screen px-0 py-8 relative">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/game" element={<GamePage />} />
              <Route path="/statistics" element={<StatisticsPage />} />
              <Route path="/rules" element={<RulesPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
      </div>
    </Router>
  );
}

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;
document.head.appendChild(styleSheet);

export default App;
