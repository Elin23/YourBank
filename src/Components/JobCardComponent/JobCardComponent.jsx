import "./JobCardComponent.css";
import Icon3 from "../../assets/imgs/careers_icons/icon3.png";


export default function JobCardComponent({
  Title,
  location,
  Department,
  jobDescription,
  Requirements,
}) {
  return (
    <>
      <div className="MR-JobCardContainer" data-aos="fade">
        <div className="MR-JobCard-Title">
          <h3 className="fs-30" data-aos="fade-right">{Title}</h3>
          <div className="MR-JobCard-LocationDepartment">
            <span className="fw-300 f-18" data-aos="fade-right">Location: {location}</span>
            <span className="fw-300 f-18" data-aos="fade-right">Department: {Department}</span>
          </div>
        </div>
        <div className="MR-AboutrReq">
          <div className="MR-JobCard-subtitle" data-aos="fade-right">
            <h4 className="fs-24">About This Job</h4>
            <p className="f-18 fw-300">{jobDescription}</p>
          </div>
          <div className="MR-JobCard-subtitle">
            <h4 className="fs-24">Requirements & Qualifications</h4>
            <ul className="fw-300 f-18">
              {Array.isArray(Requirements) && Requirements.map((req, index) => (
                <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <img
                    src={Icon3}
                    alt="icon"
                  />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <button className="f-18" data-aos="flip-right" data-aos-delay="500">Apply Now</button>
        </div>
      </div>
    </>
  );
}