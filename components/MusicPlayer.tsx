import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player/youtube';
import { isValidYouTubeUrl } from '../utils/youtube.ts';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=jfKfPfyJRdk'); // Default Lofi
  const [inputUrl, setInputUrl] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Auto-play workaround: often browsers block autoplay until interaction
  // We can try to auto-play if the user clicks anywhere in the app, controlled by parent usually, 
  // but here we just manage local state.

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!hasInteracted) setHasInteracted(true);
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(e.target.value);
  };

  const loadUrl = () => {
    if (isValidYouTubeUrl(inputUrl)) {
      setUrl(inputUrl);
      setIsPlaying(true);
      setInputUrl('');
      setIsExpanded(false);
    } else {
      alert("Invalid YouTube URL");
    }
  };

  return (
    <div className="absolute top-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Player Container */}
      <div className={`
        flex items-center gap-3 p-3 rounded-2xl 
        bg-black/40 backdrop-blur-md border border-white/10 
        transition-all duration-300 shadow-xl
        ${isExpanded ? 'w-80' : 'w-auto'}
      `}>
        {/* Hidden Player for Audio */}
        <div className="hidden">
           <ReactPlayer 
              url={url}
              playing={isPlaying}
              volume={0.5}
              width="0"
              height="0"
              loop={true}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
           />
        </div>

        {/* Controls */}
        <button 
          onClick={handlePlayPause}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-105 active:scale-95"
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
          ) : (
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          )}
        </button>

        {/* Info / Expander */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-white/80 truncate max-w-[100px]">Music Player</span>
             <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-white/50 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </button>
          </div>
          
           {/* Visualizer Bar (Fake) */}
           <div className="flex gap-0.5 h-3 mt-1 items-end overflow-hidden">
             {[...Array(10)].map((_, i) => (
                <div key={i} className={`w-1 bg-blue-400 rounded-t-sm ${isPlaying ? 'animate-pulse' : 'h-1'}`} style={{ height: isPlaying ? `${Math.random() * 100}%` : '20%', animationDelay: `${i * 0.1}s`}}></div>
             ))}
           </div>
        </div>
      </div>

      {/* Expandable URL Input */}
      {isExpanded && (
         <div className="w-80 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 animate-in slide-in-from-top-2 fade-in duration-300">
           <div className="flex gap-2">
             <input 
              type="text" 
              placeholder="Paste YouTube URL..." 
              value={inputUrl}
              onChange={handleUrlChange}
              className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-sm text-white placeholder-white/40 focus:outline-none focus:border-blue-500"
             />
             <button 
              onClick={loadUrl}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded-lg text-xs font-bold transition-colors"
             >
               LOAD
             </button>
           </div>
         </div>
      )}
    </div>
  );
};

export default MusicPlayer;