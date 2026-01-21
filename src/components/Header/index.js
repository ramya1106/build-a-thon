import { useState } from "react";
import { Menu, X } from "lucide-react";
import buildathonLogo from "../../assets/buildathon-logo.png";
import "./index.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        <div
          className="nav-logo"
          onClick={() => scrollToSection("hero")}
        >
          <img src={buildathonLogo} alt="Buildathon Logo" />
        </div>

        <nav className="nav-links">
          <span onClick={() => scrollToSection("about")}>About</span>
          <span onClick={() => scrollToSection("registration")}>Registration</span>

          <a
            href="https://docs.google.com/presentation/d/1baMjpenFKEHsNFtPaHHRRc2-D_OqDgHd/edit?usp=drivesdk&ouid=117259257861356106665&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
          >
            PPT Template
          </a>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          <span onClick={() => scrollToSection("about")}>About</span>
          <span onClick={() => scrollToSection("registration")}>Registration</span>

          <a
            href="https://docs.google.com/presentation/d/1baMjpenFKEHsNFtPaHHRRc2-D_OqDgHd/edit?usp=drivesdk&ouid=117259257861356106665&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            PPT Template
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
