import UseCasesComponent from '../UseCasesComponent/UseCasesComponent'
import './UseCasesSectionComponent.css'

export default function UseCasesSectionComponent() {
    return (
        <>
            <div className='px-162 pb-150 Af-UseCasesSectionComponent'>
                <div className='Af-titleUseCasesComponent'>
                    <h2><span>Use Cases</span></h2>
                    <p>At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
                </div>
                <div>
                    <UseCasesComponent reverse={false} />
                    <UseCasesComponent reverse={true} />
                </div>
            </div>
        </>
    )
}
