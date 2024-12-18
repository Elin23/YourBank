import "./ProductCardComponent.css";
export default function ProductCardComponent({ data }) {
  return (
    <div className={data.className}>
      <div className="border-icon">
        <div className="icon">
          <img src={data.icon} alt={data.alt} />
        </div>
      </div>
      <h3 className="title fw-400 fs-24">{data.title}</h3>
      <p className="desc fw-300 f-18">{data.desc}</p>
    </div>
  );
}
