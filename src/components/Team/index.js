import './index.css';
import { User } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    { name: 'Mr. Y. Rajashekhar', role: 'Faculty Co-Ordinator' },
    { name: 'Dr. C. Rajendra', role: 'HOD-CSM' },
    { name: 'Dr. P. Penchalaiah', role: 'HOD-CSE' },
    { name: 'Dr. C. Ramamohan', role: 'Mentor & HOD-CAI' },
    { name: 'J. Vatsalya', role: 'GDGoC Lead' },
    { name: 'Rama Murthy P', role: 'Technical Lead'},
    { name: 'Ramya Sree M', role: 'Web/App Dev. Lead'},
    { name: 'Md Sheema Sadiya', role: 'Competitive Prog Lead'},
    { name: 'Rahul Siddarth', role: 'Designing Lead'},
    { name: 'Vishnu Priya R', role: 'PR/Out Reach Lead'},
    { name: 'vency raj', role: 'Photography Lead'},
    { name: 'N Rupu Chandu', role: 'AI/ML Lead'},
    { name: 'Sk Sameer', role: 'Social-Network Lead'},
    { name: 'Jhansi Lakshmi', role: 'Executive Lead'},
  ];

  const patrons = [
    { name: 'Mr. Y. Vinay Kumar', role: 'Chief Patron', designation: 'Management Secretary' },
    { name: 'Dr. B. Dattatraya Sarma', role: 'Patron', designation: 'Director, NEPC' },
    { name: 'Dr. V. Raviprasad', role: 'Co-Patron', designation: 'Principal, NECN' },
  ];

  return (
    <section className="team-section">
      <h2 className="team-title">OUR TEAM</h2>

      {/* Patrons */}
      <div className="team-block">
        <h3 className="team-subtitle">PATRONS</h3>
        <div className="patrons-grid">
          {patrons.map((patron) => (
            <div key={patron.name} className="team-card large">
              <div className="avatar">
                <User size={36} />
              </div>
              <h4>{patron.name}</h4>
              <p className="role">{patron.role}</p>
              <p className="designation">{patron.designation}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Coordinators & HODs */}
      <div className="team-block">
        <h3 className="team-subtitle">COORDINATORS & HODs</h3>
        <div className="members-grid">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-card small">
              <div className="avatar small">
                <User size={22} />
              </div>
              <h4>{member.name}</h4>
              <p className="designation">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
