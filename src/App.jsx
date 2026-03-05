import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GswPage from './pages/GswPage'
import HackathonPage from './pages/HackathonPage'

export const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfULqufxsVu_acVmQiun4mzuBZYWJMG-Ol0LdY_eTbIpkpWoQ/viewform'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HackathonPage />} />
        <Route path="/gsw" element={<GswPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
