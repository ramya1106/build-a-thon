import { useEffect, useState } from "react";
import "./index.css";

const CountdownTimer = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2026-01-27T23:59:59").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        setTime({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const Box = ({ value, label }) => (
    <div className="box-wrapper">
      <div className="box">{String(value).padStart(2, "0")}</div>
      <span className="label">{label}</span>
    </div>
  );

  return (
    <section className="countdown-section">

      <h2 className="title">COUNTDOWN TO REGISTER</h2>

      <div className="timer">
        <Box value={time.days} label="DAYS" />
        <span className="colon">:</span>
        <Box value={time.hours} label="HOURS" />
        <span className="colon">:</span>
        <Box value={time.minutes} label="MINUTES" />
        <span className="colon">:</span>
        <Box value={time.seconds} label="SECONDS" />
      </div>

      <div className="hurry">
        <span>HURRY UP!</span>
        <span className="active">HURRY UP!</span>
        <span>HURRY UP!</span>
      </div>
    </section>
  );
};

export default CountdownTimer;
