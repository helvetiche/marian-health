import './LandingPage.css'
import chat from '../assets/icon/chat.svg'
import quick from '../assets/icon/quick.svg'
import exclusive from '../assets/icon/exclusive.svg'
function Features() {
  return (
    <div className="features-page">
      <div className="features-header">
        <h1>Marian Health Features</h1>
        <p>Discover how we can help you achieve better health outcomes</p>
      </div>
      <div className="features-container">
        <div className="feature-card">
          <div className="feature-icon"> <img src={chat} className='feature-icon' /></div>
          <h3>Real Time Connection</h3>
          <p>
            Secure and private chat with the school nurse for your health concerns.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"> <img src={quick} className='feature-icon' /></div>
          <h3>Quick Access</h3>
          <p>
           Quick access to your medical records and health information in case of emergency.
           </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"> <img src={exclusive} className='feature-icon' /></div>
          <h3>Exclusive Access</h3>
          <p>
            Exclusive access for Marian College of Baliuag Students and Faculty.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features 