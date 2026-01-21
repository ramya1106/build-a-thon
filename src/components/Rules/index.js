import "./index.css";

const Rules = () => {
  return (
    <section className="rules-section">
      <h2 className="rules-title">Rules & Guidelines</h2>

      <div className="rules-grid">
        {/* Hackathon Execution Rules */}
        <div className="rules-card">
          <h3>Hackathon Execution Rules</h3>
          <ul>
            <li>The hackathon duration is 24 continuous hours.</li>
            <li>Teams must develop their solution only during the hackathon period.</li>
            <li>Any code, design, or implementation done before the event must be declared.</li>
            <li>Teams are allowed to use open-source libraries, public APIs, frameworks, and SDKs.</li>
            <li>Internet access will be provided; teams may carry offline resources if needed.</li>
          </ul>
        </div>

        {/* Code of Conduct */}
        <div className="rules-card">
          <h3>Code of Conduct</h3>
          <ul>
            <li>Participants must maintain professional and ethical behavior.</li>
            <li>Any form of misconduct, harassment, or indiscipline will lead to disqualification.</li>
            <li>Participants must respect judges, mentors, organizers, and fellow teams.</li>
            <li>Damage to college property will attract strict disciplinary action.</li>
          </ul>
        </div>

        {/* General Rules */}
        <div className="rules-card">
          <h3>General Rules</h3>
          <ul>
            <li>Participants must bring their own laptops, chargers, and accessories.</li>
            <li>The organizers reserve the right to modify rules or schedules if required.</li>
            <li>Organizers are not responsible for loss of personal belongings.</li>
            <li>Participation implies acceptance of all rules and regulations.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Rules;
