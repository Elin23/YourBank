// import "./TitleComponent.css";
// export default function TitleComponent({ titleLeft, span, titleRight, desc }) {
//   return (
//     <div className="AM-title-comp ">
//       <h3 className="title  fw-500  fs-48 ">
//         {titleLeft}
//         <span className="span">{span}</span>
//         {titleRight}
//       </h3>
//       <p className="desc desc-product fw-300 f-18">{desc}</p>
//     </div>
//   );
// }

import "./TitleComponent.css";
export default function TitleComponent({ title, desc, highlightedWords }) {
  const highlightText = (text) => {
    if (!highlightedWords || highlightedWords.length === 0) return text;
    const regex = new RegExp(`(${highlightedWords.join('|')})`, 'gi');
    return text.split(regex).map((part, index) => 
      highlightedWords.includes(part) ? <span key={index} className="highlight">{part}</span> : part
    );
  };

  return (
    <div className="AM-title-comp ">
      <h3 className="title fw-400 fs-48 ">
        {highlightText(title)}
      </h3>
      <p className="desc fw-300 f-18">{desc}</p>
    </div>
    );
}