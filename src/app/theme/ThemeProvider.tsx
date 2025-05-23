import React, { useEffect } from 'react';
import { useAppSelector } from '../hooks/hooks';


const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useAppSelector((state) => state.theme.current);

  useEffect(() => {
    document.body.className = ''; 
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;