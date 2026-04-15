import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../app/globals.css'
import App from '../app/page.tsx'
import Settings from "@/components/settings";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Settings />
    <App />
  </StrictMode>,
)
