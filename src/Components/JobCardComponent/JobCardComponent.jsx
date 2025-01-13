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
      {/* Container for the entire job card */}
      <div className="MR-jobCardContainer" data-aos="fade">

        {/* Title and basic job info */}
        <div className="MR-jobCardTitle">
          <h3 className="fs-30" data-aos="fade-right">
            {Title}
          </h3>

          {/* Location and Department info */}

          <div className="MR-jobCardLocationDepartment">
            <span className="fw-300 f-18" data-aos="fade-right">
              Location: {location}
            </span>
            <span className="fw-300 f-18" data-aos="fade-right">
              Department: {Department}
            </span>
          </div>
        </div>

        {/* About the job and requirements */}
        <div className="MR-aboutReqContainer">
          <div className="MR-jobCardSubtitle" data-aos="fade-right">
            <h4 className="fs-24">About This Job</h4>
            <p className="f-18 fw-300">{jobDescription}</p>
          </div>
          {/* Requirements & qualifications section */}

          <div className="MR-jobCardSubtitle">
            <h4 className="fs-24">Requirements & Qualifications</h4>
            <ul className="fw-300 f-18">
              {Array.isArray(Requirements) &&
                Requirements.map((req, index) => (
                  <li
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <img src={Icon3} alt="icon" />
                    {req}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Apply button */}

        <div>
          <button className="f-18" data-aos="flip-right" data-aos-delay="500">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
}
