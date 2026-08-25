import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PolitiqueConfidentialite />
  </StrictMode>,
)
