import "./JobCardComponent.css";
import Icon3 from "../../assets/imgs/careers_icons/icon3.png";
// import companyLogo from "../../assets/imgs/logo.png";
// import { jsPDF } from "jspdf";

export default function JobCardComponent({
  Title,
  location,
  Department,
  jobDescription,
  Requirements,
}) {
  // const handleApply = () => {
  //   // Retrieve user data from localStorage
  //   const storedUser = JSON.parse(localStorage.getItem("user") || "{}"); // Default to empty object if null
  //   const firstName = storedUser.firstName || "First Name";
  //   const lastName = storedUser.lastName || "Last Name";
  //   const email = storedUser.email || "Email";
  //   const phone = storedUser.phone || "Phone Number";

  //   const doc = new jsPDF();

  //   // Add company logo
  //   const imgData = companyLogo; 
  //   doc.addImage(imgData, "PNG", 5, 5, 25, 10);

  //   // Title and header
  //   doc.setFontSize(20);
  //   doc.setTextColor(40, 40, 100);
  //   doc.text("Job Application Form", 70, 30);

  //   // Job details
  //   doc.setFontSize(16);
  //   doc.setTextColor(0, 0, 0);
  //   doc.text("Position: " + Title, 10, 50);
  //   doc.text("Location: " + location, 10, 60);
  //   doc.text("Department: " + Department, 10, 70);

  //   // Job description
  //   doc.setFontSize(14);
  //   doc.setTextColor(40, 40, 100);
  //   doc.text("About This Job:", 10, 90);
  //   doc.setFontSize(12);
  //   doc.setTextColor(0, 0, 0);
  //   doc.text(jobDescription, 10, 100, { maxWidth: 190 });

  //   // Requirements
  //   doc.setFontSize(14);
  //   doc.setTextColor(40, 40, 100);
  //   doc.text("Requirements & Qualifications:", 10, 130);
  //   if (Array.isArray(Requirements)) {
  //     Requirements.forEach((req, index) => {
  //       doc.setTextColor(0, 0, 0);
  //       doc.text(`- ${req}`, 10, 140 + index * 10);
  //     });
  //   }

  //   // Applicant information
  //   doc.setFontSize(16);
  //   doc.setTextColor(40, 40, 100);
  //   doc.text("Applicant Information", 10, 190);

  //   doc.setFontSize(12);
  //   doc.setTextColor(0, 0, 0);
  //   doc.text(`First Name: ${firstName}`, 10, 200);
  //   doc.text(`Last Name: ${lastName}`, 10, 210);
  //   doc.text(`Email: ${email}`, 10, 220);
  //   doc.text(`Phone: ${phone}`, 10, 230);
  //   doc.text("Resume Link: _____________________", 10, 240);
  //   doc.text("Cover Letter: ____________________", 10, 250);

  //   doc.save(`${Title}_Application_Form.pdf`);
  // };

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
