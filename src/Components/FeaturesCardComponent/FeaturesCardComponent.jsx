import "./FeaturesCardComponent.css"

export default function FeaturesCardComponent({ title, img, content }) {
  return (
    <>
      <div className="features-card p-50"  >
        <div className="card-title">
          <span className="fw-400"> {title} </span>
          <img src={img} alt="arrow icon" />
        </div>
        <p className="f-18 fw-300"> {content} </p>
      </div>
    </>
  )
}
