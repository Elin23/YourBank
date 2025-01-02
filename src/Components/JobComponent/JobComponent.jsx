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
          <JobCardComponent
            key={index}
            Title={data.Title}
            location={data.location}
            Department={data.Department}
            jobDescription={data.jobDescription}
            Requirements={data.Requirements}
          />
          
        ))}
      </div>
    </div>
  );
}



