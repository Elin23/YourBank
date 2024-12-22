import "./FAQCardComponent.css";

export default function FAQCardComponent({ Qustion, Answer }) {
  return (
    <>
      <div className="MR-FAQ-Card">
        <span className="fs-20 fw-500">{Qustion}</span>
        <div className="MR-line"></div>
        <p className="f-18 fw-300">{Answer}</p>
      </div>
    </>
  );
}
