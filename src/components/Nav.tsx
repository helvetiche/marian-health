import { Link, useLocation } from 'react-router-dom'
import './LandingPage.css'

function Nav() {
  const location = useLocation()

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" className="logo-image" alt="Marian Health Logo" />
        </Link>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className={location.pathname === '/features' ? 'active' : ''}>
              Features
            </Link>
          </li>
          <li>
            <Link to="/terms" className={location.pathname === '/terms' ? 'active' : ''}>
              Terms and Agreement
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav 