import "./index.css";
import {
  FaGlobe,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <h3 className="footer-title">Connect With Us</h3>

          <div className="social-grid">
            <a href="https://gdg.community.dev/gdg-on-campus-narayana-engineering-college-nellore-india/" target="_blank" rel="noopener noreferrer">
              <FaGlobe /> <span>Website</span>
            </a>

            <a href="https://www.instagram.com/gdg_on_campus_necn" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> <span>Instagram</span>
            </a>

            <a href="https://www.linkedin.com/company/gdg-on-campus-necn" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /> <span>LinkedIn</span>
            </a>

            <a href="https://whatsapp.com/channel/0029Vau7I8D6buMOikydvg2I" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> <span>WhatsApp</span>
            </a>

            <a href="https://www.youtube.com/@GDG-On-Campus-NECN" target="_blank" rel="noopener noreferrer">
              <FaYoutube /> <span>YouTube</span>
            </a>

            <a href="mailto:gdgoncampusnecn@gmail.com">
              <FaEnvelope /> <span>E-Mail</span>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <a
            href="https://maps.google.com/?q=Narayana+Engineering+College+Nellore"
            target="_blank"
            rel="noopener noreferrer"
            className="map-card"
          >

            <iframe
              title="NECN"
              src="https://www.google.com/maps?q=Narayana+Engineering+College+Nellore&output=embed"
              loading="lazy"
            />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Buildathon · GDG On Campus NECN · Ramya Sree M
      </div>
    </footer>
  );
};

export default Footer;
