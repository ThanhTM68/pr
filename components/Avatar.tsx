import React from 'react';

const Avatar: React.FC = () => {
  return (
    <div className="absolute top-6 left-6 z-50 group">
      <div className="relative w-16 h-16 md:w-24 md:h-24">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
        
        {/* Image Container */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/30 group-hover:border-blue-400 transition-colors duration-300 group-hover:scale-110 transform ease-out">
          <img 
            src="https://picsum.photos/200/200" 
            alt="User Avatar" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Status Indicator */}
        <div className="absolute bottom-1 right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-slate-900"></div>
      </div>
    </div>
  );
};

export default Avatar;