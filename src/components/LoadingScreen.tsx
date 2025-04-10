
import React, { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';

const LoadingScreen = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  useEffect(() => {
    // Simulate loading process
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cyber-dark-blue light:bg-white gap-4">
      <div className="relative flex items-center justify-center">
        <Loader size={48} className="text-cyber-neon light:text-cyber-neon-light animate-spin" />
      </div>
      <h1 className="text-2xl font-mono text-cyber-neon light:text-cyber-neon-light animate-pulse">
        INITIALIZING PORTFOLIO
      </h1>
      <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-cyber-neon light:bg-cyber-neon-light transition-all duration-150 ease-out"
          style={{ width: `${loadingProgress}%` }}
        />
      </div>
      <p className="text-foreground/70 text-sm">{loadingProgress}%</p>
    </div>
  );
};

export default LoadingScreen;
