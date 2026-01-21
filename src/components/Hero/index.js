import "./index.css";
import buildathonLogo from "../../assets/buildathon-logo.png";
import {  MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section">
     
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left column */}
          <div className="hero-left">
            <div className="badge">
              GDG ON CAMPUS NECN × NECN CODING CLUB
            </div>


              <p className="date">
                <span>31st Jan – 1st Feb</span> • Friday – Saturday
              </p>

            <div className="stats">
              <div className="stat">
                <p className="stat-value">₹50,000+</p>
                <p className="stat-label">PRIZE POOL</p>
              </div>

              <div className="divider" />

              <div className="stat">
                <p className="stat-value small">2–4</p>
                <p className="stat-label">TEAM SIZE</p>
              </div>
            </div>

            <div className="venue">
              <MapPin/>
              <div>
                <p className="venue-name">
                Narayana Engineering College (Autonomous)
              </p>
              <p className="venue-place">Nellore, Andhra Pradesh</p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="hero-right">
            <div className="logo-wrapper">
              <div className="logo-glow" />
              <img src={buildathonLogo} alt="Buildathon Logo" />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="hero-description">
          <h2>CONCEPT TO CREATION</h2>
          <p>
            Join us for an electrifying 24-hour hackathon where innovation meets
            execution. Transform your groundbreaking ideas into working
            prototypes, collaborate with brilliant minds, and compete for
            amazing prizes. This is your stage to build, learn, and shine!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
