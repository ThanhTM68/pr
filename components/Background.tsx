import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>
      
      {/* Background Image */}
      <div 
        className="w-full h-full bg-cover bg-center animate-pulse"
        style={{
          backgroundImage: `url('https://picsum.photos/1920/1080?grayscale&blur=2')`,
          animation: 'pulse 15s cubic-bezier(0.4, 0, 0.6, 1) infinite' 
        }}
      >
        {/* Optional CSS Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
      </div>
    </div>
  );
};

export default Background;