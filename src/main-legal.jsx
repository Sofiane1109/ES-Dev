import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MentionsLegales from './pages/MentionsLegales.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MentionsLegales />
  </StrictMode>,
)
