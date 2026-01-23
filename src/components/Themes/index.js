import "./index.css";

const Themes = () => {
  const domains = [
    "Artificial Intelligence and Machine Learning",
    "Web Application and Mobile Development",
    "Smart Cities and Urban Solutions",
    "Health Care and Wellness",
    "Sustainability and Green Technology",
    "Cyber Security and Blockchain",
    "Social Innovation and Rural Development",
    "Education Technology",
    "Open Innovation",
  ];

  return (
    <section className="themes-section">
      <h2 className="themes-title">DOMAINS & AREAS FOR HACKATHON</h2>
      <p className="themes-subtitle">
        Participants can choose any of the following domains for their problem statements
      </p>

      <div className="themes-grid">
        {domains.map((domain) => (
          <div key={domain} className="theme-card">
            {domain}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Themes;
