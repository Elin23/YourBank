import TitleComponent from "../TitleComponent/TitleComponent";
import UseCasesComponent from "../UseCasesComponent/UseCasesComponent";
import "./UseCasesSectionComponent.css";

export default function UseCasesSectionComponent() {
  return (
    <>
      <div className="px-162 pb-150 Af-UseCasesSectionComponent">
        <TitleComponent
        title="Use Cases"
        desc={ "At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions"}
        highlightedWords={["Use", "Cases"]}
        />
        <div>
          <UseCasesComponent reverse={false} />
          <UseCasesComponent reverse={true} />
        </div>
      </div>
    </>
  );
}
