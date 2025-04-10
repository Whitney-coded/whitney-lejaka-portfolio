
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
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-background">
      <div className="relative w-16 h-16">
        <div className="blob w-32 h-32 -left-8 -top-8 opacity-60"></div>
        <Loader size={64} className="text-primary animate-spin" />
      </div>
      <h1 className="text-2xl font-bold modern-gradient">
        WHITNEY LEJAKA
      </h1>
      <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-150 ease-out"
          style={{ width: `${loadingProgress}%` }}
        />
      </div>
      <p className="text-muted-foreground text-sm">{loadingProgress}%</p>
    </div>
  );
};

export default LoadingScreen;
