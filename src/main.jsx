import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css' 
// rest the default css
import './global.css'
// global styling 
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
