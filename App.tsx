import React, { useState, useEffect } from 'react';
import Background from './components/Background.tsx';
import Avatar from './components/Avatar.tsx';
import MusicPlayer from './components/MusicPlayer.tsx';
import FloatingContact from './components/FloatingContact.tsx';
import Fireworks from './components/Fireworks.tsx';
import MiniGame from './components/MiniGame.tsx';
import { ViewState, MenuItem } from './types.ts';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  // Sync hash with view state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && Object.values(ViewState).includes(hash as ViewState)) {
        setCurrentView(hash as ViewState);
      } else {
        setCurrentView(ViewState.HOME);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Init
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: ViewState) => {
    window.location.hash = view;
  };

  const menuItems: MenuItem[] = [
    {
      id: ViewState.FIREWORKS,
      label: 'Fireworks',
      icon: '✨',
      description: 'Interactive visual experience'
    },
    {
      id: ViewState.GAME,
      label: 'Mini Game',
      icon: '🎮',
      description: 'Play a quick game'
    },
    {
      id: ViewState.ABOUT,
      label: 'About',
      icon: '👤',
      description: 'More about this portal'
    }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      <Background />
      <Avatar />
      <MusicPlayer />
      <FloatingContact />

      {/* Main Content Area */}
      <main className="absolute inset-0 flex items-center justify-center p-4 z-10 pointer-events-none">
        
        {/* Glass Container - Only pointer events inside */}
        <div className={`
          relative w-full max-w-2xl bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 md:p-10 transition-all duration-500
          pointer-events-auto
          ${currentView !== ViewState.HOME ? 'bg-black/60' : ''}
        `}>
          
          {/* Back Button (if not home) */}
          {currentView !== ViewState.HOME && (
            <button 
              onClick={() => navigateTo(ViewState.HOME)}
              className="absolute top-4 left-4 p-2 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
            </button>
          )}

          {/* View Content */}
          <div className="min-h-[300px] flex flex-col justify-center">
            
            {currentView === ViewState.HOME && (
              <div className="space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="text-center space-y-2">
                  <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                    Welcome to the Nexus
                  </h1>
                  <p className="text-lg text-white/60">Select a module to begin</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => navigateTo(item.id)}
                      className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-300 text-left hover:-translate-y-1"
                    >
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-300 transition-colors">{item.label}</h3>
                      <p className="text-xs text-white/50">{item.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentView === ViewState.FIREWORKS && (
              <div className="text-center animate-in fade-in duration-500">
                <h2 className="text-2xl font-bold mb-4">Visualizer Active</h2>
                <p className="text-white/60 mb-6">Click anywhere on the screen (outside this box) to launch fireworks.</p>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-sm text-white/50">
                   The effect is running in the background layer.
                </div>
              </div>
            )}

            {currentView === ViewState.GAME && (
               <div className="animate-in fade-in slide-in-from-right duration-500">
                 <MiniGame />
               </div>
            )}

            {currentView === ViewState.ABOUT && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-500 text-center">
                <h2 className="text-3xl font-bold text-blue-300">About Me</h2>
                <p className="text-white/80 leading-relaxed max-w-md mx-auto">
                  I am a creative developer passionate about building interactive web experiences. 
                  This portal demonstrates the power of modern web technologies like React and Tailwind CSS 
                  without any backend dependencies.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs border border-blue-500/30">React</span>
                  <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs border border-teal-500/30">Tailwind</span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs border border-purple-500/30">TypeScript</span>
                </div>
              </div>
            )}

          </div>
        </div>
      </main>

      {/* Global Background Effects rendered based on state */}
      {currentView === ViewState.FIREWORKS && <Fireworks />}
    </div>
  );
};

export default App;