import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Features from './components/Features'
import TermsAndAgreement from './components/TermsAndAgreement'
import Nav from './components/Nav'
import Particles from './components/Particles'
import Login from './components/Login'
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Particles />
        <Nav />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/terms" element={<TermsAndAgreement />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App
