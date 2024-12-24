import { MissionVisionCardData } from "../../Data/MissionVisionCardData";
import "./MissionVisionCardComponent.css";
export default function MissionVisionCardComponent({ reverse }) {
  return (
    <div
      className={
        reverse ? "AM-mission-vision-card-reverse" : "AM-mission-vision-card"
      }
    >
      <div className="mission-vision-img">
        {!reverse && <img src={MissionVisionCardData[0].img} alt="" />}
        {reverse && <img src={MissionVisionCardData[1].img} alt="" />}
      </div>
      <div className="content">
        {!reverse && (
          <h3 className="title fw-500">{MissionVisionCardData[0].title}</h3>
        )}
        {reverse && (
          <h3 className="title fw-500">{MissionVisionCardData[1].title}</h3>
        )}
        {!reverse && (
          <p className="desc fw-300 f-18">{MissionVisionCardData[0].desc}</p>
        )}
        {reverse && (
          <p className="desc fw-300 f-18">{MissionVisionCardData[1].desc}</p>
        )}
      </div>
    </div>
  );
}
