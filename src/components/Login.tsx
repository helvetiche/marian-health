import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '/logo.png';
import { motion } from 'framer-motion';
import './Login.css';
import './LandingPage.css';
import loginimage from '../assets/login-image.png';
const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    console.log('Login attempt with:', { email: `${username}@mcb.edu.ph`, password });
    navigate('/');
  };

  return (
    <div className="landing-container">
      <motion.div 
        className="login-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="login-form-container feature-card"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="login-form-wrapper">

            <h2 className="shimmer-text login-title">
              <img src={logo} alt="Login" className='login-logo' />
              LOGIN
              </h2>
            <p className="login-subtitle">Start your journey with Marian Health, your online companion for health</p>
            
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Username</label>
                <div className="email-input-container">
                  <input
                    type="text"
                    id="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    required
                    className="email-input"
                  />
                  <span className="email-domain">@mcb.edu.ph</span>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                {error && <div className="error-message">{error}</div>}
              </div>

              <motion.button 
                type="submit" 
                className="login-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Login Now
              </motion.button>
            </form>
          </div>
          
          <div className="login-image-section">
            <img src={loginimage} alt="Login" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login; 