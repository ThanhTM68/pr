import React from 'react';

const FloatingContact: React.FC = () => {
  return (
    <a 
      href="https://m.me/yourusername" // Replace with actual messenger link
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-6 right-6 z-50 group"
      aria-label="Contact on Messenger"
    >
      <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110">
        {/* Ping Animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-20 animate-ping"></span>
        
        {/* Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>

        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-2 py-1 bg-white/10 backdrop-blur-md rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Message Me
        </span>
      </div>
    </a>
  );
};

export default FloatingContact;