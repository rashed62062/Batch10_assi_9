import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Router';
import AuthProvider from './AuthProvider/AuthProvider';
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>

 <AuthProvider>
   <RouterProvider router={router} />
   <ToastContainer />
 </AuthProvider>
  
  </StrictMode>
);