import "./index.css";

const MarqueeSeparator = ({ text = "★ BUILDATHON" }) => {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {Array(10).fill(text).join(" ")}
      </div>
    </div>
  );
};

export default MarqueeSeparator;
