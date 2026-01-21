import "./index.css";
import registrationQR from "../../assets/qr.svg";

const TicketRegistration = () => {
  return (
    <section className="ticket-section">
      <h2 className="ticket-title">GET YOUR TICKET</h2>

      <div className="ticket">
        <div class="ticket-left">
          <p class="small-label">NATIONAL LEVEL HACKATHON</p>

          <h1 class="event-title">BUILDATHON</h1>
          <p class="tagline">CONCEPT TO CREATION</p>

          <div class="meta-row">
            <div>
              <p class="meta-label">TEAM SIZE</p>
              <p class="meta-value">
                2–4 <span>Members</span>
              </p>
            </div>

            <div>
              <p class="meta-label">REGISTRATION FEE</p>
              <p class="meta-value highlight">
                ₹150 <span>Per Head</span>
              </p>
            </div>
          </div>

          <ul class="info">
            <li>Registrations end on 27-01-2026, 11:59 PM</li>
            <li>PPT submissions end on 28-01-2026, 5:00 PM</li>
          </ul>

          <hr />

          <p class="event-date">31st Jan – 1st Feb 2026</p>
        </div>

        <div className="ticket-divider"></div>

        <div className="ticket-right">
          <img src={registrationQR} alt="QR"/>
          <span>Scan to Register</span>
        </div>
      </div>

      <div className="cta">
        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSeaWkDYGsfjiqsPD3jtdzlF0YFUNoVe7QsYruNzaamhsSu0Mg/viewform",
              "_blank",
            )
          }
          className="cta-btn"
        >
          Click Here To Register
        </button>
      </div>
    </section>
  );
};

export default TicketRegistration;
