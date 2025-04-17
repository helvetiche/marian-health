import './LandingPage.css'
import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate();

  return (
    <main className="hero-section">
      <div className="hero-content">
        <h1 className="shimmer-text">Marian Health</h1>
        <p className="tagline">
          Your caring, always-online companion, supporting your health journey with smart tools, helpful insights, and personalized wellness guidance anytime, anywhere.
        </p>
        <div className="hero-buttons">
          <button className="primary-button" onClick={() => navigate('/terms')}>Terms and Agreement</button>
          <button className="primary-button" onClick={() => navigate('/login')}>Log In</button>
        </div>
      </div>
      
      <div className="hero-image">
        
      </div>
    </main>
  )
}

export default Hero 