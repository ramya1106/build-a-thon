import "./index.css";

const prizes = [
  {
    label: "SECOND",
    amount: "₹15,000",
    img: "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1768818069/2nd_jxmgpi.png",
    order: 1,
    size: "small",
  },
  {
    label: "FIRST",
    amount: "₹25,000",
    img: "https://res.cloudinary.com/dn9sdbv1o/image/upload/v1768818068/1st_oqkzbp.png",
    order: 2,
    size: "large",
  },
  {
    label: "THIRD",
    amount: "₹10,000",
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
            <p className="prize-amount">{p.amount}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prizes;
