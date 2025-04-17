import './LandingPage.css';
import { FaShieldAlt, FaUserShield, FaLock, FaUserCheck, FaHandshake } from 'react-icons/fa';

const TermsAndAgreement = () => {
  return (
    <div className="terms-page">
      <div className="terms-header" style={{
        opacity: 0,
        transform: 'translateY(20px)',
        animation: 'slideUpFade 500ms ease-out forwards'
      }}>
        <h1 className="shimmer-text">Terms and Agreement</h1>
        <p>Marian College of Baliuag, Inc Clinic System</p>
      </div>
      
      <div className="terms-container">
        <div className="terms-section feature-card" style={{
          animation: 'slideUpFade 400ms ease-out 200ms forwards',
          opacity: 0
        }}>
          <div className="section-header">
            <FaShieldAlt className="section-icon" />
            <h2>Data Privacy and Confidentiality</h2>
          </div>
          <p>
            Marian College of Baliuag is committed to protecting the privacy and confidentiality of all health information collected through this system. We strictly adhere to the following Philippine laws and regulations:
          </p>
          <ul>
            <li>Republic Act No. 10173 (Data Privacy Act of 2012)</li>
            <li>Republic Act No. 11032 (Ease of Doing Business and Efficient Government Service Delivery Act)</li>
            <li>Republic Act No. 11223 (Universal Health Care Act)</li>
          </ul>
        </div>

        <div className="terms-section feature-card" style={{
          animation: 'slideUpFade 400ms ease-out 300ms forwards',
          opacity: 0
        }}>
          <div className="section-header">
            <FaUserShield className="section-icon" />
            <h2>Data Usage and Purpose</h2>
          </div>
          <p>
            All health information collected through this system will be used solely for:
          </p>
          <ul>
            <li>Medical and health-related purposes within the school</li>
            <li>Emergency medical response and care</li>
            <li>Health monitoring and wellness programs</li>
            <li>Compliance with health and safety regulations</li>
          </ul>
        </div>

        <div className="terms-section feature-card" style={{
          animation: 'slideUpFade 400ms ease-out 400ms forwards',
          opacity: 0
        }}>
          <div className="section-header">
            <FaLock className="section-icon" />
            <h2>Data Protection Measures</h2>
          </div>
          <p>
            We implement strict security measures to protect your health information:
          </p>
          <ul>
            <li>Secure data encryption and storage</li>
            <li>Limited access to authorized personnel only</li>
            <li>Regular security audits and updates</li>
            <li>Strict confidentiality agreements with all staff</li>
          </ul>
        </div>

        <div className="terms-section feature-card" style={{
          animation: 'slideUpFade 400ms ease-out 500ms forwards',
          opacity: 0
        }}>
          <div className="section-header">
            <FaUserCheck className="section-icon" />
            <h2>Your Rights</h2>
          </div>
          <p>
            As a user of this system, you have the right to:
          </p>
          <ul>
            <li>Access your personal health information</li>
            <li>Request corrections to your health records</li>
            <li>Be informed about how your data is used</li>
            <li>File complaints regarding data privacy concerns</li>
          </ul>
        </div>

        <div className="terms-section feature-card" style={{
          animation: 'slideUpFade 400ms ease-out 600ms forwards',
          opacity: 0
        }}>
          <div className="section-header">
            <FaHandshake className="section-icon" />
            <h2>Consent</h2>
          </div>
          <p>
            By using this system, you acknowledge and agree to:
          </p>
          <ul>
            <li>The collection and processing of your health information</li>
            <li>The use of your data for medical and health-related purposes</li>
            <li>Compliance with all applicable laws and regulations</li>
            <li>Regular updates to your health information as needed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsAndAgreement; 