import { exportedMissionVisionCardData } from "../../Data/MissionVisionCardData";
import { exportedMissionVisionCardData } from "../../Data/MissionVisionCardData";
import "./MissionVisionCardComponent.css";
export default function MissionVisionCardComponent({ reverse }) {
  return (
    <div
      className={
        reverse ? "AM-mission-vision-card-reverse" : "AM-mission-vision-card"
      }
    >
      <div className="mission-vision-img">
        {!reverse && (
          <img
            src={exportedMissionVisionCardData[0].img}
            alt={exportedMissionVisionCardData[0].alt}
          />
        )}
        {reverse && (
          <img
            src={exportedMissionVisionCardData[1].img}
            alt={exportedMissionVisionCardData[1].alt}
          />
        )}
      </div>

      <div className="content">
        {!reverse && (
          <h3 className="title fw-500">
            {exportedMissionVisionCardData[0].title}
          </h3>
        )}
        {reverse && (
          <h3 className="title fw-500">
            {exportedMissionVisionCardData[1].title}
          </h3>
        )}
        {!reverse && (
          <p className="desc fw-300 f-18">
            {exportedMissionVisionCardData[0].desc}
          </p>
        )}
        {reverse && (
          <p className="desc fw-300 f-18">
            {exportedMissionVisionCardData[1].desc}
          </p>
        )}
      </div>
    </div>
  );
}
