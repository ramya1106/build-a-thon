import "./index.css";

const prizes = [
  {
    label: "SECOND",
    img: "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1768818069/2nd_jxmgpi.png",
    order: 1,
    size: "small",
  },
  {
    label: "FIRST",
    img: "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1768818068/1st_oqkzbp.png",
    order: 2,
    size: "large",
  },
  {
    label: "THIRD",
    img: "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1768818068/3rd_lmfe6t.png",
    order: 3,
    size: "small",
  },
];

const Prizes = () => {
  return (
    <section className="prizes-section">
      <h2 className="prizes-title">PRIZES</h2>

      <div className="prizes-row">
        {prizes.map((p) => (
          <div
            key={p.label}
            className={`prize-card ${p.size}`}
            style={{ order: p.order }}
          >
            <img src={p.img} alt={p.label} />
            <p className="prize-label">{p.label}</p>
          </div>
        ))}
      </div>
      <p className="prizes-description">Exciting cash prizes for Top 3 teams!</p>
    </section>
  );
};

export default Prizes;
