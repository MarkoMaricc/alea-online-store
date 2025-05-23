import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import StoreProvider from './store/StoreProvider';
import ThemeProvider from './theme/ThemeProvider';
import { AppLayout } from '../shared/layout/AppLayot';




function App() {


  
  return (
    <StoreProvider>
 <BrowserRouter>
 <ThemeProvider>
  <AppLayout>
    <AppRoutes />
    </AppLayout>
    </ThemeProvider>
  </BrowserRouter>
  </StoreProvider>
        
  );
}

export default App;
