import "./JobCardComponent.css";

export default function JobCardComponent({
  Title,
  location,
  Department,
  jobDescription,
  Requirements,
}) {
  return (
    <>
      <div className="MR-JobCardContainer ">
        <div className="MR-JobCard-Title">
          <h3 className="fs-30">{Title}</h3>
          <div className="MR-JobCard-LocationDepartment">
            <span className="fw-300 f-18">Location: {location}</span>
            <span className="fw-300 f-18">Department: {Department}</span>
          </div>
        </div>
        <div className="MR-AboutrReq">
          <div className="MR-JobCard-subtitle">
            <h4 className="fs-24">About This Job</h4>
            <p className="f-18 fw-300">{jobDescription}</p>
          </div>
          <div className="MR-JobCard-subtitle">
            <h4 className="fs-24">Requirements & Qualifications</h4>
            <ul className="fw-300 f-18">
              {Array.isArray(Requirements) && Requirements.map((req, index) => (
                <li key={index}>
                  <img
                    src="./../../src/assets/imgs/careers icons/Icon (3).png"
                    alt="icon"
                  />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <button className="f-18">Apply Now</button>
        </div>
      </div>
    </>
  );
}