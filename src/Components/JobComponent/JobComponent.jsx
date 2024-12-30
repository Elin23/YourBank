import "./JobComponent.css";
import JobCardComponent from "../JobCardComponent/JobCardComponent";
import { exportedJobData } from "../../Data/JobData";
import TitleComponent from "../TitleComponent/TitleComponent";

export default function JobComponent() {
  return (
    <div className="MR-SectionContiner px-162 pb-150">
      <TitleComponent
        title="Job Openings"
        desc="Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry."
        highlightedWords={["Job Openings"]}
        fw={false}
      />
      <div className="MR-JobcardFlex">
        {exportedJobData.map((data, index) => (
          <div className="MR-JobCardContainer" key={index}>
            <JobCardComponent
              Title={data.Title}
              location={data.location}
              Department={data.Department}
              jobDescription={data.jobDescription}
              Req1={data.Req1}
              Req2={data.Req2}
              Req3={data.Req3}
              Req4={data.Req4}
              Req5={data.Req5}
            />
          </div>
        ))}
      </div>
    </div>
  );
}