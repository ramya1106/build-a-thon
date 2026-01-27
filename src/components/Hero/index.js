import "./index.css";
import buildathonLogo from "../../assets/buildathon-logo.png";
import { MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left column */}
          <div className="hero-left">
            <div className="badge">GDG ON CAMPUS NECN × NECN CODING CLUB</div>

            <p className="date">
              <span>31st Jan – 1st Feb</span> • Saturday – Sunday
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
              <MapPin />
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
            Build-a-thon is an intensive, hands-on event, a 24-hour hackathon
            format, designed to foster innovation, rapid prototyping, and skill
            development in emerging technologies. Unlike traditional hackathons
            that may focus solely on code, build-a-thons emphasize creating
            tangible, functional, "see, touch, and feel" projects, including
            hardware, embedded systems, and AI applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
