import "./index.css";
import { User } from "lucide-react";

const Team = () => {
  const patrons = [
    { name: "Mr. Y. Vinay Kumar", role: "Chief Patron", designation: "Management Secretary" },
    { name: "Dr. B. Dattatraya Sarma", role: "Patron", designation: "Director, NEPC" },
    { name: "Dr. V. Raviprasad", role: "Co-Patron", designation: "Principal, NECN" },
  ];

  const hods = [
    { name: "Dr. C. Rajendra", designation: "HOD-CSM" },
    { name: "Dr. P. Penchalaiah", designation: "HOD-CSE" },
    { name: "Dr. C. Ramamohan", designation: "GDG Mentor & HOD-CAI & CSD" },
  ];

  const facultyCoordinator = {
    name: "Mr. Y. Rajashekhar",
    designation: "Faculty Co-Ordinator",
    phone: "6305241392",
  };

  const studentCoordinators = [
    { name: "J. Vatsalya", designation: "GDGoC Lead", phone: "6301343146" },
    { name: "Sk Sameer", designation: "Networking Lead", phone: "7799525757" },
  ];

  const gdgTeam = [
    { name: "Rama Murthy P", role: "Technical Lead" },
    { name: "Ramya Sree M", role: "Web/App Dev Lead" },
    { name: "Md Sheema Sadiya", role: "Competitive Programming Lead" },
    { name: "Rahul Siddarth", role: "Designing Lead" },
    { name: "Vishnu Priya R", role: "PR / Outreach Lead" },
    { name: "Vency Raj", role: "Photography Lead" },
    { name: "N Rupu Chandu", role: "AI/ML Lead" },
    { name: "Jhansi Lakshmi", role: "Executive Lead" },
  ];

  return (
    <section className="team-section">
      <h2 className="team-title">OUR TEAM</h2>

      <div className="team-block">
        <h3 className="team-subtitle">PATRONS</h3>
        <div className="patrons-grid">
          {patrons.map(p => (
            <div key={p.name} className="team-card large">
              <div className="avatar"><User size={36} /></div>
              <h4>{p.name}</h4>
              <p className="role">{p.role}</p>
              <p className="designation">{p.designation}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="team-block">
        <h3 className="team-subtitle">CSE & Allied HODs</h3>
        <div className="hod-row">
          {hods.map(h => (
            <div key={h.name} className="team-card">
              <div className="avatar small"><User size={22} /></div>
              <h4>{h.name}</h4>
              <p className="designation">{h.designation}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="team-block">
        <div className="coordinator-row">
          <div>
            <h3 className="team-subtitle">Faculty Co-Ordinator</h3>
            <div className="team-card">
              <div className="avatar small"><User size={22} /></div>
              <h4>{facultyCoordinator.name}</h4>
              <p className="designation">{facultyCoordinator.designation}</p>
              <p className="designation">Ph: {facultyCoordinator.phone}</p>
            </div>
          </div>

          <div>
            <h3 className="team-subtitle">Student Co-Ordinators</h3>
            <div className="student-grid">
              {studentCoordinators.map(s => (
                <div key={s.name} className="team-card">
                  <div className="avatar small"><User size={22} /></div>
                  <h4>{s.name}</h4>
                  <p className="designation">{s.designation}</p>
                  <p className="designation">Ph: {s.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="team-block">
        <h3 className="team-subtitle">GDG Team</h3>
        <div className="team-grid">
          {gdgTeam.map(m => (
            <div key={m.name} className="team-card">
              <div className="avatar small"><User size={22} /></div>
              <h4>{m.name}</h4>
              <p className="designation">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
