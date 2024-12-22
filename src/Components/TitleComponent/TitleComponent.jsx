import "./TitleComponent.css";
export default function TitleComponent({ titleLeft, span, titleRight, desc }) {
  return (
    <div className="AM-title-comp ">
      <h3 className="title  fw-500  fs-48 ">
        {titleLeft}
        <span className="span">{span}</span>
        {titleRight}
      </h3>
      <p className="desc desc-product fw-300 f-18">{desc}</p>
    </div>
  );
}
