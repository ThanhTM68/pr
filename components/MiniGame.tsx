import React, { useState } from 'react';

const MiniGame: React.FC = () => {
  const [score, setScore] = useState(0);

  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
        Cyber Clicker
      </h2>
      <p className="text-white/70 mb-8">Click the core to mine data bytes.</p>
      
      <div className="relative flex justify-center mb-8">
        <button 
          onClick={() => setScore(s => s + 1)}
          className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-purple-500/50 hover:scale-110 active:scale-95 transition-all duration-150 flex items-center justify-center border-4 border-white/20 z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 2v8"></path><path d="m4.93 10.93 1.41 1.41"></path><path d="M2 18h2"></path><path d="M20 18h2"></path><path d="m19.07 10.93-1.41 1.41"></path><path d="M22 22v.01"></path><path d="m16 6-4 4-4-4"></path><path d="M16 18a4 4 0 0 0-8 0"></path></svg>
        </button>
        <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-40 animate-pulse"></div>
      </div>

      <div className="bg-black/40 rounded-lg p-4 inline-block border border-white/10">
        <span className="text-gray-400 uppercase text-xs tracking-wider">Bytes Mined</span>
        <div className="text-4xl font-mono text-green-400">{score}</div>
      </div>
    </div>
  );
};

export default MiniGame;