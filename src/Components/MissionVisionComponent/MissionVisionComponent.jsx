import "./MissionVisionComponent.css";
import TitleComponent from "../TitleComponent/TitleComponent";

export default function MissionVisionComponent() {
  return (
    <section className="AM-missionVision-sec pb-150  px-162">
      <TitleComponent
        titleLeft=""
        span="Mission & Vision"
        titleRight=""
        desc="We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development"
      />
    </section>
  );
}
