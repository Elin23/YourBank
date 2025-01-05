import "./FAQCardComponent.css";

export default function FAQCardComponent({ Qustion, Answer, index }) {
  return (
    <>
      <div className="MR-FAQ-Card">
        <span className="fs-20 fw-500" data-aos="fade-up" data-aos-delay={(index || 0) * 200}>{Qustion}</span>
        <div className="MR-line"></div>
        <p className="f-18 fw-300" data-aos="fade-up" data-aos-delay="400">{Answer}</p>
      </div>
    </>
  );
}
