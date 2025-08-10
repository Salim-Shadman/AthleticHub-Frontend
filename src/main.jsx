import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import router from './router/router.jsx';
import { RouterProvider } from 'react-router';
import AuthProvider from './contexts/AuthContext/AuthProvider.jsx';
import ThemeProvider from './contexts/ThemeContext.jsx'; 

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
   
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);