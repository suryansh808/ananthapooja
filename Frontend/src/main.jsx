import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
createRoot(document.getElementById('root')).render(
   
      <BrowserRouter>
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
    <App />
    </GoogleOAuthProvider>

  </StrictMode>
  </BrowserRouter>,
    
)
