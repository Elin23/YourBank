import "./JobCardComponent.css";

export default function JobCardComponent({
  Title,
  location,
  Department,
  jobDescription,
  Req1,
  Req2,
  Req3,
  Req4,
  Req5,
}) {
  return (
    <>

      <div className=" fw-300 f-18 MR-JobCard-Title">
        <h3 className="fs-30">{Title}</h3>
        <span>Loction: {location}</span>
        <span>Department: {Department}</span>
      </div>
      <div>
        <h4 className="fs-24">About This Job</h4>
        <p className="f-18 fw-300">{jobDescription}</p>
      </div>
      <div>
        <h4>Requirements & Qualifications</h4>
        <ul className="fw-300 f-18">
          <li>
            <img
              src="./../../src/assets/imgs/careers icons/Icon (3).png"
              alt="icon"
            />
            {Req1}
          </li>
          <li>
            <img
              src="./../../src/assets/imgs/careers icons/Icon (3).png"
              alt="icon"
            />
            {Req2}
          </li>
          <li>
            <img
              src="./../../src/assets/imgs/careers icons/Icon (3).png"
              alt="icon"
            />
            {Req3}
          </li>
          <li>
            <img
              src="./../../src/assets/imgs/careers icons/Icon (3).png"
              alt="icon"
            />
            {Req4}
          </li>
          <li>
            <img
              src="./../../src/assets/imgs/careers icons/Icon (3).png"
              alt="icon"
            />
            {Req5}
          </li>
        </ul>
        <button className="f-18">Apply Now</button>
      </div>
    </>
  );
}
