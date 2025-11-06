import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppSettingsContext } from './AppSettingsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppSettingsContext>
        <App />
      </AppSettingsContext>
    </BrowserRouter>
  </StrictMode>
)
