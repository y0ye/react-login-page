import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";import './index.css'
import App from './App.tsx'
import { Dashboard } from './components/Dashboard.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="react-login-page/App.tsx" index element={<App />} />
      <Route path="react-login-page/Dashboard.tsx" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
  </StrictMode>
)
