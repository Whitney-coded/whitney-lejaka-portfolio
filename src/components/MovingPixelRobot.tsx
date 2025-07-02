
import React from 'react';

interface MovingPixelRobotProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const MovingPixelRobot = ({ className = '', size = 'md' }: MovingPixelRobotProps) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <div className="pixel-robot animate-float">
        {/* Robot Container */}
        <div className="relative w-full h-full">
          {/* Head */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/5 h-2/5 bg-cyber-neon border-2 border-cyber-neon animate-pulse">
            {/* Eyes */}
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyber-dark-blue animate-pulse"></div>
            <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-cyber-dark-blue animate-pulse"></div>
            {/* Antenna */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-cyber-magenta"></div>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyber-magenta rounded-full animate-ping"></div>
          </div>
          
          {/* Body */}
          <div className="absolute top-2/5 left-1/2 transform -translate-x-1/2 w-4/5 h-2/5 bg-cyber-neon/80 border-2 border-cyber-neon">
            {/* Chest Panel */}
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-cyber-dark-blue border border-cyber-neon/50">
              <div className="w-full h-full bg-gradient-to-r from-cyber-neon/20 to-transparent animate-pulse"></div>
            </div>
          </div>
          
          {/* Arms */}
          <div className="absolute top-1/2 -left-1 w-3 h-4 bg-cyber-neon/60 border border-cyber-neon animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 -right-1 w-3 h-4 bg-cyber-neon/60 border border-cyber-neon animate-bounce" style={{ animationDelay: '0.7s' }}></div>
          
          {/* Legs */}
          <div className="absolute bottom-0 left-1/3 w-2 h-3 bg-cyber-neon/60 border border-cyber-neon animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute bottom-0 right-1/3 w-2 h-3 bg-cyber-neon/60 border border-cyber-neon animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
        
        {/* Glowing Effect */}
        <div className="absolute inset-0 bg-cyber-neon/20 blur-sm animate-pulse"></div>
        
        {/* Movement Trail */}
        <div className="absolute inset-0 animate-ping opacity-30">
          <div className="w-full h-full border-2 border-cyber-neon/30 bg-cyber-neon/10"></div>
        </div>
      </div>
      
      {/* Crypto Data Stream Effect */}
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs text-cyber-neon font-mono opacity-70 animate-pulse">
        ₿ $ Ξ
      </div>
      
      {/* Base Platform */}
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-cyber-neon/50 to-transparent animate-pulse"></div>
    </div>
  );
};

export default MovingPixelRobot;
