import "./JobCardComponent.css";
import Icon3 from "../../assets/imgs/careers_icons/icon3.png";
import { jsPDF } from "jspdf";

export default function JobCardComponent({
  Title,
  location,
  Department,
  jobDescription,
  Requirements,
}) {
  const handleApply = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Job Application Form", 10, 10);

    doc.setFontSize(16);
    doc.text("Position: " + Title, 10, 30);
    doc.text("Location: " + location, 10, 40);
    doc.text("Department: " + Department, 10, 50);

    doc.setFontSize(14);
    doc.text("About This Job:", 10, 70);
    doc.setFontSize(12);
    doc.text(jobDescription, 10, 80, { maxWidth: 190 });

    doc.setFontSize(14);
    doc.text("Requirements & Qualifications:", 10, 110);
    if (Array.isArray(Requirements)) {
      Requirements.forEach((req, index) => {
        doc.text(`- ${req}`, 10, 120 + index * 10);
      });
    }

    doc.setFontSize(16);
    doc.text("Applicant Information", 10, 150);

    doc.setFontSize(12);
    doc.text("Name: ____________________________", 10, 170);
    doc.text("Email: ____________________________", 10, 180);
    doc.text("Phone: ____________________________", 10, 190);
    doc.text("Resume Link: _____________________", 10, 200);
    doc.text("Cover Letter: ____________________", 10, 210);

    doc.save(`${Title}_Application_Form.pdf`);
  };

  return (
    <>
      <div className="MR-jobCardContainer" data-aos="fade">
        <div className="MR-jobCardTitle">
          <h3 className="fs-30" data-aos="fade-right">
            {Title}
          </h3>
          <div className="MR-jobCardLocationDepartment">
            <span className="fw-300 f-18" data-aos="fade-right">
              Location: {location}
            </span>
            <span className="fw-300 f-18" data-aos="fade-right">
              Department: {Department}
            </span>
          </div>
        </div>

        <div className="MR-aboutReqContainer">
          <div className="MR-jobCardSubtitle" data-aos="fade-right">
            <h4 className="fs-24">About This Job</h4>
            <p className="f-18 fw-300">{jobDescription}</p>
          </div>
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

        <div>
          <button
            className="f-18"
            data-aos="flip-right"
            data-aos-delay="500"
            onClick={handleApply}
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
}
